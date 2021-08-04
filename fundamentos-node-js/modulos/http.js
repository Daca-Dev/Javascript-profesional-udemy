const { listeners } = require('cluster');
const http = require('http');

http.createServer(router).listen(3000);

console.log('Escuchando HTTP en el puerto 3000');

function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    // escritura de la cabecera
    res.writeHead(201, {'content-type': 'text/plain'});
    
    switch(req.url) {
        case '/hola':
            res.write('Hola, que tal??');
            res.end();
            break;
        default:
            res.write('Error 404: No sé lo que quieres');
            res.end();
    }
}