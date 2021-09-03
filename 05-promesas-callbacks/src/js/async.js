import { buscarHeroe, buscarHeroeAsync } from './js/promises';


buscarHeroe('capi1')
.then( console.log )
.catch( console.warn );

buscarHeroeAsync('iron1')
.then( console.log )
.catch( console.warn );
