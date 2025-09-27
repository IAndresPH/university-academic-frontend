<template>
  <div class="page-auth">
    <div class="auth-card" role="region" aria-labelledby="login-title">
      <header class="auth-card__header">
        <h1 id="login-title">Portal académico</h1>
        <p class="subtitle">Accede con tu cuenta institucional</p>
      </header>

      <form class="auth-form" @submit.prevent="onSubmit" novalidate>
        <BaseInput
          v-model="form.email"
          label="Correo institucional"
          :error="errors.email"
          type="email"
        />
        <BaseInput
          v-model="form.password"
          label="Contraseña"
          placeholder="********"
          :error="errors.password"
          type="password"
        />
        <div class="row actions">
          <label class="remember">
            <input type="checkbox" v-model="form.remember" />
            Recuérdame
          </label>
          <a class="forgot" href="#" @click.prevent="onForgot">¿Olvidaste la contraseña?</a>
        </div>

        <div class="row">
          <BaseButton :disabled="!canSubmit" @click="onSubmit">Iniciar sesión</BaseButton>
        </div>

        <p class="help">¿Problemas para entrar? Contacta soporte@universidad.edu</p>
      </form>
    </div>
  </div>
</template>

<script setup>
  import BaseInput from '@/components/ui/BaseInput.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { useAuthForm } from '@/composables/useAuthForm';

  const { form, errors, validate, canSubmit } = useAuthForm();

  function onSubmit() {
    const ok = validate();
    if (!ok) return;
    console.log('Formulario listo (sin enviar):', { ...form });
  }

  function onForgot() {
    console.log('Forgot password clicked');
  }
</script>

<style scoped>
  @import '@/assets/styles/variables.css';

  .page-auth {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    background: var(--bg);
  }

  .auth-card {
    width: 100%;
    max-width: var(--max-width-form);
    background: var(--card);
    border-radius: var(--radius);
    padding: 2rem; /* más aire */
    box-shadow: var(--shadow);
    animation: fadeIn 0.3s ease-in-out; /* animación sutil */
  }

  .auth-card__header {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .auth-card__header h1 {
    margin: 0;
    color: var(--accent);
    font-size: 1.5rem; /* jerarquía mayor */
    font-weight: 600;
  }

  .subtitle {
    color: var(--muted);
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  /* Formulario */
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 1rem; /* más espacio entre campos */
  }

  .row.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .remember {
    font-size: 0.9rem;
    color: var(--muted);
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
  }

  input[type='checkbox'] {
    accent-color: var(--primary); /* check moderno */
    cursor: pointer;
  }

  /* Enlace olvidaste contraseña */
  .forgot {
    color: var(--primary);
    font-size: 0.9rem;
    text-decoration: none;
    transition:
      color 0.2s ease,
      text-decoration 0.2s ease;
    cursor: pointer;
  }
  .forgot:hover {
    color: var(--accent);
    text-decoration: underline;
  }

  /* Botón base */
  button {
    width: 100%;
    padding: 0.75rem;
    border-radius: var(--radius);
    font-weight: 600;
    background: var(--primary);
    color: white;
    border: none;
    transition:
      background 0.2s ease,
      transform 0.1s ease;
    cursor: pointer;
  }
  button:hover:not(:disabled) {
    background: var(--accent);
    transform: translateY(-1px); /* micro interacción */
  }
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Texto de ayuda */
  .help {
    color: var(--muted);
    font-size: 0.85rem;
    margin-top: 1rem;
    text-align: center;
  }

  /* Responsivo */
  @media (max-width: 420px) {
    .auth-card {
      padding: 1.25rem;
      border-radius: 10px;
    }
    .auth-card__header h1 {
      font-size: 1.25rem;
    }
  }

  /* Animación sutil */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
