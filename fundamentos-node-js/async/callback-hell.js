function hola(nombre, miCallback) {
    setTimeout( function() {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout( function() {
        console.log('Adios ' + nombre);
        otroCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout( function() {
        console.log('Bla Bla Bla Bla Bla Bla..');
        callbackHablar();
    }, 1000);
}

function conversacion(nombre, veces=1, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback)
        });
    } else {
        adios(nombre, callback);
    }
}

// ----

console.log('Iniciando proceso...');
hola('David', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado.');
    } );
});

//! Callback hell!
// hola('David', function(nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function() {
//                     console.log('Terminando proceso');
//                 })
//             })
//         })
//     })
// })


