# university-academic-frontend

Proyecto frontend académico construido con **Vue 3**.
Se utiliza **npm** y **Node.js**, administrados mediante **Volta** para garantizar la uniformidad de versiones en todos los entornos de desarrollo.

---

## Requisitos previos

Antes de comenzar, asegúrese de tener instaladas las siguientes herramientas en Windows:

* **Git**: permite clonar el repositorio y gestionar ramas. Puede descargarse desde [https://git-scm.com/download/win](https://git-scm.com/download/win).
* **Volta**: gestiona automáticamente las versiones de Node y npm que el proyecto requiere. Instrucciones de instalación disponibles en [https://volta.sh](https://volta.sh).
* **Visual Studio Code** (recomendado) con extensiones:

  * **Prettier** (formato automático de código).
  * **ESLint** (detección de errores en tiempo real).

---

## Arquitectura del proyecto

La estructura del proyecto está organizada de forma modular y escalable, de la siguiente manera:

```
src/
 ├── assets/        # Recursos estáticos: imágenes, fuentes, estilos globales
 ├── components/    # Componentes reutilizables compartidos
 ├── constants/     # Definición de constantes globales
 ├── layouts/       # Plantillas de diseño general
 ├── modules/       # Módulos funcionales independientes
 │    └── <modulo>/
 │        ├── components/  # Componentes propios del módulo
 │        ├── router/      # Definición de rutas del módulo
 │        ├── store/       # Estado y acciones relacionadas
 │        └── views/       # Vistas específicas del módulo
 ├── router/       # Configuración global de enrutamiento
 ├── services/     # Servicios para comunicación con API externas o internas
 ├── store/        # Estado global de la aplicación
 ├── styles/       # Estilos globales, variables y utilidades CSS/SCSS
 ├── utils/        # Funciones utilitarias compartidas
 ├── App.vue       # Punto de entrada de la aplicación
 └── main.js       # Configuración principal del proyecto
```

Esta organización facilita el crecimiento del proyecto y la separación de responsabilidades por dominios funcionales.

---

## Configuración inicial

1. **Clonar el repositorio**

   * Abra PowerShell.
   * Acceda a la carpeta de descargas con:
     `cd %USERPROFILE%\Downloads`
   * Clone el repositorio con:
     `git clone https://github.com/IAndresPH/university-academic-frontend.git`

2. **Acceder al proyecto clonado**

   * Ingrese a la carpeta del proyecto:
     `cd university-academic-frontend`

3. **Instalar Volta** (si no está instalado en su sistema).

   * Abra PowerShell como Administrador.
   * Ejecute:
     `iwr https://get.volta.sh | iex`
   * Reinicie la terminal y verifique la instalación con:
     `volta --version`

4. **Fijar versiones de Node y npm** definidas en el proyecto.

   * Desde la carpeta raíz del proyecto:
     `volta install node@24.6.0`
     `volta install npm@11.5.1`

5. **Instalar dependencias**

   * En la carpeta raíz del proyecto, ejecute:
     `npm install`

6. **Verificar configuración de Husky**

   * Confirme que los hooks de Git se hayan configurado con:
     `npm run prepare`

7. **Ejecutar el proyecto en entorno local**

   * Levante el servidor de desarrollo con:
     `npm run serve`
   * Acceda a la aplicación en: [http://localhost:8080](http://localhost:8080).

---

## Convenciones de commits

El proyecto utiliza **Commitlint** para asegurar un estándar de mensajes de commit uniforme y legible.

Los mensajes deben seguir el siguiente esquema:

```
<tipo>(HU-<número>): <descripción>
```

### Tipos permitidos

* **feat**: incorporación de una nueva funcionalidad.
* **fix**: corrección de errores.
* **docs**: cambios en la documentación.
* **style**: cambios que no afectan la lógica (formato, espacios, comas).
* **refactor**: cambios en el código que no corrigen errores ni agregan funciones.
* **test**: inclusión o modificación de pruebas.
* **chore**: cambios de mantenimiento que no afectan el código fuente ni pruebas.

### Reglas principales

* El `scope` debe corresponder al identificador de historia de usuario en el formato `HU-<número>`.
* El asunto (subject) debe estar en **minúsculas**.
* El asunto no puede estar vacío.
* El asunto no debe superar los **70 caracteres**.
* El `scope` es obligatorio y no puede estar vacío.

Estas reglas se validan automáticamente en cada commit.
