
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
            resolve( heroe );
        } else {
            reject(`No se econtro el heroe con ID ${id}`);
        }
    } )
}