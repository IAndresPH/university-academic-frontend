<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <RegisterForm @cancel="goToLogin" @register-success="handleRegisterSuccess" />
  </v-container>
</template>

<script setup>
  import RegisterForm from "@/components/register/RegisterForm.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  function handleRegisterSuccess(formData) {
    console.log("Datos de registro enviados:", formData);
  }
  function goToLogin() {
    router.push({ name: "Login" });
  }
</script>
