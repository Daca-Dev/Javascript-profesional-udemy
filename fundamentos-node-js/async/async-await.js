async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout( function() {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            console.log('Adios ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout( function() {
            console.log('Bla Bla Bla Bla Bla Bla..');
            resolve(nombre);
        }, 1000);
    })
}

async function main() {
    let nombre = await hola('David');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre)
}

console.log('Empezamos...');
main();
console.log('Terminamos.');
