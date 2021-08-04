
// viene instalado por defecto en Node JS por eso no debemos de especificar la ruta
const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        // el archivo ya esta leido
        console.log(data.toString());
    })
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente.');
        }
    })
}

function borrar(ruta, callback) {
    fs.unlink(ruta, callback);
}

// leer(__dirname + '/archivo.txt', console.log);
// escribir(__dirname + '/archivo-escrito.txt', 'Soy un archivo nuevo.', console.log)
borrar(__dirname + '/archivo-escrito.txt', console.log);