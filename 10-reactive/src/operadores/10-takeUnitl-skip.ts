import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';


const boton = document.createElement('button');
boton.innerHTML = 'Deterner timing';

document.querySelector('body').append(boton);


const counter$ = interval(1000);
const click$ = fromEvent(boton, 'click')
.pipe( 
    tap(() => console.log('tap-antes')),
    skip(2) ,
    tap(() => console.log('tap-despues')),
);


counter$
.pipe(
    takeUntil( click$ )
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})


