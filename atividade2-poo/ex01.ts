export abstract class Ingresso {
    valorReais : number;

    constructor(){
        this.valorReais = 20
    }
    imprimeValor() :void {
        console.log(`Valor do ingresso VIP: R$ ${(this.valorReais).toFixed(2)}`);
    }
}
export class Normal extends Ingresso {}

export class Vip extends Ingresso {
    valorAdicional : number = 25
    constructor(){
        super();
    }

    imprimeValor() :void {
        console.log(`Valor do ingresso VIP: R$ ${(this.valorReais + this.valorAdicional).toFixed(2)}`);
    }
    
}

export class Camarote extends Ingresso {
    private valorAdicional : number = 50
    constructor(){
        super();
    }

    imprimeValor() : void{
        console.log(`Valor do total do ingresso Camarote: R$ ${(this.valorReais+this.valorAdicional).toFixed(2)}`);
    }
    
}

const TicketNormal = new Normal();
TicketNormal.imprimeValor();

const TicketVip = new Vip();
TicketVip.imprimeValor();

const TicketCamarote = new Camarote();
TicketCamarote.imprimeValor();