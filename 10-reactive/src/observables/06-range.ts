import { asyncScheduler, of, range } from 'rxjs';

const src$ = range(5);

console.log('Inicio');
src$.subscribe( console.log );
console.log('Fin');