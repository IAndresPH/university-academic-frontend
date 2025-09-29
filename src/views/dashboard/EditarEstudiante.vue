<template>
  <section class="page">
    <h1 class="title">Editar estudiante</h1>

    <form class="card" novalidate @submit.prevent="onSubmit">
      <!-- Documento (solo lectura) -->
      <div class="field">
        <label for="doc">Documento</label>
        <input id="doc" v-model="form.documento" type="text" readonly />
        <small class="hint">No se puede modificar el documento.</small>
      </div>

      <!-- Nombres -->
      <div class="grid-2">
        <div class="field">
          <label for="nombre">Nombre</label>
          <input
            id="nombre"
            v-model.trim="form.nombre"
            type="text"
            autocomplete="given-name"
            @blur="touch('nombre')"
            :class="{ invalid: showError('nombre') }"
            placeholder=" "
          />
          <small v-if="showError('nombre')" class="error">{{ errors.nombre }}</small>
        </div>

        <div class="field">
          <label for="apellido">Apellido</label>
          <input
            id="apellido"
            v-model.trim="form.apellido"
            type="text"
            autocomplete="family-name"
            @blur="touch('apellido')"
            :class="{ invalid: showError('apellido') }"
            placeholder=" "
          />
          <small v-if="showError('apellido')" class="error">{{ errors.apellido }}</small>
        </div>
      </div>

      <!-- Email y Teléfono -->
      <div class="grid-2">
        <div class="field">
          <label for="email">Correo institucional</label>
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
            autocomplete="email"
            @blur="touch('email')"
            :class="{ invalid: showError('email') }"
            placeholder=" "
          />
          <small v-if="showError('email')" class="error">{{ errors.email }}</small>
        </div>

        <div class="field">
          <label for="telefono">Teléfono</label>
          <input
            id="telefono"
            v-model.trim="form.telefono"
            type="tel"
            inputmode="tel"
            autocomplete="tel"
            @blur="touch('telefono')"
            :class="{ invalid: showError('telefono') }"
            placeholder=" "
          />
          <small v-if="showError('telefono')" class="error">{{ errors.telefono }}</small>
        </div>
      </div>

      <!-- Programa y Semestre -->
      <div class="grid-2">
        <div class="field">
          <label for="programa">Programa</label>
          <select
            id="programa"
            v-model="form.programa"
            @blur="touch('programa')"
            :class="{ invalid: showError('programa') }"
          >
            <option value="" disabled>Selecciona un programa</option>
            <option v-for="p in programas" :key="p" :value="p">{{ p }}</option>
          </select>
          <small v-if="showError('programa')" class="error">{{ errors.programa }}</small>
        </div>

        <div class="field">
          <label for="semestre">Semestre</label>
          <input
            id="semestre"
            v-model.number="form.semestre"
            type="number"
            min="1"
            max="12"
            step="1"
            @blur="touch('semestre')"
            :class="{ invalid: showError('semestre') }"
            placeholder="1"
          />
          <small v-if="showError('semestre')" class="error">{{ errors.semestre }}</small>
        </div>
      </div>

      <!-- Fechas -->
      <div class="grid-2">
        <div class="field">
          <label for="nacimiento">Fecha de nacimiento</label>
          <input
            id="nacimiento"
            v-model="form.nacimiento"
            type="date"
            @blur="touch('nacimiento')"
            :class="{ invalid: showError('nacimiento') }"
          />
          <small v-if="showError('nacimiento')" class="error">{{ errors.nacimiento }}</small>
        </div>

        <div class="field">
          <label for="ingreso">Fecha de ingreso</label>
          <input
            id="ingreso"
            v-model="form.ingreso"
            type="date"
            @blur="touch('ingreso')"
            :class="{ invalid: showError('ingreso') }"
          />
          <small v-if="showError('ingreso')" class="error">{{ errors.ingreso }}</small>
        </div>
      </div>

      <!-- Acciones -->
      <div class="actions">
        <button type="button" class="btn ghost" @click="volver" :disabled="submitting">
          Volver
        </button>
        <button type="submit" class="btn primary" :disabled="!isValid || submitting">
          {{ submitting ? 'Guardando…' : 'Guardar cambios' }}
        </button>
      </div>

      <p v-if="serverMsg" :class="serverOk ? 'ok' : 'error'" class="mt">
        {{ serverMsg }}
      </p>
    </form>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, computed, reactive, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  type Form = {
    documento: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    programa: string;
    semestre: number | null;
    nacimiento: string;
    ingreso: string;
  };
  type FormKey = keyof Form;
  type Errors = Partial<Record<FormKey, string>>;
  type Touched = Partial<Record<FormKey, boolean>>;

  const route = useRoute();
  const router = useRouter();
  const submitting = ref(false);
  const serverMsg = ref('');
  const serverOk = ref(false);

  const programas = [
    'Ingeniería de Sistemas',
    'Ingeniería Industrial',
    'Administración',
    'Contaduría',
    'Diseño Gráfico',
  ];

  // estado del formulario
  const form = reactive<Form>({
    documento: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    programa: '',
    semestre: null,
    nacimiento: '',
    ingreso: '',
  });

  const touched = reactive<Touched>({});
  const errors = reactive<Errors>({});

  const touch = (k: FormKey) => {
    touched[k] = true;
    validateField(k);
  };
  const showError = (k: FormKey) => !!touched[k] && !!errors[k];

  const calcEdad = (iso: string) => {
    if (!iso) return 0;
    const n = new Date(iso);
    const h = new Date();
    let e = h.getFullYear() - n.getFullYear();
    const m = h.getMonth() - n.getMonth();
    if (m < 0 || (m === 0 && h.getDate() < n.getDate())) e--;
    return e;
  };

  const validateField = (k: FormKey) => {
    const v = form[k] as any;
    let msg = '';
    switch (k) {
      case 'nombre':
        if (!v) msg = 'El nombre es obligatorio.';
        else if (v.length < 2) msg = 'Mínimo 2 caracteres.';
        break;
      case 'apellido':
        if (!v) msg = 'El apellido es obligatorio.';
        else if (v.length < 2) msg = 'Mínimo 2 caracteres.';
        break;
      case 'email':
        if (!v) msg = 'El email es obligatorio.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = 'Email inválido.';
        break;
      case 'telefono':
        if (v && !/^\+?\d{7,15}$/.test(String(v))) msg = 'Teléfono inválido.';
        break;
      case 'programa':
        if (!v) msg = 'Selecciona un programa.';
        break;
      case 'semestre':
        if (v == null || v === '') msg = 'Indica el semestre.';
        else if (v < 1 || v > 12) msg = 'Rango permitido: 1 a 12.';
        break;
      case 'nacimiento':
        if (!v) msg = 'La fecha de nacimiento es obligatoria.';
        else if (calcEdad(v) < 14) msg = 'La edad debe ser al menos 14 años.';
        break;
      case 'ingreso':
        if (!v) msg = 'La fecha de ingreso es obligatoria.';
        break;
    }
    if (msg) errors[k] = msg;
    else delete errors[k];
  };

  const validateAll = () => {
    (Object.keys(form) as FormKey[]).forEach((k) => touch(k));
    return Object.keys(errors).length === 0;
  };

  const isValid = computed(() => {
    const required = [
      'nombre',
      'apellido',
      'email',
      'programa',
      'semestre',
      'nacimiento',
      'ingreso',
    ] as FormKey[];
    return required.every((k) => !!form[k]) && Object.keys(errors).length === 0;
  });

  const volver = () => {
    router.back();
  };

  /** Carga inicial (mock). Reemplaza por fetch real usando route.params.id */
  const loadStudent = async (id: string) => {
    // Simula API:
    await new Promise((res) => window.setTimeout(res, 300));
    // Demo: datos ficticios a partir del id
    Object.assign(form, {
      documento: id,
      nombre: 'Ana',
      apellido: 'López',
      email: 'ana@uni.edu',
      telefono: '+573001234567',
      programa: 'Ingeniería de Sistemas',
      semestre: 5,
      nacimiento: '2002-05-20',
      ingreso: '2021-01-15',
    } satisfies Form);
  };

  onMounted(() => {
    const id = String(route.params.id || '');
    if (!id) {
      serverOk.value = false;
      serverMsg.value = 'No se recibió el identificador del estudiante.';
      return;
    }
    loadStudent(id);
  });

  const onSubmit = async () => {
    if (!validateAll()) return;
    submitting.value = true;
    serverMsg.value = '';
    serverOk.value = false;
    try {
      // Reemplaza por tu API real:
      // await axios.put(`/api/estudiantes/${form.documento}`, form)
      await new Promise((res) => window.setTimeout(res, 600));
      serverOk.value = true;
      serverMsg.value = 'Cambios guardados correctamente.';
    } catch {
      serverOk.value = false;
      serverMsg.value = 'No se pudieron guardar los cambios. Intenta nuevamente.';
    } finally {
      submitting.value = false;
    }
  };
</script>

<style scoped>
  .page {
    max-width: 920px;
    margin: 24px auto;
    padding: 0 16px;
  }
  .title {
    font-size: 32px;
    font-weight: 800;
    margin: 0 0 16px;
  }
  .card {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
  }
  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }
  .field label {
    font-weight: 700;
    margin-bottom: 6px;
  }
  .field input,
  .field select {
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 10px 12px;
    outline: none;
    transition: border-color 0.15s;
  }
  .field input:focus,
  .field select:focus {
    border-color: #2563eb;
  }
  .hint {
    color: #64748b;
    font-size: 12px;
    margin-top: 4px;
  }
  .invalid {
    border-color: #dc2626 !important;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    margin-top: 8px;
  }
  .btn {
    border: 1px solid #2563eb;
    border-radius: 6px;
    padding: 10px 14px;
    font-weight: 700;
    cursor: pointer;
    background: #fff;
    color: #2563eb;
  }
  .btn.primary {
    background: #2563eb;
    color: #fff;
  }
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .error {
    color: #dc2626;
    margin-top: 4px;
  }
  .ok {
    color: #16a34a;
  }
  .mt {
    margin-top: 10px;
  }
  @media (max-width: 680px) {
    .grid-2 {
      grid-template-columns: 1fr;
    }
  }
</style>
