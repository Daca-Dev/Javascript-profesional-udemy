
const helloWorld = () => {
    const hello = "Helo World";
    console.log(hello);
}

helloWorld();

var scope = "I am global";

const functionScope = () => {
    var scope = "I am just a local";
    const funct = () => {
        return scope
    }
    console.log(funct());
}

functionScope();
console.log(scope);