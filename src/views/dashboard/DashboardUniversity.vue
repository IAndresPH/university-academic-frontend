<template>
  <v-container fluid>
    <!-- Encabezado -->
    <v-row class="mb-1">
      <v-col>
        <h1 class="text-h4 font-weight-bold mb-2">Gestión de Universidades</h1>
        <p class="text-subtitle-1 text-grey">
          Administra la información académica y de evaluación de las universidades registradas
        </p>
      </v-col>
    </v-row>

    <!-- Barra de acciones -->
    <v-row class="mb-4">
      <v-col class="d-flex justify-end">
        <v-btn color="secondary" prepend-icon="mdi-upload" class="mr-2" @click="uploadUniversities">
          Cargar Universidades
        </v-btn>

        <v-btn color="success" prepend-icon="mdi-file-excel" class="mr-2" @click="downloadTemplate">
          Descargar Excel
        </v-btn>

        <v-btn color="primary" prepend-icon="mdi-plus" @click="createUniversity">
          Crear Universidad
        </v-btn>
      </v-col>
    </v-row>

    <!-- Tabla de universidades -->
    <v-card>
      <v-data-table :headers="headers" :items="universities">
        <!-- Columnas de porcentajes centradas -->
        <template v-slot:item.firstCut="{ item }">
          <div class="text-center">{{ item.firstCut }}%</div>
        </template>
        <template v-slot:item.secondCut="{ item }">
          <div class="text-center">{{ item.secondCut }}%</div>
        </template>
        <template v-slot:item.thirdCut="{ item }">
          <div class="text-center">{{ item.thirdCut }}%</div>
        </template>

        <!-- Columna Calificación mínima centrada -->
        <template v-slot:item.minGrade="{ item }">
          <div class="text-center">{{ item.minGrade }}</div>
        </template>

        <!-- Acciones -->
        <template v-slot:item.actions="{ item }">
          <div class="d-flex align-center">
            <v-btn
              icon="mdi-eye"
              color="info"
              size="small"
              variant="text"
              @click="viewUniversity(item)"
            />
            <v-btn
              icon="mdi-pencil"
              color="warning"
              size="small"
              variant="text"
              @click="editUniversity(item)"
            />
            <v-btn
              icon="mdi-delete"
              color="error"
              size="small"
              variant="text"
              @click="deleteUniversity(item)"
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
    { title: 'Nombre', key: 'name' },
    { title: 'N° Cortes', key: 'numCuts' },
    { title: 'Primer Corte (%)', key: 'firstCut' },
    { title: 'Segundo Corte (%)', key: 'secondCut' },
    { title: 'Tercer Corte (%)', key: 'thirdCut' },
    { title: 'Nota Mínima Aprobatoria', key: 'minGrade' },
    { title: 'Acciones', key: 'actions', sortable: false },
  ];

  const universities = ref([
    {
      code: 'U2023001',
      name: 'Universidad Nacional',
      numCuts: 3,
      firstCut: 30,
      secondCut: 30,
      thirdCut: 40,
      minGrade: 3.0,
    },
    {
      code: 'U2023002',
      name: 'Universidad de los Andes',
      numCuts: 3,
      firstCut: 20,
      secondCut: 30,
      thirdCut: 50,
      minGrade: 3.5,
    },
  ]);

  function createUniversity() {
    console.log('Crear universidad');
  }

  function uploadUniversities() {
    console.log('Cargar universidades desde archivo');
  }

  function downloadTemplate() {
    console.log('Descargar plantilla Excel');
  }

  function viewUniversity(university) {
    console.log('Ver detalles:', university);
  }

  function editUniversity(university) {
    console.log('Editar universidad:', university);
  }

  function deleteUniversity(university) {
    console.log('Eliminar universidad:', university);
  }
</script>
