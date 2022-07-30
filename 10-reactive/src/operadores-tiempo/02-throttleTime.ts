import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

// Ejemplo 1
const click$ = fromEvent<PointerEvent>(document, 'click');

click$
.pipe(
    throttleTime(3000)
)
.subscribe( console.log )


// ejemplo 2
const input = document.createElement('input');
document.body.appendChild(input)

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
.pipe(
    throttleTime(1500, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe( console.log )