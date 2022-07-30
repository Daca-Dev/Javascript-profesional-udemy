# Proyecto estándar con Webpack 🚀

> Una vez copiado el repositorio, borre y reescriba el archivo README.md acorde al proyecto en cuestión.

Este repositorio fue creado como plantilla base para el desarrollo de proyectos adicionales que simplemente se harán con HTML, CSS y JavaScript como lenguaje base de desarrollo.

> No se hace uso de algún Framework con Angular o React JS, en caso tal revisar las plantillas habilitadas en los repositorios del equipo.

## Requerimientos

Principalmente para la ejecutar este proyecto se requiere **Node JS** 14.1.1 o superior.

> Se recomienda usar un editor de código como Visual Studio Code o Atom.

## Primeros pasos

para poner en marcha un proyecto con esta plantilla proceda a:

1. Descargar una copia de este repositorio o realizar un Fork del mismo
2. Reinicie el repositorio eliminando la carpeta `.git` del directorio raíz y posteriormente ejecute el comando `git init`
3. Ejecute el comando `npm install` para proceder a instalar todas las dependencias del proyecto.
4. Una vez instaladas las dependencias ejecute el comando `npm run serve`
5. Una vez levantado el servidor ingrese a la URL <https://localhost:8080> y deberá ver el mensaje de bienvenida de la aplicación.

> Ya está listo para desarrollar!

## Modo de uso

El proyecto para desarrollar se debe de encontrar en la carpeta `src` la cual cuenta con la siguiente estructura de datos:

- Carpeta **assets:** es la carpeta que contendrá archivos estáticos como imágenes, documentos, íconos, etc.
- Carpeta **css:** Esta carpeta contará con los archivos correspondientes a componentes desarrollados en JavaScript
- Carpeta **js:** Dentro de esta carpeta se ubicara el código de cada uno de los componentes desarrollados en la aplicación
- Archivo **index.html:** Es el archivo de entrada a la aplicación.
- Archivo **index.js**: Es el archivo JavaScript raíz de la aplicación, desde aquí se debe de importar los demás componentes creados para la app.
- Archivo **styles.css:** Son los estilos base de la aplicación creada.

Dentro de los archivos y carpetas nombradas se debe de crear el código, y archivos adicionales necesarios para la aplicación en cuestión.

Una vez se tenga el producto final se debe de generar la carpeta `dist` con el comando `npm run build` la cual contendrá toda la aplicación optimizada y minimizada para producción.

## Comandos de desarrollo

Se tienen definidos los siguientes comandos que te ayudaran en el proceso de desarrollo y despliegue en el entorno de producción

- `npm serve`: levanta un servicio en el **localhost** en el puerto **8080** el cual se recarga con cada cambio que se realice en los archivos contenidos en `src`.
- `npm buil`: genera la carpeta `dist` la cual contiene todos los archivos del proyecto optimizados y minimizada.
- `npm build.dev`: genera la carpeta `dist` pero con los parámetros de configuración del entorno de desarrollo
