<template>
  <v-layout>
    <v-navigation-drawer color="deep-purple-darken-3" theme="dark" permanent>
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-school"
          title="Estudiante"
          :to="{ name: 'DashboardStudent' }"
        />
        <v-list-item prepend-icon="mdi-teach" title="Docente" :to="{ name: 'DashboardTeacher' }" />
        <v-list-item
          prepend-icon="mdi-domain"
          title="Universidad"
          :to="{ name: 'DashboardAdmin' }"
        />
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="red-darken-2" variant="flat"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
  // Aquí no necesitas lógica todavía, solo la estructura
</script>
