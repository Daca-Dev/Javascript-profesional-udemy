import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */

const src1 = fromEvent<PointerEvent>( document, 'click' );
const src2 = fromEvent<KeyboardEvent>( document, 'keyup' );

src1.subscribe( ({x, y}) => console.log(x, y) );
src2.subscribe( val => console.log( val.key ) );


// identificar el tipo
// const src1 = fromEvent<PointerEvent>( document, 'click' );
// src1.subscribe( val => console.log( val.) )
