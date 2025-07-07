let pagina = document;

// selettori
// Selettori per ID
const header = document.querySelector('#main-header');
const body = document.querySelector('#corpo-principal');
const test = document.querySelector('#test');

console.log(header,body,test)


//Modificare contenuto
const h1 = document.querySelector('h1');

const nome = 'francesco';
const eta = 18;
h1.innerHTML = `<span> ${nome} </span> <p>${eta}</p>`