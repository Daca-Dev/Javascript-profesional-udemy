// Creación del primer obsevable 

import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
    next: valor => {
        console.log('siguiente', valor);
    },
    error: err => {
        console.log('error', err);
    },
    complete: () => {
        console.log('completado');
    }
};

// Forma 1 
//! esta forma ya no es tan comun incluso se va a retirar en la v8
// const obs$ = Observable.create();

// Forma 2
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('mundo');

    subs.next('Hola');
    subs.next('mundo');

    subs.complete()

    // como ya se envio subs.complete() esta es la señal de que envia
    // a todos los suscritos de que termino, aunque puede retornar mas
    subs.next('Hola');
    subs.next('mundo');
})

// suscribirse al observable (opc 1)
// obs$.subscribe( resp => {
//     console.log(resp)
// });
// suscribirse al observable (opc 2)
// solo funciona si se ejecutara el código es de una sola línea, como una función
// cuyo unico parámetro es la data que viene del observable
// obs$.subscribe( console.log );

// parámetros del subscribe
// obs$.subscribe(
//     valor => console.log('Next', valor),
//     err => console.log('Error', err),
//     () => console.log('complete'),
// )
obs$.subscribe( observer );