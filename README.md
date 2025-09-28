# Configuración del Router (HU-101)

En esta historia de usuario se implementó la configuración inicial del **router** en la aplicación Vue 3, definiendo rutas **públicas** y **privadas** para controlar el acceso según el estado de autenticación del usuario.

## 🔓 Rutas públicas

Son accesibles para todos los usuarios, incluso si no están autenticados:

- `/login` → Vista de inicio de sesión.
- `/register` → Vista de registro de usuario.
- `/forgot-password` → Vista para recuperación de contraseña.

## 🔒 Rutas privadas

Solo accesibles para usuarios autenticados (requieren token en `localStorage`).

- `/dashboard` → Layout principal con secciones internas:
  - `/dashboard/student` → Vista para estudiantes.
  - `/dashboard/teacher` → Vista para docentes.
  - `/dashboard/university` → Vista para universidades.

- `/profile/settings` → Ajustes de perfil del usuario.

## Mecanismo de protección

Se agregó un **guard global** en el router:

- Si una ruta tiene `meta.requiresAuth: true` y el usuario no está autenticado, se redirige automáticamente a `/login`.
- Si el usuario está autenticado, se permite el acceso normalmente.

```js
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/login");
  } else {
    next();
  }
});
```

## Ruta por defecto

Cualquier ruta no definida redirige automáticamente a `/login`.
