import { promesaLenta, promesaMedia, promesaRapida } from './js/promises';


// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );

Promise.race([ promesaMedia, promesaRapida, promesaLenta ])
.then( console.log )
.catch( console.warn );
