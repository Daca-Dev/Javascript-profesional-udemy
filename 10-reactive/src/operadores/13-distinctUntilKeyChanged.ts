import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';


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
    distinctUntilKeyChanged( 'nombre' )
)
.subscribe( console.log )