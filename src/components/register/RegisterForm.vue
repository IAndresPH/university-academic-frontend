<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-sheet elevation="8" rounded="lg" class="pa-8" max-width="450" width="100%">
      <div class="text-center mb-6">
        <h2 class="text-h5 font-weight-bold mb-2">Crea tu cuenta</h2>
        <p class="text-body-2 text-medium-emphasis">Ingresa tus datos para registrarte en el sistema académico.</p>
      </div>

      <v-alert type="info" border="start" colored-border class="mb-6" text>
        Tu correo debe ser institucional. La contraseña debe tener al menos 8 caracteres.
      </v-alert>

      <v-form ref="formRef" v-model="isValid" lazy-validation>
        <div class="d-flex flex-column gap-5">
          <v-text-field
            v-model="form.email"
            label="Correo institucional"
            prepend-inner-icon="mdi-email"
            :rules="[rules.required, rules.email]"
            variant="filled"
            clearable
            density="comfortable"
            rounded
          />

          <v-text-field
            v-model="form.password"
            label="Contraseña"
            prepend-inner-icon="mdi-lock"
            :type="showPassword ? 'text' : 'password'"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="togglePassword"
            :rules="[rules.required, rules.minLength]"
            variant="filled"
            clearable
            density="comfortable"
            rounded
          />

          <v-text-field
            v-model="form.confirmPassword"
            label="Repetir contraseña"
            prepend-inner-icon="mdi-lock"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required, rules.matchPassword]"
            variant="filled"
            clearable
            density="comfortable"
            rounded
          />

          <v-btn color="primary" size="large" block :disabled="!isValid" @click="handleSubmit">Registrar</v-btn>

          <v-btn variant="text" color="secondary" block @click="$emit('cancel')">← Volver al login</v-btn>
        </div>
      </v-form>

      <v-snackbar v-model="snackbar.show" color="success" timeout="3500">
        {{ snackbar.message }}
      </v-snackbar>
    </v-sheet>
  </v-container>
</template>

<script setup>
  import { ref, reactive } from "vue";

  const formRef = ref(null);
  const isValid = ref(false);
  const showPassword = ref(false);

  const form = reactive({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const snackbar = reactive({ show: false, message: "" });

  const rules = {
    required: (value) => !!value || "Campo obligatorio",
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Correo inválido",
    minLength: (value) => value.length >= 8 || "Mínimo 8 caracteres",
    matchPassword: (value) => value === form.password || "Las contraseñas no coinciden",
  };

  function togglePassword() {
    showPassword.value = !showPassword.value;
  }

  function handleSubmit() {
    const { valid } = formRef.value.validate();
    if (!valid) return;

    $emit("register-success", { ...form });
    snackbar.message = "Registro enviado. Revisa tu correo para confirmar.";
    snackbar.show = true;

    form.email = "";
    form.password = "";
    form.confirmPassword = "";
  }
</script>
