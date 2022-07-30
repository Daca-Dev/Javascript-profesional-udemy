import { of } from 'rxjs';


// const obs$ = of<number>(1, 2, 3, 4, 5, 6);
// const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 7, 8, 9);
const obs$ = of<any>( 1, 'string', true, function() {}, 1.14 );

console.log('Inicio del Obs$');
obs$.subscribe(
    resp => console.log('next:', resp),
    null,
    () => console.log('Completado!')
)
console.log('Fin del Obs$');
