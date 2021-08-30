import "./styles/main.scss";
import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks";
import { buscarHeroe } from "./js/promises";

const heroeId1 = "capi";
const heroeId2 = "iron";

// buscarHeroeCallback( heroeId1, ( err, heroe ) => {

//     if ( err ) {
//         console.error( err );
//     } else {
//         console.info(heroe);
//     }
// } )

// buscarHeroe( heroeId1 )
//     .then( heroe => {
//         console.log(`El heroe ${ heroe.nombre } ha sido enviado a la misión`);
//     })
//     .finally( () => {
//         console.log('Terminamos');
//     })

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`Los heroes ${heroe1.nombre} y ${heroe2.nombre} fueron asignados a la misión.`);
  })
  .catch((err) => {
    alert("Heroe no encontrado.");
  });
