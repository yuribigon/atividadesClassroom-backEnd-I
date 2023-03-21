// ATIVIDADE

// EXERCICIO 01 (rodar no terminal conforme readme)

class Contador{
    private contador: number = 0
    zerar(){
        this.contador = 0;
    }
    incrementar(){
        this.contador += 1;
    }

    retornar(){
        return this.contador               
    }

    autcont(num:number){
        while(this.contador <= num){
            this.incrementar();
            console.log(this.contador);
        }
        
    }
}

const count = new Contador();
console.log('Meu contador --->', count.retornar());
count.incrementar();

console.log('Meu contador --->', count.retornar());
count.zerar();
count.autcont(50);
