import { reduce, scan } from 'rxjs/operators';
import { from } from 'rxjs';

const numeros = [1,2,3,4,5]

const totalAcumulador = (acc, cur) => acc + cur;

// reduce
from(numeros)
.pipe(
    reduce( totalAcumulador, 0)
)
.subscribe( val => console.log('reduce', val) )

// scan
from(numeros)
.pipe(
    scan( totalAcumulador, 0)
)
.subscribe( val => console.log('scan', val) )
