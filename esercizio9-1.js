let Book1 = {
    titolo: 'Il grande Gatsby',
    autore: 'F. Scott Fitzgerald',
    pagine: 180,
    letto: true,

    mostrareInfoLibro: function(){
        console.log(`Il tuo libro è: ${Book1.titolo}, l'autore ${Book1.autore}, il numero di pagine ${Book1.pagine}`);
    },

    statoLibro: function () {
        if (this.letto) {
            console.log('Il libro è stato letto');
        } else {
            console.log('Il libro non è stato letto');
        }
    },

    calculaTempo: function () {
        let calculaTempo = this.pagine * 2
        console.log(`per leggere ${Book1.titolo}, con ${Book1.pagine} impieghi ${calculaTempo} minuti`);
    }
};

Book1.calculaTempo();
Book1.statoLibro();
Book1.mostrareInfoLibro();