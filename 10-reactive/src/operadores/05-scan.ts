import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

// reduce en JS
const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number) => {
    return acumulador + valorActual
}

const total = numbers.reduce( totalReducer, 5 );
console.log(`🚀 ~ total`, total);

// reduce con RXJS

interval(500)
.pipe(
    take(6),
    tap( console.log ),
    reduce( totalReducer, 5 )
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('complete')
})