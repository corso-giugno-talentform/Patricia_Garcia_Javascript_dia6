//ContoBancario


function ContoBancario (numeroconto, intestatario, saldo){
    this.numeroconto = numeroconto;
    this.intestatario = intestatario;
    this.saldo = saldo;

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
        if(saldo > valore){
                saldo =  saldo-valore;
                this.saldo = saldo;
                console.log(`il tuo nuovo saldo è ${saldo}`);
        } else {
            console.log("il tuo saldo è inferiore");
        }
        }

    this.calcolaInteressi = function(){
        let interessi = this.saldo * 0.01;
        console.log(`Gli interessi di ${this.saldo} al 1% annuo è ${interessi} `)
        }


}


let conto1 = new ContoBancario ( 123456789, 'Mario Rossi', 1500);
let conto2 = new ContoBancario ( 987654321, 'Laura Bianchi', 2350);
let conto3 = new ContoBancario ( 456789123, 'Mario Rossi', 875.00);


conto1.visualizzaSaldo();
conto1.depositaValore();
conto1.prelevaValore();
conto1.calcolaInteressi();