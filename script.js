let studenti = {  //clase
    firstname:'francesco', //atributo di quella clase
    lastname: 'mansi',
    age: 18,


stampaEta: function () { //getter  //metodo associato alla clase studenti
    if (this.age){
        console.log('La tua età è:'+ this.age);
    } else {
        console.log('Ignota');
    }
}
}

let studenti1 = {
    firstname:'francesco',
    lastname: 'mansi',
    age: 0,
};
let studenti2 = {
    firstname:'francesco',
    lastname: 'mansi',
    age: null,
};

let students = [studenti,studenti1,studenti2]; //array di oggetti

students.forEach(function(singolo){
   // console.log(this.firstname);
    //console.log(singolo.age)
   singolo.stampaEta();
})