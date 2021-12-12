

const objFactory = ({ name, age, email }) => {
    return {
        name, age, email
    }
}


const a = objFactory(name="david", age=26, email="ise.david.casas@gmail.com");
const b = objFactory(name="david", age=26, email="ise.david.casas@gmail.com");

console.log(a == b); // => false