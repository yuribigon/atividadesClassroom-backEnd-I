// EXERCICIO 04

class Calculadora{

    private num: number = 0
    private resultado: number = 0
    
    visualizarResultado(){
        console.log(`O resultado atual é ${this.resultado}`);        
    }
    somar(num: number){
        this.resultado += num
        this.visualizarResultado();
    }
    subtrair(num: number){
        this.resultado -= num
        this.visualizarResultado();
    }
    multiplicar(num: number){
        this.resultado *= num
        this.visualizarResultado();
    }
    dividir(num: number){
        this.resultado /= num
        this.visualizarResultado();
    }
    
}

const calc = new Calculadora();

calc.visualizarResultado();

calc.somar(10);

calc.subtrair(5);

calc.multiplicar(10);

calc.dividir(2);