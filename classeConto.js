//ContoBancario


function ContoBancario (numeroconto, intestatario, saldo){
    this.numeroconto = numeroconto;
    this.intestatario = intestatario;
    this.saldo = saldo;
    this.interessi = 1/100;
    this.annoInteressi = 1;

    this.visualizzaSaldo = function(saldo){
        console.log(`il tuo nuovo saldo è: ${this.saldo}`);
    }
    this.depositaValore = function(){
        let valore = parseInt(prompt('Quanto vuoi inserire'));
        saldo = valore + saldo;
        console.log(`il tuo nuovo saldo è ${saldo}`)
        }
    this.prelevaValore = function(){
        let valore = parseInt(prompt('Quanto vuoi retirare'));
        if(this.saldo > valore){
                saldo =  saldo-valore;
                this.saldo = saldo;
                console.log(`il tuo nuovo saldo è ${saldo}`);
        } else {
            console.log("il tuo saldo è inferiore");
        }
        }

    this.calcolaInteressi = function(){
        let interessi1 = this.saldo * (this.interessi * this.annoInteressi);
        console.log(`Gli interessi di ${this.saldo} al 1% annuo è ${interessi1} `)
        }


}


let conto1 = new ContoBancario ( 123456789, 'Mario Rossi', 1500);
let conto2 = new ContoBancario ( 987654321, 'Laura Bianchi', 2350);
let conto3 = new ContoBancario ( 456789123, 'Mario Rossi', 875.00);


conto2.visualizzaSaldo();
conto2.depositaValore();
conto2.prelevaValore();
conto2.calcolaInteressi();

