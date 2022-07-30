import { count, Observable, Observer } from 'rxjs';

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

const intervalos = new Observable<number>( subscriber => {
    // crear un contador 1,2,3,4,..
    let cont = 0;

    const counter = setInterval( () => {
        cont++;
        subscriber.next( cont )
        console.log('obs:', cont);
    }, 1000)

    setTimeout( () => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval( counter );
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalos.subscribe( observer );
const subs2 = intervalos.subscribe( observer );
const subs3 = intervalos.subscribe( observer );

subs1.add( subs2 );
subs1.add( subs3 );

setTimeout( () => {
    subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()
    console.log('Completado Timeout');
}, 6000);