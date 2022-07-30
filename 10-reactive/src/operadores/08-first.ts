import { fromEvent } from 'rxjs';
import { first, tap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');


click$
.pipe(
    tap( () => console.log('tap') ),
    first( event => event.clientY >= 150)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});