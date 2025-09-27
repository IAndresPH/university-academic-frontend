<template>
  <v-container fluid>
    <!-- Encabezado -->
    <v-row class="mb-1">
      <v-col>
        <h1 class="text-h4 font-weight-bold mb-2">Gestión de Docentes</h1>
        <p class="text-subtitle-1 text-grey">
          Administra la información institucional de los docentes registrados
        </p>
      </v-col>
    </v-row>

    <!-- Barra de acciones -->
    <v-row class="mb-4">
      <v-col class="d-flex justify-end">
        <v-btn color="secondary" prepend-icon="mdi-upload" class="mr-2" @click="uploadTeachers">
          Cargar Docentes
        </v-btn>

        <v-btn color="success" prepend-icon="mdi-file-excel" class="mr-2" @click="downloadTemplate">
          Descargar Excel
        </v-btn>

        <v-btn color="primary" prepend-icon="mdi-plus" @click="createTeacher">
          Crear Docente
        </v-btn>
      </v-col>
    </v-row>

    <!-- Tabla de docentes -->
    <v-card>
      <v-data-table :headers="headers" :items="teachers">
        <!-- Columna Horas Asignadas centrada -->
        <template v-slot:item.hours="{ item }">
          <div class="text-center">
            {{ item.hours }}
          </div>
        </template>

        <!-- Acciones -->
        <template v-slot:item.actions="{ item }">
          <div class="d-flex align-center">
            <v-btn
              icon="mdi-eye"
              color="info"
              size="small"
              variant="text"
              @click="viewTeacher(item)"
            />
            <v-btn
              icon="mdi-pencil"
              color="warning"
              size="small"
              variant="text"
              @click="editTeacher(item)"
            />
            <v-btn
              icon="mdi-delete"
              color="error"
              size="small"
              variant="text"
              @click="deleteTeacher(item)"
            />
          </div>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const headers = [
    { title: 'Código Docente', key: 'code' },
    { title: 'Departamento Académico', key: 'department' },
    { title: 'Categoría', key: 'category' },
    { title: 'Estado', key: 'status' },
    { title: 'Fecha de Vinculación', key: 'hireDate' },
    { title: 'Correo Institucional', key: 'email' },
    { title: 'Horas Asignadas', key: 'hours' },
    { title: 'Acciones', key: 'actions', sortable: false },
  ];

  const teachers = ref([
    {
      code: 'D2023001',
      department: 'Ingeniería',
      category: 'Planta',
      status: 'Activo',
      hireDate: '2018-08-10',
      email: 'carlos.martinez@university.edu',
      hours: 16,
    },
    {
      code: 'D2023010',
      department: 'Ciencias de la Salud',
      category: 'Catedrático',
      status: 'Activo',
      hireDate: '2020-02-15',
      email: 'laura.fernandez@university.edu',
      hours: 8,
    },
  ]);

  function createTeacher() {
    console.log('Crear docente');
  }

  function uploadTeachers() {
    console.log('Cargar docentes desde archivo');
  }

  function downloadTemplate() {
    console.log('Descargar plantilla Excel');
  }

  function viewTeacher(teacher) {
    console.log('Ver detalles:', teacher);
  }

  function editTeacher(teacher) {
    console.log('Editar docente:', teacher);
  }

  function deleteTeacher(teacher) {
    console.log('Eliminar docente:', teacher);
  }
</script>
