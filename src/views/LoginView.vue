<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <LoginForm @goPassword="goToForgotPassword" @goRegister="goToRegister" />
  </v-container>
</template>

<script setup>
  import LoginForm from "@/components/login/LoginForm.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  function goToForgotPassword() {
    router.push({ name: "ForgotPassword" });
  }

  function goToRegister() {
    router.push({ name: "Register" });
  }
</script>
