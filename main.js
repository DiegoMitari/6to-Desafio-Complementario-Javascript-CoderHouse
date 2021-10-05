
function toCatch() {
    //creando el constructur
    function Persona(name, age, DNI, email) {
        this.name = name;
        this.age = age;
        this.DNI = DNI;
        this.email = email;
    }

    //capturando los inputs
    let catchName = document.getElementById("name").value;
    let catchAge = document.getElementById("age").value;
    let catchDNI = document.getElementById("DNI").value;
    let catchEmail = document.getElementById("email").value;


    //creando el objeto
    //no se declaro 'newPerson' la variable como tipo let ni var debido a que esperamos que su scope sea global
    newPerson = new Persona(catchName, catchAge, catchDNI, catchEmail)
    
    addTo();
}

//Arreglo de Objetos
let DataBase = [];
function addTo() {
    //se añade el objeto al array DataBase[]
    DataBase.push(newPerson);
    console.log(DataBase)
}


//Desafio Complementario: Ordenar un array de objetos
//Usaremos .sort(), este método modifica la matriz ordenándola, devolviendo la misma matriz ordenada.

//imprimiendo en consola el  array de objetos (ordenados por edad)
function toSort() {
    let DataBaseSort = DataBase.sort((a, b) => a.age - b.age);
    console.log("Usando el metodo .sort()")
    console.log(DataBaseSort);

}