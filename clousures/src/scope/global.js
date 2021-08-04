/** SCOPE
 * es el alcance de las variables dentro del código
 */


// variable global -> podemos acceder en cualquier parte del código
//! mala practica utilizar var dentro del código, ya que solo var puede ser reasignada
var hello = 'Hello';
var hello = 'Hello +';


let world = 'Hello world';
// let world = 'Hello world +';

const helloWorld = 'Hello World!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld_ = () => {
    globalVar = 'I am global';
}

helloWorld_()
console.log(globalVar)