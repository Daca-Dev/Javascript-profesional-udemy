import { auditTime, fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent>(document, 'click');

click$
.pipe(
    map(({x,y}) => ({x})),
    tap( val => console.log('tap', val)),
    auditTime(2000)
)
.subscribe(console.log);