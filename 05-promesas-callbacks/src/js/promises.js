
const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spider man',
        poder: 'La mejor reacción alergica a la picadura de arañas'
    },
}


export const buscarHeroe = ( id ) => {

    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {
        if ( heroe ) {
            setTimeout( () => resolve( heroe ) , 1000)
        } else {
            reject(`No se econtro el heroe con ID ${id}`);
        }
    } );
}

export const buscarHeroeAsync = async ( id ) => {

    const heroe = heroes[id];

    if ( heroe ) {
        return heroe
    } else {
        // throw Error(`No se econtro el heroe con ID ${id}`);
        throw `No se econtro el heroe con ID ${id}`;
    }
}

const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('promesa lenta', 2000));
});
const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('promesa media', 1500));
});
const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('promesa rapida', 1000));
});

export {
    promesaLenta, promesaRapida, promesaMedia
}