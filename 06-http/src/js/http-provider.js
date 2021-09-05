
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const usuariosUrl = 'https://reqres.in/api/users?page=2';

const obtenerChiste = async() => {

    try {

        const resp = await fetch( jokeUrl )
        
        if ( !resp.ok ) throw 'No se pudo realizar la aplicación';

        return await resp.json();

    } catch (err) {
        throw err;
    }
}


const obtenerUsuarios = async() => {
    const resp = await fetch( usuariosUrl );
    const {data: users} = await resp.json();

    return users;
}

export {
    obtenerChiste,
    obtenerUsuarios
}