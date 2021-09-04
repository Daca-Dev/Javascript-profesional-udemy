
const jokeUrl = 'https://api.chucknorris.io/jokes/random12';

const obtenerChiste = async() => {

    try {
        const resp = await fetch( jokeUrl, )

        if ( !resp.ok ) throw 'No se pudo realizar la aplicación';

        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value }

    } catch (err) {

        throw err;

    }


}


export {
    obtenerChiste,
}