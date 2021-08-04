// const exec = require('child_process').exec;
const { exec, spawn } = require('child_process');

exec('node ./modulos/console.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})

let proceso = spawn('ls' ['-la']);
console.log(proceso);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log(process.kill())
    console.log(dato.toString());
});
proceso.on('exit', () => {
    console.log('El proceso termino.');
});
