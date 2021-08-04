const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
}

newPerson = person()
console.log(newPerson.getName());
newPerson.setName('David');
console.log(newPerson.getName());

//! no es posible acceder o modificar a la variable
//! console.log(saveName);