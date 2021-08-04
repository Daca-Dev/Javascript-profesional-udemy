// const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar.');
});
process.on('exit', () => {
    console.log('Ale, el proceso ya acabó.');
});
process.on('uncaughtException', (err, origen) => {
    console.log('Vaya se nos ha olvidado capturar un error');
    console.log(err);
});

noExiste();
console.log('Si el error no se recoge, pos no sale');