# HU-103: Recuperación de contraseña vía correo electrónico

## Descripción

Se implementó una **pantalla de recuperación de contraseña** que permite al usuario restablecer su acceso al sistema en caso de olvidar su contraseña. La funcionalidad se centra en enviar un **enlace de restablecimiento por correo electrónico**.

## Funcionalidades principales

- **Campo de correo electrónico** con validación para asegurar que se ingrese un correo válido.
- **Botón de envío** para solicitar el enlace de recuperación.
- **Botón de regreso al login** para facilitar la navegación.
- **Mensajes informativos** y feedback al usuario sobre el estado de la solicitud.
- Interfaz limpia y amigable, diseñada para un sistema académico, sin distracciones y con buena jerarquía visual.

## UX / UI

- Se priorizó la claridad y la facilidad de uso.
- La vista incluye alertas informativas y mensajes amigables para guiar al usuario.
- Los botones y formularios están separados con un espaciado adecuado y diseño profesional.

## Notas

- La vista está preparada para integrarse con el backend y enviar solicitudes reales de recuperación de contraseña.
- La navegación dentro de la aplicación se realiza mediante rutas seguras usando Vue Router.
