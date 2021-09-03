import { buscarHeroeAsync, buscarHeroe } from './promises';


const heroesIds =  [
    "capi",
    "iron",
    "spider",
]
const heroesPromesas = heroesIds.map( buscarHeroe );

// MODO DE USO BASICO
/*export const obtenerHeroesArr = async () => {
    
    const heoresArr = [];

    for ( const id of heroesIds ) {
        const heroe = await buscarHeroe( id );
        heoresArr.push( heroe );
    }

    return heoresArr;
}*/

// MODO DE USO INTERMEDIO
// export const obtenerHeroesArr = async () => {
    
//     const heoresArr = [];

//     for ( const id of heroesIds ) {
//         heoresArr.push( buscarHeroe( id ) );
//     }

//     return Promise.all( heoresArr );
// }

// DISEÑO MEJORADO 
export const obtenerHeroesArr = async () => {
    return await Promise.all( heroesIds.map( buscarHeroe ) );
}


// manejo de errores
export const obtenerHeoreAwait = async ( id ) => {

    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;
    } catch (err) {
        console.log('Catch!!');
        // throw err;
        return {
            nombre: 'sin nombre',
            poder: 'sin poder'
        }
    }
}


export const heroesCiclo = async () => {
    console.time('HeoresCiclo');

    for await ( const heroe of heroesPromesas ) {
        console.log( heroe );
    }
    
    console.timeEnd('HeoresCiclo');

    // const herores = await Promise.all( heroesCiclo );
    // herores.forEach( heroe => console.log(heroe) );
}


export const heroresIfAwait = async( id ) => {
    if ( (await buscarHeroeAsync( id )).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('Neeee');
    }
}