# HU-102 - Pantalla de Inicio de Sesión

## Descripción de la HU

**Como usuario**, quiero ver una pantalla de inicio de sesión con campos de usuario y contraseña, validaciones de campos vacíos y botón de recordar sesión, para ingresar al sistema correctamente.

## Alcance de la implementación

En esta historia de usuario se implementó:

- **Pantalla de inicio de sesión** usando Vue 3 + Vuetify 3.
- **Formulario con validaciones** para usuario y contraseña (no permitir campos vacíos).
- **Campo de recordar sesión** mediante un `v-checkbox`.
- **Botón de acción principal (Ingresar)**, deshabilitado hasta que el formulario sea válido.
- **Opción para recuperar contraseña**.
- **Opción para registrarse** en caso de no tener cuenta.
- **Sección de ayuda** con acceso a soporte académico.
- **Diseño con enfoque académico**, incluyendo ícono institucional (`mdi-school`) y texto contextual.

## Estructura de archivos

```

src/
├─ components/
│   └─ auth/
│       └─ LoginForm.vue
├─ views/
│   └─ LoginView\.vue
├─ router/
│   └─ index.js

```

## UI / UX destacada

- Layout centrado y responsivo usando `v-container` + `v-sheet`.
- Inputs con estilo moderno (`filled`, `rounded`, `comfortable`).
- Jerarquía visual clara: título → formulario → opciones → ayuda → registro.
- Mensajes de validación visibles y accesibles.
- Botones diferenciados:
  - **Primary** para ingresar.
  - **Outlined** para soporte.
  - **Tonal (secondary)** para registrarse.

## Cómo probar

1. Acceder a la ruta `/login`.
2. Ingresar usuario y contraseña:
   - Si algún campo está vacío, mostrará mensaje de validación.
   - El botón **Ingresar** se habilita solo si el formulario es válido.
3. Opciones disponibles:
   - Recordar sesión.
   - ¿Olvidaste tu contraseña?
   - Contactar soporte académico.
   - Registrarse si no tienes cuenta.

## Relación con la HU

- **HU-102** implementada en la rama correspondiente.
- Entrega funcional y alineada a los criterios de aceptación definidos.
