# Proyecto Frontend – Versión de Producción 2025.08

Este repositorio contiene la **versión estable en producción (v2025.08.0)** del sistema frontend, desarrollada en **Vue 3** con **Vuetify**, enfocada en autenticación de usuarios, gestión de sesiones y estructura escalable para futuras iteraciones.

---

## Estado del Proyecto

| Entorno        | Rama                | Estado                    |
| -------------- | ------------------- | ------------------------- |
| Desarrollo     | `develop`           | ✅ Activa                 |
| QA / Pruebas   | `qa`                | ✅ Validado               |
| Release actual | `release.s.2025.08` | ✅ Finalizado             |
| Producción     | `main`              | 🟢 Estable (`v2025.08.0`) |

---

## Versión en Producción – **Release 2025.08**

**Tag:** `v2025.08.0`  
**Fecha de despliegue:** 2025-10-04  
**Objetivo:** Primera versión funcional estable del sistema.  
**Entorno de origen:** `release.s.2025.08`

### Funcionalidades Principales

#### Configuración Base

- **HU-101:** Configuración inicial del proyecto con **Vue 3 + Vuetify 3**.
- **HU-102:** Configuración del enrutamiento con **rutas privadas y públicas** según el estado de autenticación.
- Se establecieron **buenas prácticas de linting** (ESLint + Prettier) y una **estructura escalable de carpetas**.

#### Autenticación

- **HU-103:** Pantalla de inicio de sesión con validaciones de campos vacíos y opción de recordar sesión.
- **HU-104:** Flujo completo de recuperación de contraseña por correo electrónico.
- **HU-105:** Registro de nuevos usuarios con validaciones básicas.
- **HU-106:** Manejo de mensajes claros de error para el usuario (credenciales inválidas, usuario no encontrado, etc.).

#### Navegación

- **HU-107:** Panel principal dinámico con visibilidad de menús según el rol del usuario (**estudiante**, **docente** o **administrador**).
- Cierre de sesión desde el panel, eliminando la sesión activa y redirigiendo al login.

---

## 🧰 Stack Tecnológico

| Componente                   | Tecnología / Versión |
| ---------------------------- | -------------------- |
| Framework base               | Vue 3                |
| UI Library                   | Vuetify 3            |
| Enrutamiento                 | Vue Router 4         |
| Validaciones                 | VeeValidate 4        |
| Linter y formato             | ESLint + Prettier    |
| Gestión de sesiones          | JWT + LocalStorage   |
| Control de estado (planeado) | Pinia / Vuex 5       |
| Lenguaje base                | JavaScript (ES2023)  |

---

## Entorno y Despliegue

### Requisitos

- Node.js 20+
- npm 9+
- Acceso a entorno backend (API simulada o real)

### Instalación

```bash
# Clonar el proyecto
git clone <url-del-repositorio>
cd <nombre-del-proyecto>

# Instalar dependencias
npm install

# Ejecutar en modo producción
npm run build

# O correr en modo desarrollo
npm run dev
```

## 🧾 Licencia

Este proyecto es de uso interno para fines académicos y de desarrollo controlado.
© 2025 – Equipo de desarrollo Frontend · Proyecto Académico Vue 3
