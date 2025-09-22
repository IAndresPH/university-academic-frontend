import { reactive, computed } from 'vue';

export function useAuthForm() {
  const form = reactive({ email: '', password: '', remember: false });
  const errors = reactive({ email: '', password: '' });

  function validate() {
    errors.email = !form.email
      ? 'El correo es requerido.'
      : !/^\S+@\S+\.\S+$/.test(form.email)
        ? 'Correo inválido.'
        : '';
    errors.password = !form.password
      ? 'La contraseña es requerida.'
      : form.password.length < 6
        ? 'Mínimo 6 caracteres.'
        : '';
    return !errors.email && !errors.password;
  }

  const canSubmit = computed(
    () => form.email && form.password && !errors.email && !errors.password
  );

  return { form, errors, validate, canSubmit };
}
