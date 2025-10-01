<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list>
          <v-list-item prepend-icon="mdi-account-circle" :title="user.name" :subtitle="user.role">
            <template v-slot:append>
              <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail" />
            </template>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list density="compact" nav>
          <v-list-item
            v-for="item in menu"
            :key="item.value"
            :prepend-icon="item.icon"
            :title="item.title"
            @click="goTo(item.route)"
          />
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-app-bar flat>
          <v-spacer />
          <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-account-circle" v-bind="props" variant="text" />
            </template>

            <v-list>
              <v-list-item prepend-icon="mdi-account" title="Perfil" @click="goToProfile" />
              <v-list-item prepend-icon="mdi-theme-light-dark" title="Modo nocturno" @click="toggleDarkMode" />
              <v-list-item prepend-icon="mdi-logout" title="Cerrar sesión" @click="logout" />
            </v-list>
          </v-menu>
        </v-app-bar>

        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useTheme } from "vuetify";

  const router = useRouter();
  const theme = useTheme();

  const drawer = ref(true);
  const rail = ref(true);

  const user = ref({
    name: "Juan Pérez",
    role: "Administrador",
  });

  const menu = [
    {
      title: "Estudiante",
      value: "student",
      icon: "mdi-school",
      route: { name: "DashboardStudent" },
    },
    {
      title: "Docente",
      value: "teacher",
      icon: "mdi-teach",
      route: { name: "DashboardTeacher" },
    },
    {
      title: "Universidad",
      value: "university",
      icon: "mdi-city-variant",
      route: { name: "DashboardUniversity" },
    },
  ];

  function goTo(route) {
    router.push(route);
  }

  function goToProfile() {
    router.push({ name: "ProfileSettings" });
  }

  function toggleDarkMode() {
    theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
  }

  function logout() {
    localStorage.removeItem("token");
    router.push({ name: "Login" });
  }
</script>
