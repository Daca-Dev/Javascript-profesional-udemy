class Persona {

  static byObject({nombre, apellido, pais}) {
    return new Persona(nombre, apellido, pais)
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Info ${this.nombre} ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = "melisa",
  apellido1 = "flores",
  pais1 = "Honduras";

const david = {
  nombre: 'David',
  apellido: 'Casas',
  pais: 'Colombia'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.byObject(david);

persona1.getInfo()
persona2.getInfo()