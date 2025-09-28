# HU-001: Crear proyecto base en Vue con Vuetify y buenas prácticas

## Objetivo

Configurar el proyecto inicial en **Vue 3** con **Vuetify** como librería de componentes UI, y aplicar buenas prácticas de desarrollo (eslint, prettier y estructura de carpetas organizada). Esto asegura escalabilidad, legibilidad y consistencia en el código desde el inicio.

## Alcance

- Creación del proyecto base en Vue 3.
- Instalación y configuración de Vuetify.
- Configuración de eslint y prettier para mantener un estilo de código uniforme.
- Definición de una estructura de carpetas clara y modular.
- Subida del proyecto base al repositorio remoto para que sirva como punto de partida.

## Estructura de carpetas sugerida

- `src/assets` → Recursos estáticos (imágenes, íconos, estilos globales).
- `src/components` → Componentes reutilizables de la aplicación.
- `src/views` → Vistas o páginas principales del sistema.
- `src/router` → Configuración de rutas.
- `src/store` → Estado global (Vuex o Pinia).
- `src/plugins` → Configuración de librerías externas (ej: Vuetify).
- `src/utils` → Funciones auxiliares y helpers.

## Criterios de aceptación

- El proyecto arranca correctamente con Vue y Vuetify configurados.
- Existe un archivo de configuración de eslint y prettier aplicable a todo el proyecto.
- La estructura de carpetas está creada y organizada según lo definido.
- El proyecto base está disponible en la rama correspondiente del repositorio.

## Notas adicionales

- No se desarrollan funcionalidades aún, solo la configuración base.
- Se recomienda establecer convenciones de commits desde el inicio.
- Este proyecto será la base para todas las siguientes HU.
