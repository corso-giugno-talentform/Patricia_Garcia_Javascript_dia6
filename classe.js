function Person (firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;


    this.stampaEta = function () {  //getter
        if (this.age){
            console.log('La tua età è:'+ this.age);
        } else {
            console.log('Ignota');
        }
    }

    //SETTER
    this.ottieniIndice = function(indice){
        console.log('sono a posizione:'+indice)
    }

}

let persona1 = new Person ('Patricia','Garcia',41);
let persona2 = new Person ('Antonio','Portoso',41);
let persona3 = new Person ('Mauro','Portoso',41);


let gruppo = [new Person ('Patricia','Garcia',41),new Person ('Antonio','Portoso',41),new Person ('Mauro','Portoso',41)]

gruppo.forEach(function(persona, posizione){
    console.log(persona.firstname);
    persona.stampaEta();
})


console.log(gruppo)
