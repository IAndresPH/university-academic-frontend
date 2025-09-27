<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list>
          <v-list-item prepend-icon="mdi-account-circle" title="Perfil" subtitle="Administrador">
            <template v-slot:append>
              <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail" />
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-school"
            title="Estudiante"
            :to="{ name: 'DashboardStudent' }"
            link
          />
          <v-list-item
            prepend-icon="mdi-teach"
            title="Docente"
            :to="{ name: 'DashboardTeacher' }"
            link
          />
          <v-list-item
            prepend-icon="mdi-domain"
            title="Universidad"
            :to="{ name: 'DashboardUniversity' }"
            link
          />
        </v-list>

        <!-- Logout -->
        <template v-slot:append>
          <v-list-item prepend-icon="mdi-logout" @click="handleLogout" />
        </template>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid class="pa-6">
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';

  const drawer = ref(true);
  const rail = ref(false);

  function handleLogout() {
    console.log('Cerrar sesión');
  }
</script>

<style>
  html,
  body,
  #app {
    height: 100%;
    margin: 0;
  }

  .v-application {
    height: 100%;
  }
</style>
