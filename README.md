# 📦 Registro de Versiones del Proyecto

Este documento detalla las **versiones liberadas** del sistema, las **historias de usuario implementadas**, y los **cambios validados** en cada ciclo de release.  
Cada sección representa un conjunto estable de funcionalidades desplegadas en producción.

---

## Release 2025.08 – Primera Versión Estable

**Fecha de publicación:** 2025-10-04  
**Tag:** `v2025.08.0`  
**Entorno de origen:** `qa`  
**Descripción general:**  
Primera versión funcional del sistema, enfocada en la autenticación de usuarios, configuración base del frontend y seguridad inicial de acceso.

---

### Configuración Inicial

**HU-101:** _Configuración base del proyecto frontend con Vue 3 + Vuetify._  
Se creó la estructura inicial del proyecto con configuración de ESLint, Prettier y estructura escalable de carpetas para futuras extensiones.

**HU-102:** _Configuración del enrutamiento (router)._  
Se definieron rutas públicas y privadas para controlar el acceso según la autenticación del usuario.

---

### Autenticación

**HU-103:** _Pantalla de inicio de sesión._  
Se desarrolló la vista de login con validaciones de campos vacíos y opción de “Recordar sesión”.

**HU-104:** _Recuperación de contraseña._  
Se implementó el flujo para solicitar un correo de restablecimiento de contraseña.

**HU-105:** _Registro de nuevos usuarios._  
Se creó el formulario de registro con validaciones básicas y persistencia de datos hacia el backend.

**HU-106:** _Manejo de mensajes de error y validaciones._  
Se añadieron mensajes claros y personalizables para errores comunes (credenciales inválidas, usuario inexistente, etc.).

---

### Navegación

**HU-107:** _Panel principal con roles y logout._  
Tras el inicio de sesión, se habilita el panel principal con visibilidad de menús según el rol (estudiante, docente o administrador).  
Se implementó además el cierre de sesión desde el panel, eliminando la sesión activa y redirigiendo al login.

---

### Resumen técnico

- Framework base: **Vue 3 + Vuetify 3**
- Linter y formato: **ESLint + Prettier**
- Enrutamiento: **Vue Router 4**
- Control de estado (planeado para 2025.09): **Pinia o Vuex 5**
- Validaciones: **VeeValidate 4**
- Gestión de sesiones: **JWT + almacenamiento en LocalStorage**

---

### Observaciones

- Se validaron los flujos de autenticación con backend simulado (mock API).
- Pendiente integración con API real para el próximo release (2025.09).
- QA completado sin incidencias críticas.

---

## 🟠 Release 2025.09 – (Pendiente)

**Fecha estimada:** —  
**Tag:** —  
**Objetivo:** Integración de backend real, gestión de estado global, y primeros módulos funcionales internos.

**Historias planificadas (tentativas):**

- HU-201: Integrar API real de autenticación.
- HU-202: Implementar gestión de estado global con Pinia.
- HU-203: Añadir dashboard dinámico con datos reales.

---

## 🔵 Release 2025.10 – (Pendiente)

**Fecha estimada:** —  
**Tag:** —  
**Objetivo:** Mejoras de rendimiento, optimización visual y primeros reportes de usuario.

**Historias planificadas (tentativas):**

- HU-301: Implementar cache y lazy loading.
- HU-302: Añadir gráficos estadísticos por usuario.
- HU-303: Integración de analíticas básicas (métricas de uso).

---

## Notas de Control

- Las versiones `release.s.YYYY.MM` son puntos de estabilidad previos a producción.
- Cada versión validada en QA genera un nuevo release con su correspondiente tag (`vYYYY.MM.x`).
- El contenido de este archivo se actualiza exclusivamente desde ramas `release.s.*`.

---

© 2025 - Equipo de desarrollo Frontend · Proyecto Académico Vue 3
