# SPA with vanilla JS

## Folder structure

La estructura de folders se divide en dos `src` y `public`. En `src` se encuentra todo el código fuente de nuestra app y en `public` se encuentra todo lo que sean archivos estaticos, finales que serán importados en el cliente.

### src

- `pages`: este folder contiene los templates y lógica enfocada a cada página de nuestra app.
- `template`: este folder contiene los templates de nuestra app, los templates son piezas que son compartidas en varias páginas.
- `utils`: este folder contiene funciones que son compartidas en varias partes de nuestra app.
- `ruoutes`: este folder contiene la lógica de enrutamiento de nuestra app.
- `styles`: este folder contiene los estilos de nuestra app.
- `index.js`: este archivo es el punto de entrada de nuestra app, aquí se importan las páginas y se maneja el enrutamiento.

### public

- `index.html`: este archivo es el punto de entrada de nuestra app, aquí se importan los estilos y scripts de nuestra app.

## Dependencies

- @babel/core
- webpack
- webpack-cli
- webpack-dev-server
- html-webpack-plugin
