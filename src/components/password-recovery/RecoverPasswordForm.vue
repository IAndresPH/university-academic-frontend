<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-sheet elevation="6" class="pa-8" max-width="420" width="100%" rounded="sm">
      <div class="text-center mb-6">
        <h2 class="text-h5 font-weight-bold mb-2">¿Olvidaste tu contraseña?</h2>
        <p class="text-body-2 text-medium-emphasis">
          No te preocupes, ingresa tu correo electrónico y te ayudaremos a restablecerla.
        </p>
      </div>

      <v-alert type="info" border="start" colored-border class="mb-6" text>
        Recibirás un correo con un enlace para crear una nueva contraseña. Revisa también tu carpeta de spam si no llega
        en unos minutos.
      </v-alert>

      <v-form ref="formRef" v-model="isValid" lazy-validation>
        <div class="d-flex flex-column gap-5">
          <v-text-field
            v-model="form.email"
            label="Correo electrónico"
            :rules="[rules.required, rules.email]"
            variant="outlined"
            density="comfortable"
            clearable
          />

          <v-btn color="primary" size="large" block :disabled="!isValid" @click="handleSubmit">
            Enviar enlace de recuperación
          </v-btn>

          <v-btn variant="text" color="secondary" block @click="goToLogin">← Regresar al inicio de sesión</v-btn>
        </div>
      </v-form>

      <v-snackbar v-model="snackbar.show" color="success" timeout="3500">
        {{ snackbar.message }}
      </v-snackbar>
    </v-sheet>
  </v-container>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { ref, reactive } from "vue";

  const formRef = ref(null);
  const isValid = ref(false);
  const router = useRouter();

  const form = reactive({
    email: "",
  });

  const snackbar = reactive({
    show: false,
    message: "",
  });

  const rules = {
    required: (value) => !!value || "Por favor completa este campo",
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Ingresa un correo válido",
  };

  async function handleSubmit() {
    const { valid } = await formRef.value.validate();
    if (!valid) return;

    console.log("Solicitud enviada", form.email);

    snackbar.message = "Si tu correo está registrado, recibirás un enlace para crear una nueva contraseña.";
    snackbar.show = true;

    form.email = "";
  }
  function goToLogin() {
    router.push({ name: "Login" });
  }
</script>
