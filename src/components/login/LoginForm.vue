<template>
  <v-container fluid class="d-flex align-center justify-center fill-height">
    <v-sheet elevation="8" rounded="lg" class="pa-6" max-width="420" width="100%" style="min-height: 540px">
      <div class="text-center mb-4">
        <v-icon size="40" color="primary">mdi-school</v-icon>
        <h2 class="text-h6 font-weight-bold mt-2 mb-1">Sistema Académico</h2>
        <p class="text-body-2 text-medium-emphasis">Ingresa con tu correo institucional para continuar.</p>
      </div>

      <v-divider class="mb-4" />

      <v-alert v-if="errorMessage" type="error" border="start" colored-border class="mb-3" density="compact">
        {{ errorMessage }}
      </v-alert>

      <v-form ref="formRef" v-model="isValid" lazy-validation>
        <div class="d-flex flex-column gap-3">
          <v-text-field
            v-model="form.email"
            label="Correo institucional"
            prepend-inner-icon="mdi-email"
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
            @click:append-inner="$emit('togglePassword')"
            :type="showPassword ? 'text' : 'password'"
            variant="filled"
            density="comfortable"
            clearable
            rounded
          />

          <div class="d-flex align-center justify-space-between">
            <v-checkbox v-model="form.rememberMe" label="Recordar sesión" color="primary" hide-details />
            <v-btn variant="text" size="small" color="primary" class="text-caption" @click="$emit('goPassword')">
              ¿Olvidaste tu contraseña?
            </v-btn>
          </div>

          <v-btn color="primary" size="large" block rounded @click="$emit('submit')">Ingresar</v-btn>
        </div>
      </v-form>

      <v-divider class="my-5" />

      <div class="text-center">
        <p class="text-body-2">¿No tienes cuenta?</p>
        <v-btn variant="tonal" size="small" color="secondary" @click="$emit('goRegister')">Registrarse</v-btn>
      </div>
    </v-sheet>
  </v-container>
</template>

<script setup>
  import { ref, reactive } from "vue";

  defineProps({
    errorMessage: String,
    showPassword: Boolean,
  });

  defineEmits(["submit", "togglePassword", "goPassword", "goRegister"]);

  const formRef = ref(null);
  const isValid = ref(false);

  const form = reactive({
    email: "",
    password: "",
    rememberMe: false,
  });

  defineExpose({
    formRef,
    form,
  });
</script>
