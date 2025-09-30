import { ref } from "vue";

export function useAuth() {
  const errorMessage = ref("");

  function validate(email, password) {
    if (!email || !password) {
      errorMessage.value = "Todos los campos son obligatorios.";
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage.value = "Debes ingresar un correo institucional válido.";
      return false;
    }

    const passwordRegex = /^[A-Za-z0-9]{8,}$/;
    if (!passwordRegex.test(password)) {
      errorMessage.value = "La contraseña debe ser alfanumérica, sin espacios ni símbolos, mínimo 8 caracteres.";
      return false;
    }

    return true;
  }

  function login(email, password) {
    if (!validate(email, password)) return false;

    if (email !== "usuario@ejemplo.com") {
      errorMessage.value = "Usuario no encontrado.";
      return false;
    }

    if (password !== "12345678") {
      errorMessage.value = "Credenciales inválidas. Verifica tu contraseña.";
      return false;
    }

    errorMessage.value = "";
    return true;
  }

  return { errorMessage, login };
}
