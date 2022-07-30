import { concat, interval } from 'rxjs';
import { take } from 'rxjs/operators';



const interva$ = interval(1000);

concat(
    interva$.pipe(take(2)),
    interva$.pipe(take(3)),
    [1,2,3,5] // un objeto o item de JS
).subscribe( console.log );
