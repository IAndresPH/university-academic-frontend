<template>
  <section class="page">
    <h1 class="title">Estudiantes</h1>

    <!-- Filtros -->
    <div class="filters">
      <input v-model="search" type="search" placeholder="Buscar por documento, nombre o email…" />

      <select v-model="programa">
        <option value="">Programa (todos)</option>
        <option v-for="p in programasUnicos" :key="p" :value="p">{{ p }}</option>
      </select>

      <select v-model="semestre">
        <option value="">Semestre (todos)</option>
        <option v-for="s in 12" :key="s" :value="s">{{ s }}</option>
      </select>

      <button class="btn ghost" @click="resetFilters" :disabled="!hayFiltros">
        Limpiar filtros
      </button>
    </div>

    <!-- Resumen -->
    <div class="summary">
      <span>Mostrando {{ paginated.length }} de {{ filtered.length }} resultados</span>
      <div class="per-page">
        <label>Filas por página</label>
        <select v-model.number="perPage">
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="20">20</option>
          <option :value="50">50</option>
        </select>
      </div>
    </div>

    <!-- Tabla -->
    <div class="table-wrap">
      <table class="grid">
        <thead>
          <tr>
            <th @click="setSort('documento')" :class="thClass('documento')">Documento</th>
            <th @click="setSort('nombre')" :class="thClass('nombre')">Nombre</th>
            <th @click="setSort('email')" :class="thClass('email')">Email</th>
            <th @click="setSort('programa')" :class="thClass('programa')">Programa</th>
            <th @click="setSort('semestre')" :class="thClass('semestre')">Semestre</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="st in paginated" :key="st.documento">
            <td>{{ st.documento }}</td>
            <td>{{ st.nombre }}</td>
            <td>{{ st.email }}</td>
            <td>{{ st.programa }}</td>
            <td class="center">{{ st.semestre }}</td>
            <td class="actions-col">
              <button class="mini" @click="ver(st)">Ver</button>
              <button class="mini warn" @click="editar(st)">Editar</button>
              <button class="mini danger" @click="eliminar(st)">Eliminar</button>
            </td>
          </tr>

          <tr v-if="!paginated.length">
            <td colspan="6" class="empty">No hay resultados.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Paginación -->
    <div class="pager" v-if="totalPages > 1">
      <button class="btn" :disabled="page === 1" @click="page--">Anterior</button>
      <span>Página {{ page }} de {{ totalPages }}</span>
      <button class="btn" :disabled="page === totalPages" @click="page++">Siguiente</button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed, reactive, ref, watch } from 'vue';
  import { useRouter } from 'vue-router';

  /** Router para navegar al editor */
  const router = useRouter();

  /** Mock de estudiantes (reemplaza por fetch a tu API) */
  type Student = {
    documento: string;
    nombre: string;
    email: string;
    programa: string;
    semestre: number;
  };
  const data = reactive<Student[]>([
    {
      documento: '1001',
      nombre: 'Ana López',
      email: 'ana@uni.edu',
      programa: 'Ingeniería de Sistemas',
      semestre: 5,
    },
    {
      documento: '1002',
      nombre: 'Carlos Pérez',
      email: 'carlos@uni.edu',
      programa: 'Administración',
      semestre: 3,
    },
    {
      documento: '1003',
      nombre: 'Luisa Martínez',
      email: 'luisa@uni.edu',
      programa: 'Diseño Gráfico',
      semestre: 2,
    },
    {
      documento: '1004',
      nombre: 'Juan Rodríguez',
      email: 'juan@uni.edu',
      programa: 'Ingeniería Industrial',
      semestre: 6,
    },
    {
      documento: '1005',
      nombre: 'María González',
      email: 'maria@uni.edu',
      programa: 'Ingeniería de Sistemas',
      semestre: 1,
    },
    {
      documento: '1006',
      nombre: 'Pedro Ortiz',
      email: 'pedro@uni.edu',
      programa: 'Contaduría',
      semestre: 8,
    },
    {
      documento: '1007',
      nombre: 'Sara Mejía',
      email: 'sara@uni.edu',
      programa: 'Administración',
      semestre: 4,
    },
    {
      documento: '1008',
      nombre: 'Diego Rojas',
      email: 'diego@uni.edu',
      programa: 'Ingeniería Industrial',
      semestre: 10,
    },
    {
      documento: '1009',
      nombre: 'Paula Rincón',
      email: 'paula@uni.edu',
      programa: 'Ingeniería de Sistemas',
      semestre: 7,
    },
    {
      documento: '1010',
      nombre: 'Nicolás Cruz',
      email: 'nicolas@uni.edu',
      programa: 'Diseño Gráfico',
      semestre: 2,
    },
  ]);

  /** Filtros y búsqueda */
  const search = ref('');
  const programa = ref<string | ''>('');
  const semestre = ref<number | ''>('');

  /** Ordenamiento */
  const sortKey = ref<keyof Student>('nombre');
  const sortDir = ref<'asc' | 'desc'>('asc');
  const setSort = (key: keyof Student) => {
    if (sortKey.value === key) {
      sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey.value = key;
      sortDir.value = 'asc';
    }
  };
  const thClass = (key: keyof Student) => ({
    sortable: true,
    asc: sortKey.value === key && sortDir.value === 'asc',
    desc: sortKey.value === key && sortDir.value === 'desc',
  });

  /** Paginación */
  const page = ref(1);
  const perPage = ref(10);
  watch([search, programa, semestre, perPage], () => {
    page.value = 1;
  });

  /** Utilidades */
  const normalize = (s: string) =>
    s
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

  /** Búsqueda + filtros */
  const filtered = computed(() => {
    const q = normalize(search.value);
    return data.filter((st) => {
      const passSearch =
        !q ||
        normalize(st.documento).includes(q) ||
        normalize(st.nombre).includes(q) ||
        normalize(st.email).includes(q);
      const passProg = !programa.value || st.programa === programa.value;
      const passSem = !semestre.value || st.semestre === semestre.value;
      return passSearch && passProg && passSem;
    });
  });

  /** Ordenamiento */
  const sorted = computed(() => {
    const arr = [...filtered.value];
    const key = sortKey.value;
    const dir = sortDir.value === 'asc' ? 1 : -1;
    return arr.sort((a, b) => {
      const va = (a as any)[key];
      const vb = (b as any)[key];
      if (typeof va === 'number' && typeof vb === 'number') return (va - vb) * dir;
      return String(va).localeCompare(String(vb)) * dir;
    });
  });

  /** Paginación calculada */
  const totalPages = computed(() => Math.max(1, Math.ceil(sorted.value.length / perPage.value)));
  const paginated = computed(() => {
    const start = (page.value - 1) * perPage.value;
    return sorted.value.slice(start, start + perPage.value);
  });

  /** Programas únicos para filtro */
  const programasUnicos = computed(() => {
    return Array.from(new Set(data.map((d) => d.programa))).sort();
  });

  /** Helpers UI */
  const resetFilters = () => {
    search.value = '';
    programa.value = '';
    semestre.value = '';
  };
  const hayFiltros = computed(() => !!search.value || !!programa.value || !!semestre.value);

  /** Acciones */
  const ver = (st: Student) => {
    alert(`Ver estudiante:\n${st.nombre} (${st.documento})`);
  };
  const editar = (st: Student) => {
    router.push({ name: 'EditarEstudiante', params: { id: st.documento } });
  };
  const eliminar = (st: Student) => {
    if (confirm(`¿Eliminar estudiante ${st.nombre}?`)) {
      const i = data.findIndex((x) => x.documento === st.documento);
      if (i >= 0) data.splice(i, 1);
    }
  };
</script>

<style scoped>
  .page {
    max-width: 1100px;
    margin: 20px auto;
    padding: 0 16px;
  }
  .title {
    font-size: 28px;
    font-weight: 800;
    margin: 0 0 14px;
  }

  /* Filtros */
  .filters {
    display: grid;
    grid-template-columns: 1fr 220px 160px auto;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }
  .filters input,
  .filters select {
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 9px 10px;
    outline: none;
  }
  .filters input:focus,
  .filters select:focus {
    border-color: #2563eb;
  }
  .btn.ghost {
    background: #fff;
    color: #2563eb;
    border: 1px solid #2563eb;
    border-radius: 6px;
    padding: 8px 12px;
  }

  /* Resumen */
  .summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6px 0 10px;
  }
  .per-page {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .per-page select {
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 6px 8px;
  }

  /* Tabla */
  .table-wrap {
    overflow: auto;
  }
  .grid {
    width: 100%;
    border-collapse: collapse;
  }
  .grid th,
  .grid td {
    border: 1px solid #e5e7eb;
    padding: 10px 12px;
    font-size: 14px;
  }
  .grid thead th {
    background: #f8fafc;
    user-select: none;
    cursor: pointer;
  }
  .grid thead th.sortable {
    position: relative;
  }
  .grid thead th.asc::after {
    content: '▲';
    position: absolute;
    right: 8px;
    font-size: 10px;
  }
  .grid thead th.desc::after {
    content: '▼';
    position: absolute;
    right: 8px;
    font-size: 10px;
  }
  .center {
    text-align: center;
  }
  .actions-col {
    display: flex;
    gap: 6px;
  }
  .mini {
    border: 1px solid #cbd5e1;
    background: #fff;
    border-radius: 6px;
    padding: 6px 8px;
    cursor: pointer;
  }
  .mini.warn {
    border-color: #f59e0b;
    color: #93460b;
  }
  .mini.danger {
    border-color: #dc2626;
    color: #b91c1c;
  }
  .empty {
    text-align: center;
    color: #64748b;
    padding: 18px;
  }

  /* Paginación */
  .pager {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }
  .btn {
    border: 1px solid #2563eb;
    color: #2563eb;
    background: #fff;
    border-radius: 6px;
    padding: 8px 12px;
    cursor: pointer;
  }
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 760px) {
    .filters {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
