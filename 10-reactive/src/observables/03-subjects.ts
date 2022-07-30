import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
    next: valor => {
        console.log('siguiente', valor);
    },
    error: err => {
        console.error('error', err);
    },
    complete: () => {
        console.info('completado');
    }
};

const intervalo$ = new Observable<number>( subs => {

    const intervalId = setInterval( 
        () => subs.next( Math.random() ),
        1000
    );

    return () => {
        clearInterval( intervalId );
        console.log('SetInterbal terminado');
    }

});

const subject$ = new Subject<number>();
const baseInterval = intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout(() => {
    
    subject$.next(10);

    subject$.complete();

    baseInterval.unsubscribe()

}, 3500);