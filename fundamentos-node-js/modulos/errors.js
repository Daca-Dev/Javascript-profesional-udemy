function otraFuncion() {
    return seRompe();
}

function seRompe() {
    return 3 + z;
}

// no capturaria el error
// function seRompeAsync() {
//     setTimeout( () => {
//         return 3 + z;
//     }, 1000)
// }
// modo correcto de hacerlo
function seRompeAsync(cb) {
    setTimeout( () => {
        try {
            return 3 + z;
        } catch (error) {
            console.log('captura del error asincrono');
            cb();
        }
    }, 1000)
}

try {
    // otraFuncion();
    seRompeAsync(() => {
        console.log('error asincrono');
    });
} catch (error) {
    console.error('Vaya algo se ha roto!');
    console.error(error);
    console.error('Hemos capturado el error :S');
}

console.log('Esto de aqui esta al final');
