
// objeto literal
const natalia = {
    // atributos
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS",
    ],

    // método de la función
    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
};

// hacer que natalia apruebe otro curso
natalia.aprobarCurso('Curso de responsive design');
// console.log(`🚀 ~ natalia`, natalia);

// PROTIPOS
function Student(name, age, cursosAprobados) {
    // atributos
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    // metodos
    this.aprobarCurso = (curso) => {
        this.cursosAprobados.push(curso);
    }
}

Student.prototype.aprobarCurso1 = (curso) => {
    this.cursosAprobados.push(curso);
}


const juanita = new Student('Juanita Alejandra', 18, ['Curso de instroducción a HTML', 'curso de seguridad informatica'])
console.log(`🚀 ~ juanita`, juanita);


// PROTIPO CON LA SINTAXIS DE CLASES
class Student2 {

    constructor( {
        name,
        age,
        cursosAprobados,
        facebook,
        puntos = 0
    } ) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso( curso ) {
        this.cursosAprobados.push( curso );
    }
}

const laura = new Student2({
    name:'Laura Ramirez', 
    age: 26,
    cursosAprobados: ['curso de HTMl y CSS', 'curso de JavaScript']
});

laura.aprobarCurso('Curso de python')
console.log(`🚀 ~ laura`, laura);


class LearningPath {

    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: 'Escuela de Desarrollo Web',
    courses: [
        'Curso definitivo de HTML y CSS',
        'Curso práctico de HTML y CSS',
    ]
});
const escuelaData = new LearningPath({
    name: 'Escuela de Data science',
    courses: [
        'Curso Data Business',
        'Curso de BI',
    ]
});
const escuelaVgs = new LearningPath({
    name: 'Escuela de video juegos',
    courses: [
        'Curso Introducción a unity',
        'Curso Unreal',
    ]
});

class Course {
    constructor({
        name,
        classes
    }) {
        this._name = name,
        this.classes = classes
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}

function videoPlay(id) {
    const urlSecret = 'https://secret.com/'+id; 
    console.log('Video play');
}

function videoStop(id) {
    const urlSecret = 'https://secret.com/'+id; 
    console.log('Video stop');
}

class PlatziClass {
    constructor({
        name,
        videoID
    }) {
        this.name = name;
        this.videoID = videoID
    }
}