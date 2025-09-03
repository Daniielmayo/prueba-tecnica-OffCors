# Prueba Técnica Offcorss - Lista de Usuarios

Este proyecto es una aplicación web desarrollada como parte de una prueba técnica. La aplicación muestra una lista de usuarios, permite buscarlos por nombre y presenta una interfaz de usuario limpia y responsiva.

## ✨ Features

-   Visualización de una lista de usuarios obtenida desde una API.
-   Búsqueda de usuarios en tiempo real por nombre.
-   Indicador de estado de carga (skeleton screens) mientras se obtienen los datos.
-   Mensaje amigable cuando no se encuentran usuarios.
-   Diseño modular y componentes reutilizables.

## 🛠️ Tecnologías Utilizadas

-   **React:** Biblioteca para construir interfaces de usuario.
-   **TypeScript:** Superset de JavaScript que añade tipado estático.
-   **Vite:** Herramienta de desarrollo frontend moderna y rápida.
-   **Axios:** Cliente HTTP para realizar peticiones a la API.
-   **React Icons:** Librería para incluir iconos fácilmente.
-   **CSS Modules:** Para estilos encapsulados por componente.
-   **ESLint:** Para el análisis de código estático y mantenimiento de la calidad.

## 📂 Estructura del Proyecto

El proyecto sigue una estructura orientada a funcionalidades (`feature-driven`) para mantener el código organizado y escalable.


### Filosofía de la Estructura

-   **`feature`**: Cada funcionalidad principal (como `User`) tiene su propia carpeta, conteniendo todo lo necesario para que funcione: componentes, hooks y estilos. Esto hace que el código sea más fácil de encontrar, mantener y escalar.
-   **`shared`**: Contiene código que no es específico de una funcionalidad y puede ser reutilizado en cualquier parte de la aplicación, como componentes de UI genéricos (`Button`, `Input`), servicios (`axiosInstance`) o tipos de datos comunes.

## 🚀 Cómo Empezar

Sigue estos pasos para levantar el proyecto en tu entorno local.

### Prerrequisitos

-   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
-   [Yarn](https://yarnpkg.com/) o npm (incluido con Node.js)

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd pruebaTecnicaOffCors
    ```

2.  Crea un archivo `.env` a partir del template `.env.template` y añade las variables de entorno necesarias. Para este proyecto, la URL de la API de usuarios es necesaria:
    ```
    VITE_API_URL=https://jsonplaceholder.typicode.com
    ```

3.  Instala las dependencias del proyecto:
    ```bash
    npm install
    # o si usas yarn
    yarn install
    ```

### Ejecución

1.  Para iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    # o
    yarn dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

2.  Para construir la aplicación para producción:
    ```bash
    npm run build
    # o
    yarn build
    ```
    Los archivos optimizados se generarán en la carpeta `dist/`.

## 📜 Scripts Disponibles

-   `npm run dev`: Inicia el servidor de desarrollo con Vite.
-   `npm run build`: Compila el proyecto para producción.
-   `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.
-   `npm run preview`: Sirve localmente el build de producción para previsualización.