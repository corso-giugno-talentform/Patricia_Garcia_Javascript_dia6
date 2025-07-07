// Costruttori di Oggetti

// Esercizi pratici

/**
 * Seleziona Il titolo per ID
 * Seleziona per ID 
 */

const title = document.querySelector('#titolo-principale');

// 2. Seleziona il tag button per classe
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const bottone = document.querySelector('.btn-primary');

h1.innerHTML = "Benvenuto nel mio sito!"
p.innerHTML = "Sito rinnovato con JavaScript";
button.innerHTML = "Inizia ora";

// Esercizio 3

const spesa = ['Pane', 'Latte', 'Uova', 'Pasta', 'Pomodori'];
const lista = document.querySelector('#spesa');

lista.innerHTML = ' ';
// forEach
lista-spesa.forEach(cibo => {
    lista.innerHTML += `<li>${cibo}</li>`;
});

// Esercizio 5
const table = document.getElementById('corpo-tabella');

const utenti = [
    { nome: 'Mario', cognome: 'Rossi', email: 'mario@email.com', citta: 'Roma' },
    { nome: 'Laura', cognome: 'Bianchi', email: 'laura@email.com', citta: 'Milano' },
    { nome: 'Giuseppe', cognome: 'Verdi', email: 'giuseppe@email.com', citta: 'Napoli' }
];

const tableElements = utenti.map(utente => 
    `<tr>
        <td>
            ${utente.nome}
        </td>
        <td>
            ${utente.cognome}
        </td>
        <td>
            ${utente.email}
        </td>
        <td>
            ${utente.citta}
        </td>
    </tr>`
).join('');

table.innerHTML = tableElements;