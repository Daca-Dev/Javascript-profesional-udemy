


class Singleton {

    // instancia inicializada de mi clase
    static #instancia;
    // propiedades globales
    nombre = '';

    constructor(nombre = '') {
        // si ya existen la instancia, devolvemos la instancia ya creada
        if ( !!Singleton.#instancia ) {
            return Singleton.#instancia;
        }
        // si no existe la inicializa
        Singleton.#instancia = this;
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('Ironman')
const instancia2 = new Singleton('Spiderman')

console.log(`Nombre de la instancia 1 ${instancia1.nombre}`);
console.log(`Nombre de la instancia 2 ${instancia2.nombre}`);