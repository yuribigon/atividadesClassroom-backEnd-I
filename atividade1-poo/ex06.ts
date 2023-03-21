// EXERCICIO 06

class Carro {
    constructor(
        public consumoKmL : number,
        public qtdeComb : number = 0
    ) {
        this.consumoKmL = consumoKmL;
        this.qtdeComb = qtdeComb;
    }

    andar(distancia : number){
        //     6,66      =   100     /     15
        let litrosGasto = distancia / this.consumoKmL
        if (litrosGasto <= this.qtdeComb){
            console.log(`O veículo gastou ${litrosGasto} litros, restando ${this.qtdeComb} litros no tanque.`);
            this.qtdeComb -= litrosGasto
        } else {
            console.log(`Não há combustível suficiente`);
        }
    }

    obterGasolina():number {
        console.log(`Há ${this.qtdeComb} litros no tanque`);
        return this.qtdeComb
        }

    adicionarGasolina(qtd : number){
        this.qtdeComb += qtd;
        console.log(`${qtd} de litros abastecido com sucesso. Há ${this.qtdeComb} litros no tanque`);
    }
}

const March = new Carro(15);
March.adicionarGasolina(20);
March.andar(100);
March.obterGasolina();