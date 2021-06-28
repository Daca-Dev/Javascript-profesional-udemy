

class Persona {

    // propiedades y metodos estaticos

    // 'use strict' <- viene po defecta ya implementado en las clases
    // Opcional
    // nombre = '';
    // codigo = '';
    // frase = '';

    comida = '';
    static _conteo = 0;
    static get conteo() {
        return `${Persona._conteo} instancias`;
    }

    static mensaje() {
        console.log(this.nombre); // undefine
        console.log('Hola a todos, soy un método estático');
    }

    // constructor
    constructor(nombre='sin nombre', codigo='sin código', frase='sin frase') {

        if (!nombre) throw Error('Necesitamos el nombre');
        console.log('Hola!');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        
        Persona._conteo++;
    }

    // sets y gets
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {
        return `La comida favorita de ${this.codigo} es ${this.comida}`
    }

    // metodos
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy()
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman')

spiderman.quienSoy();
ironman.miFrase();

// uso del set o get no es como una función
spiderman.setComidaFavorita = 'Pizza';
console.log(spiderman);
console.log(spiderman.getComidaFavorita);


console.log('Conteo estático:', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
