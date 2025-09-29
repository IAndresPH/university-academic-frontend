# HU-104: Registro de usuario

## Descripción

Como usuario, quiero registrarme en el sistema proporcionando mis datos básicos, para crear mi cuenta de acceso.

## Alcance de la historia de usuario

- Se implementó un **formulario de registro** con validaciones en tiempo real.
- Se solicitaron los siguientes campos:
  - **Correo institucional**
  - **Contraseña**
  - **Confirmar contraseña**

- Se agregaron mensajes de validación amigables para mejorar la experiencia de usuario.
- Se incluyó retroalimentación visual mediante un **snackbar** al enviar el registro.
- Se mantuvo la separación de responsabilidades:
  - `RegisterForm.vue` → Lógica y diseño del formulario.
  - `RegisterView.vue` → Vista principal que utiliza el formulario.

## Buenas prácticas aplicadas

- Uso de **Vuetify 3** para lograr una UI consistente y moderna.
- Separación de componentes para mejorar la escalabilidad y el mantenimiento.
- Validaciones de campos obligatorios, formato de correo y coincidencia de contraseñas.
- Diseño pensado en **usabilidad (UX)** con mensajes claros y botones accesibles.
