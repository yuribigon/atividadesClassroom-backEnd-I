// EXERCICIO 03

class ContaCor{
    private saldo:number
    constructor(
        public numConta : number, 
        private nome : string,
        saldo?:number
    ){
        this.numConta = numConta;
        this.nome = nome;
        this.saldo = saldo ? saldo : 0;
    }
    mostrarSaldo(){
        console.log(`Seu saldo atual é de R$ ${this.saldo}.`);
    }

    changeName(novoNome : string){
        this.nome = novoNome;
        console.log(`Nome alterado com sucesso, ${this.nome}`);
    }

    depositar(valorDeposito : number){
        this.saldo += valorDeposito;
        console.log(`Depósito de R$ ${valorDeposito} realizado com sucesso.`);
        this.mostrarSaldo();
    }

    saque(valorSaque : number){
        if(valorSaque <= this.saldo){
        this.saldo -= valorSaque;
        console.log(`Saque de R$ ${valorSaque} realizado com sucesso.`);
        this.mostrarSaldo();
        }else{
            console.log(`Você não possui saldo suficiente para realizar o saque de R$ ${valorSaque}.`);
            this.mostrarSaldo();
        }
    }
}

const contaYuri = new ContaCor(123, 'Yuri', 0);

contaYuri.mostrarSaldo();

contaYuri.changeName('Yuri Bigon');

contaYuri.depositar(1500);

contaYuri.saque(800);

contaYuri.saque(800);