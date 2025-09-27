<template>
  <v-container fluid>
    <!-- Encabezado -->
    <v-row class="mb-1">
      <v-col>
        <h1 class="text-h4 font-weight-bold mb-2">Gestión de Estudiantes</h1>
        <p class="text-subtitle-1 text-grey">
          Administra la información académica de los estudiantes registrados
        </p>
      </v-col>
    </v-row>

    <!-- Barra de acciones -->
    <v-row class="mb-4">
      <v-col class="d-flex justify-end">
        <v-btn color="secondary" prepend-icon="mdi-upload" class="mr-2" @click="uploadStudents">
          Cargar Estudiantes
        </v-btn>

        <v-btn color="success" prepend-icon="mdi-file-excel" class="mr-2" @click="downloadTemplate">
          Descargar Excel
        </v-btn>

        <v-btn color="primary" prepend-icon="mdi-plus" @click="createStudent">
          Crear Estudiante
        </v-btn>
      </v-col>
    </v-row>

    <!-- Tabla de estudiantes -->
    <v-card>
      <v-data-table :headers="headers" :items="students">
        <!-- Columna Semestre centrada -->
        <template v-slot:item.semester="{ item }">
          <div class="text-center">
            {{ item.semester }}
          </div>
        </template>

        <!-- Columna Promedio centrada -->
        <template v-slot:item.average="{ item }">
          <div class="text-center">
            {{ item.average }}
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
              @click="viewStudent(item)"
            />
            <v-btn
              icon="mdi-pencil"
              color="warning"
              size="small"
              variant="text"
              @click="editStudent(item)"
            />
            <v-btn
              icon="mdi-delete"
              color="error"
              size="small"
              variant="text"
              @click="deleteStudent(item)"
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
    { title: 'Código', key: 'code' },
    { title: 'Programa Académico', key: 'program' },
    { title: 'Semestre', key: 'semester' },
    { title: 'Estado', key: 'status' },
    { title: 'Fecha de Ingreso', key: 'admissionDate' },
    { title: 'Correo Institucional', key: 'email' },
    { title: 'Promedio', key: 'average' },
    { title: 'Acciones', key: 'actions', sortable: false },
  ];

  const students = ref([
    {
      code: '20231001',
      program: 'Ingeniería de Sistemas',
      semester: 5,
      status: 'Activo',
      admissionDate: '2021-01-15',
      email: 'juan.perez@university.edu',
      average: 4.2,
    },
    {
      code: '20221045',
      program: 'Medicina',
      semester: 3,
      status: 'Activo',
      admissionDate: '2022-02-10',
      email: 'maria.gomez@university.edu',
      average: 3.8,
    },
  ]);

  function createStudent() {
    console.log('Crear estudiante');
  }

  function uploadStudents() {
    console.log('Cargar estudiantes desde archivo');
  }

  function viewStudent(student) {
    console.log('Ver detalles:', student);
  }

  function editStudent(student) {
    console.log('Editar estudiante:', student);
  }

  function deleteStudent(student) {
    console.log('Eliminar estudiante:', student);
  }
</script>
