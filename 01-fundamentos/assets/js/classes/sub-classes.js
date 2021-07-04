class Persona {

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

class Heroe extends Persona {
    clan = 'Sin Clan';

    constructor(nombre, codigo, frase) {
        const a = 10 + 20;
        //! this.clan = 'Los Vengadores';
        // se debe de acceder primero al metodo Super si se va a usar this.
        super(nombre, codigo, frase);
        this.clan = 'Los Vengadores';
        
    }

    // sobre escribo el metodo
    quienSoy() {
        console.log(`Soy ${ this.nombre } y hago parte del clan ${ this.clan }`);
        // llamo al metodo del padre
        super.quienSoy();
    }
}

// const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');

console.log(spiderman);
console.log(spiderman.quienSoy());