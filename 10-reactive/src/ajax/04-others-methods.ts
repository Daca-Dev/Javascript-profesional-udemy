import { ajax } from 'rxjs/ajax'

// api hecho para regresar pruebas
const url = 'http://httpbin.org/delay/1';


ajax.get( url, {
    header: 'envio de headers'
} );

ajax.post( url, {
    body: 'datos del body',
    id: 1
}, {
    header: 'headers configuration'
}).subscribe( console.log );


ajax({
    url: url,
    method: 'POST',
    headers: {
        'mi-token': 12345
    },
    body: {
        id: 10,
        user: 'hola mundo'
    }
}).subscribe( console.log );