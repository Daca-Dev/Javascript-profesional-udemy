
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

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];
    
    if ( heroe ) {
        callback( null, heroe );
    } else {
        callback(`No se econtro el heroe con ID ${id}`)
    }
}