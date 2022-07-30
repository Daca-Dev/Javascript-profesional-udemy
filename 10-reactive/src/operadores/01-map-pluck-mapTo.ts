import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';


// const obs$ = range(1,5);
// const map$ = obs$.pipe( map<number, number>( x => x * 10) )

// obs$.subscribe( val => console.log('obs', val) );
// map$.subscribe( val => console.log('map', val) );

// const obs$ = fromEvent<KeyboardEvent>( document, 'keyup' );
// const pluck$ = obs$.pipe( pluck('target', 'baseURI' ) );

// obs$.subscribe( console.log );
// pluck$.subscribe( val => console.log('pluck', val) );


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );
const keyupCode$ = keyup$.pipe( map( event => event.code ) );
const keyupPluck$ = keyup$.pipe( pluck( 'target', 'baseURI' ) );
const keyupMapTo$ = keyup$.pipe( mapTo('Tecla presionada') );

keyupMapTo$.subscribe( val => console.log('mapTo', val) )