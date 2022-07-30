import { ajax } from 'rxjs/ajax'

// api hecho para regresar pruebas
const url = 'http://httpbin.org/delay/1';

const obs$ = ajax.getJSON( url, {
    'Content-type': 'applications/json',
    'mi-token': '1234'
} );


obs$.subscribe( data => {
    console.log('data', data)
})
