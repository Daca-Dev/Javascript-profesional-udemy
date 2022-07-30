
const helloWorld = () => {
    const hello = "Hello World";
    console.log(hello);
}

helloWorld();

var scope = "I am global";

const functionScope = () => {
    var scope = "I am just a local";
    const myFunction = () => {
        return scope
    }
    console.log(myFunction());
}

functionScope();
console.log(scope);