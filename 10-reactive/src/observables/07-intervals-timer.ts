import { interval, timer, asyncScheduler } from 'rxjs';

const observer = {
    next: (val) => console.log('next', val),
    complete: () => console.log('complete')
};

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

const interval$ = interval(1000); // 1000ms
// const timer$ = timer(0); // Instantaneo cuando pueda
// const timer$ = timer(2000); // 2000ms
// const timer$ = timer(2000, 1000); // 2000ms
const timer$ = timer( hoyEn5 ); // 2000ms


console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');
