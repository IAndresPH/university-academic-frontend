<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <LoginForm
      ref="loginFormRef"
      :errorMessage="errorMessage"
      :showPassword="showPassword"
      @submit="handleSubmit"
      @togglePassword="togglePassword"
      @goPassword="goToForgotPassword"
      @goRegister="goToRegister"
    />
  </v-container>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useAuth } from "@/composables/useAuth";
  import LoginForm from "@/components/login/LoginForm.vue";

  const router = useRouter();
  const { errorMessage, login } = useAuth();

  const showPassword = ref(false);
  const loginFormRef = ref(null); // 👈 acceso al hijo

  function togglePassword() {
    showPassword.value = !showPassword.value;
  }

  async function handleSubmit() {
    const { formRef, form } = loginFormRef.value;

    const res = await formRef.validate();
    const valid = typeof res === "boolean" ? res : res?.valid;

    if (!valid) return;

    const success = login(form.email, form.password);

    if (!success) return;

    console.log("Login exitoso", form);
    router.push({ name: "Dashboard" });
  }

  function goToForgotPassword() {
    router.push({ name: "ForgotPassword" });
  }

  function goToRegister() {
    router.push({ name: "Register" });
  }
</script>
