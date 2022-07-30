import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1, 10)
// .pipe( filter( val => val % 2 === 1 ) )
// .subscribe( console.log );

// range(10, 15)
// .pipe( filter( (val, i) => {
//     console.log('index', i);
//     return val % 2 === 1 ;
// }))
// .subscribe( val => console.log('filter', val) );

// interface Personaje {
//     tipo: string;
//     nombre: string;
// }

// const personajes = [
//     {
//         tipo: 'heroe',
//         nombre: 'Batman'
//     },
//     {
//         tipo: 'heroe',
//         nombre: 'Robin'
//     },
//     {
//         tipo: 'villano',
//         nombre: 'Joker'
//     },
// ]

// from( personajes )
// .pipe( filter( val => val.tipo === 'heroe') )
// .subscribe( resp => console.log('filter', resp) );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( event => event.code ), // keyboardEvent
    filter( keyCode => keyCode === 'Enter' ) // solo pasa el enter
);

keyup$.subscribe( val => console.log('chain', val) )