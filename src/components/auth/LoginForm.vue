<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-sheet elevation="8" rounded="lg" class="pa-8" max-width="460" width="100%">
      <div class="text-center mb-6">
        <v-icon size="48" color="primary">mdi-school</v-icon>
        <h2 class="text-h5 font-weight-bold mt-2 mb-1">Sistema Académico</h2>
        <p class="text-body-2 text-medium-emphasis">
          Bienvenido al portal de gestión académica. Ingresa con tu usuario institucional para continuar.
        </p>
      </div>

      <v-divider class="mb-6" />

      <v-form ref="formRef" v-model="isValid" lazy-validation>
        <div class="d-flex flex-column gap-4">
          <v-text-field
            v-model="form.username"
            label="Usuario"
            prepend-inner-icon="mdi-account"
            :rules="[rules.required]"
            variant="filled"
            density="comfortable"
            clearable
            rounded
          />

          <v-text-field
            v-model="form.password"
            label="Contraseña"
            prepend-inner-icon="mdi-lock"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="togglePassword"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required]"
            variant="filled"
            density="comfortable"
            clearable
            rounded
          />

          <div class="d-flex align-center justify-space-between">
            <v-checkbox v-model="form.rememberMe" label="Recordar sesión" color="primary" hide-details />
            <v-btn variant="text" size="small" color="primary" class="text-caption" @click="goToForgotPassword">
              ¿Olvidaste tu contraseña?
            </v-btn>
          </div>

          <v-btn color="primary" size="large" block rounded :disabled="!isValid" @click="handleSubmit">Ingresar</v-btn>
        </div>
      </v-form>

      <v-divider class="my-6" />
      <div class="text-center">
        <p class="text-body-2 mb-2">¿Necesitas ayuda?</p>
        <v-btn variant="outlined" size="small" color="primary">Contactar soporte académico</v-btn>
      </div>

      <v-divider class="my-6" />
      <div class="text-center">
        <p class="text-body-2">¿No tienes cuenta?</p>
        <v-btn variant="tonal" size="small" color="secondary">Registrarse</v-btn>
      </div>
    </v-sheet>
  </v-container>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { ref, reactive } from "vue";

  const formRef = ref(null);
  const isValid = ref(false);
  const showPassword = ref(false);
  const router = useRouter();

  const form = reactive({
    username: "",
    password: "",
    rememberMe: false,
  });

  const rules = {
    required: (value) => !!value || "Este campo es obligatorio",
  };

  function togglePassword() {
    showPassword.value = !showPassword.value;
  }

  async function handleSubmit() {
    const { valid } = await formRef.value.validate();
    if (!valid) return;

    console.log("Formulario enviado ✅", form);
  }

  function goToForgotPassword() {
    router.push({ name: "ForgotPassword" });
  }
</script>
