import { range } from 'rxjs';
import{ tap, map } from 'rxjs/operators'

const numero$ = range(1, 5);

numero$.pipe(
    tap( x => console.log('tap-antes', x)), // Observer
    map( val => val * 10),
    tap({
        next: val => console.log('tap-despues', val),
        complete: () => console.log('se termino todo')
    }), // Observer
).subscribe(val => console.log('subs', val) );