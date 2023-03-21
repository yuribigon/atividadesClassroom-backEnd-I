// EXERCICIO 05

export class BombaCombustivel {
    constructor(
        private tipoCombustivel : string = "Gasolina",
        private valorLitro : number = 4,
        private quantidadeCombustivel : number = 1000
    ){
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    abastecerPorValor(valorAbast : number){
        let valorDisp = this.quantidadeCombustivel / this.valorLitro;
        if(valorAbast <= valorDisp){
            let qtdLitrosAbast = valorAbast / this.valorLitro;
            this.quantidadeCombustivel -= qtdLitrosAbast 
            console.log(`${qtdLitrosAbast} litros abastecidos com sucesso.`);
        }else{
            console.log(`Não há combustível suficiente na bomba`);
        }
    }

    abastecerPorLitro(qtdLitrosAbast : number){
        if(qtdLitrosAbast <= this.quantidadeCombustivel){
            this.quantidadeCombustivel -= qtdLitrosAbast 
            let valorAbast = qtdLitrosAbast * this.valorLitro;
            console.log(`O total é de R$ ${valorAbast}`);
        }else{
            console.log(`Não há combustível suficiente na bomba`);
        }
    }

    alterarValor(novoValor : number){
        this.valorLitro = novoValor;
        console.log(`Valor do combustível alterado para R$ ${this.valorLitro}`);
    }

    alterarCombustivel(novoCombustivel : string){
        this.tipoCombustivel = novoCombustivel;
        console.log(`Tipo do combustível alterado para ${this.tipoCombustivel}`);
    }

    alterarQuantidadeCombustivel(novaQtdeCombustivel : number){
        this.quantidadeCombustivel = novaQtdeCombustivel;
        console.log(`Quantidade restante da bomba: ${this.quantidadeCombustivel}`);
    }
}

const carro = new BombaCombustivel();

carro.abastecerPorValor(100);

carro.abastecerPorLitro(50);

carro.alterarValor(3);

carro.alterarCombustivel("Álcool");

carro.alterarQuantidadeCombustivel(1500);