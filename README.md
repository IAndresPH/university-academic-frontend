# HU-106: Acceso a panel principal con menús según rol

## Descripción

Se implementó un **panel principal (Dashboard)** que se muestra al usuario después de iniciar sesión. El objetivo es que cada usuario tenga acceso únicamente a las funcionalidades correspondientes a su rol (estudiante, docente o administrador).

## Alcance

- Creación de un **DashboardLayout** con diseño responsivo utilizando componentes de **Vuetify 3**.
- Inclusión de un **menú lateral (Navigation Drawer)** con las opciones dinámicas según el rol del usuario.
- Se agregó un **apartado de perfil** en la parte superior del menú lateral para mostrar el nombre y rol del usuario.
- Implementación de un **menú adicional en la parte superior derecha** con acciones rápidas como:
  - Acceder al perfil.
  - Cambiar a modo oscuro.
  - Cerrar sesión.

## Comportamiento por rol

- **Estudiante**: visualiza únicamente el menú de acceso a su sección académica.
- **Docente**: accede a funcionalidades relacionadas con su gestión de clases.
- **Administrador**: tiene acceso a todas las funcionalidades disponibles (incluye estudiante, docente y universidad).

## Beneficio para el usuario

- Experiencia personalizada según el rol.
- Navegación clara y simplificada, mostrando solo lo relevante.
- Posibilidad de gestionar acciones comunes desde el menú superior derecho.
