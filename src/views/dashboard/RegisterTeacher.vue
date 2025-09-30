<template>
  <v-container fluid class="py-4">
    <v-row class="mb-1">
      <v-col>
        <h1 class="text-h5 font-weight-bold">Registrar Docente</h1>
        <p class="text-body-2 text-grey">Crea un nuevo registro validado</p>
      </v-col>
    </v-row>

    <v-card>
      <v-card-text>
        <v-form ref="formRef" v-model="isValid" validate-on="input">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model.trim="form.code"
                label="Código Docente"
                :rules="[rules.required, rules.minLen(6)]"
                counter="12"
                maxlength="12"
                prepend-inner-icon="mdi-identifier"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="form.department"
                :items="departments"
                label="Departamento Académico"
                :rules="[rules.required]"
                prepend-inner-icon="mdi-domain"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="form.category"
                :items="categories"
                label="Categoría"
                :rules="[rules.required]"
                prepend-inner-icon="mdi-badge-account-horizontal"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                v-model="form.status"
                :items="['Activo', 'Inactivo']"
                label="Estado"
                :rules="[rules.required]"
                prepend-inner-icon="mdi-check-circle"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="form.hireDate"
                type="date"
                label="Fecha de vinculación"
                :rules="[rules.required, rules.notFuture]"
                prepend-inner-icon="mdi-calendar"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model.trim="form.email"
                label="Correo institucional"
                :rules="[rules.required, rules.email]"
                prepend-inner-icon="mdi-email"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model.number="form.hours"
                type="number"
                label="Horas asignadas (semanales)"
                :rules="[rules.required, rules.intRange(0, 40)]"
                prepend-inner-icon="mdi-clock-outline"
                min="0"
                max="40"
                step="1"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model.trim="form.phone"
                label="Teléfono (opcional)"
                :rules="[rules.phoneOpt]"
                prepend-inner-icon="mdi-phone"
                placeholder="+57 3001234567"
              />
            </v-col>
          </v-row>

          <v-alert
            v-if="serverMsg"
            :type="serverOk ? 'success' : 'error'"
            class="mt-2"
            density="comfortable"
            variant="tonal"
          >
            {{ serverMsg }}
          </v-alert>

          <div class="d-flex gap-2 mt-4">
            <v-btn
              color="grey"
              variant="outlined"
              prepend-icon="mdi-broom"
              :disabled="submitting"
              @click="resetForm"
            >
              Limpiar
            </v-btn>

            <v-spacer />

            <v-btn
              color="primary"
              prepend-icon="mdi-content-save"
              :loading="submitting"
              :disabled="!isValid || submitting"
              @click="onSubmit"
            >
              Crear Docente
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
  import { reactive, ref } from 'vue';

  const departments = [
    'Ingeniería',
    'Ciencias de la Salud',
    'Ciencias Sociales',
    'Administración',
    'Arquitectura y Diseño',
    'Educación',
  ];
  const categories = ['Planta', 'Catedrático', 'Ocasional'];

  const formRef = ref();
  const isValid = ref(false);
  const submitting = ref(false);
  const serverMsg = ref('');
  const serverOk = ref(false);

  const form = reactive({
    code: '',
    department: '',
    category: '',
    status: '',
    hireDate: '',
    email: '',
    hours: null,
    phone: '',
  });

  const rules = {
    required: (v) => !!v || v === 0 || 'Este campo es obligatorio.',
    minLen: (n) => (v) => v?.length >= n || `Mínimo ${n} caracteres.`,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Correo inválido.',
    intRange: (min, max) => (v) => {
      const n = Number(v);
      if (!Number.isInteger(n)) return 'Debe ser un número entero.';
      if (n < min || n > max) return `Rango permitido: ${min}–${max}.`;
      return true;
    },
    notFuture: (v) => {
      if (!v) return true;
      const today = new Date().toISOString().slice(0, 10);
      return v <= today || 'No puede ser una fecha futura.';
    },
    phoneOpt: (v) => !v || /^\+?\d[\d\s-]{6,}$/.test(v) || 'Teléfono inválido.',
  };

  const resetForm = () => {
    Object.assign(form, {
      code: '',
      department: '',
      category: '',
      status: '',
      hireDate: '',
      email: '',
      hours: null,
      phone: '',
    });
    serverMsg.value = '';
    serverOk.value = false;
    formRef.value?.resetValidation();
  };

  const onSubmit = async () => {
    serverMsg.value = '';
    serverOk.value = false;
    const { valid } = await formRef.value.validate();
    if (!valid) return;

    try {
      submitting.value = true;
      // Reemplaza por tu API real:
      // await axios.post('/api/docentes', form)
      await new Promise((r) => setTimeout(r, 800));
      serverOk.value = true;
      serverMsg.value = 'Docente registrado correctamente.';
      resetForm();
    } catch {
      serverOk.value = false;
      serverMsg.value = 'No se pudo registrar el docente. Intenta nuevamente.';
    } finally {
      submitting.value = false;
    }
  };
</script>

<style scoped>
  .gap-2 {
    gap: 8px;
  }
</style>
