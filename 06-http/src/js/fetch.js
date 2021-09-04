
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch( jokeUrl ) 
// .then( resp => {

//     console.log( resp );

//     resp.json().then( ({ id, value }) => {
//         console.log( id );
//         console.log( value );
//     })

// })

fetch( jokeUrl )
.then( resp => resp.json() )
.then( ({ id, value }) => {
    console.log( id ) ;
    console.log( value ) ;
});