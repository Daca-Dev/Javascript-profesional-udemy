import { asyncScheduler } from 'rxjs';


//  estas dos funciones se pueden ahcer con asyncScheduler
// setTimeout( () => {}, 3000);
// setTimeout( () => {}, 3000);

const saludar1 = () => console.log( 'hola mundo' );
const saludar2 = ( nombre ) => console.log( `hola mundo, ${ nombre }` );

// asyncScheduler.schedule( saludar1 );
// asyncScheduler.schedule( saludar2, 2000, 'David' );

const subs = asyncScheduler.schedule( function( state ) {
    
    console.log('state', state);

    this.schedule( ++state, 1000 );

}, 1000, 0);


// setInterval( () => {
//     subs.unsubscribe();
//     console.log('Se completo');
// }, 6000)

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );
