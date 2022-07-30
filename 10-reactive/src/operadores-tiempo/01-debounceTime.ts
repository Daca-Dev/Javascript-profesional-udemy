import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

// Ejemplo 1
const click$ = fromEvent<PointerEvent>(document, 'click');

click$
.pipe(
    debounceTime(3000)
)
.subscribe( console.log )


// ejemplo 2
const input = document.createElement('input');
document.body.appendChild(input)

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
.pipe(
    debounceTime(1500),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe( console.log )