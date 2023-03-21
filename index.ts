class Conta{
    private numConta: number
    protected saldo?:number
    constructor(public ag : number, numConta: number){
        this.ag = ag;
        this.numConta = numConta;
    }
    setSaldo(saldo:number){
        this.saldo = saldo;
    }
}

class Cliente{
    
    constructor(
        public name: string, 
        public idade:number, 
        public cpf: number, 
        private conta:Conta
    ){
        this.name = name;
        this.idade = idade;
        this.cpf = cpf;
        this.conta = conta;
    }
    getConta(){
        console.table(this.conta)
    }

}

const contaJames = new Conta(144, 325142);

contaJames.setSaldo(50000);

const james = new Cliente ('james', 18, 37970546889, contaJames);

console.table(james);

james.getConta();

