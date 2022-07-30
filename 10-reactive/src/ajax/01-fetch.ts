

const url = 'https://api.github.com/users?per_page=5';


const manejaErrores = ( response: Response ) => {
    if (response.ok ) {
        throw new Error( response.statusText );
    }

    return response;
}


const fetchPromise = fetch( url );


fetchPromise
    .then( manejaErrores )
    .then( resp => resp.json() )
    .then( data => console.log('data', data) )
    .catch( err => console.warn('Error en usuarios', err))
