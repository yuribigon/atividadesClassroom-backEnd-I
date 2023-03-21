// EXERCICIO 02 (rodar no terminal conforme readme)

class Bola{

    constructor(
        private color : string,
        private circ : number,
        private material : string
    ){
        this.color = color;
        this.circ = circ;
        this.material = material;
    }

    changeColor(color : string){
        this.color = color;
    }

    showColor(){
        console.log(`A cor da bola é: ${this.color}`);
        
    }

}

const soccer = new Bola('Branca', 0.79, 'Couro Sintético');

console.table(soccer);

soccer.changeColor("Amarela");

soccer.showColor();