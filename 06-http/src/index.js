import * as CRUD from "./js/crud-provider";



CRUD.getUsuario( 1 )
.then( console.log )


CRUD.crearUsuario({
    name: 'David',
    job: 'Developer'
})
.then( console.log );

CRUD.actualizarUsuario( 2, {
    name: 'David',
    job: 'Developer'
} )
.then( console.log );