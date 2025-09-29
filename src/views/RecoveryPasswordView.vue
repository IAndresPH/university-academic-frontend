<template>
  <ForgotPasswordForm @goLogin="goToLogin" />
</template>

<script setup>
  import { useRouter } from "vue-router";
  import ForgotPasswordForm from "@/components/password-recovery/RecoverPasswordForm.vue";

  const router = useRouter();

  function goToLogin() {
    router.push({ name: "Login" });
  }
</script>
