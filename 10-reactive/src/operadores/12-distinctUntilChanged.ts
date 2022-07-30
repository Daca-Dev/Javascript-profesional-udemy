import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';


const numeros$ = of(1,"1",1,1,3,3,2,2,2,4,5,3,1);

numeros$
.pipe(
    distinctUntilChanged()
)
.subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: 'Megaman'},
    { nombre: 'Megaman'},
    { nombre: 'Zero'},
    { nombre: 'X'},
    { nombre: 'Zero'},
    { nombre: 'Zero'},
    { nombre: 'Zero'},
    { nombre: 'X'},
    { nombre: 'Megaman'},
    { nombre: 'Megaman'},
]

from( personajes )
.pipe(
    distinctUntilChanged( (antes, actual) => antes.nombre === actual.nombre )
)
.subscribe( console.log )