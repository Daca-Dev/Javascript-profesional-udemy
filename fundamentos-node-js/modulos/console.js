
// el mensaje por defecto (generico)
console.log('Escribir algo en consola!');
// usado para enviar un mensaje con la idea de ser informativo
console.info('Un mensaje informativo!');
// usado para enviar mensa de error
console.error('Soy un error!');
// una advertencia
console.warn('Soy solo una advertencia!');
// permite sacar la info de manera modular
const tabla = [
    {
        a: 1,
        b: 2,
    },
    {
        a: 3,
        b: 5,
        c:'David'
    }
]
console.table(tabla);

// agrupar los mensajes de console
// podemos anidar grupos de console messages
console.group('conversación')
console.log('Inicio');
console.log('Hola, como estas?');
console.log('muy bien y tu?');
console.log('bien bine, ahi vamo');
console.log('Final');
console.groupEnd('conversación');

console.log('este no esta grupado');

// contadores
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
