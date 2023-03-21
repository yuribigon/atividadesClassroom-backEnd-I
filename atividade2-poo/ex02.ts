export class Imovel {
    endereco : string;
    preco : number
    constructor(
        endereco : string, 
        preco : number
    ){
        this.endereco = endereco;
        this.preco = preco
    }
}

export class Novo extends Imovel {
    adicional : number;
    constructor(
        endereco : string,
        preco : number, 
        adicional : number
    ){
        super(endereco, preco)
        this.adicional = adicional
    }

    imprimeAdicional(){
        console.log(`Valor adicional de um imovel novo: R$ ${this.adicional}`);
        
    }

    total(){
        console.log(`Valor imovel novo: R$ ${(this.adicional +  this.preco).toFixed(2)}`);
        
    }
}
export class Velho extends Imovel {
    desconto : number;
    constructor(
        endereco : string,
        preco : number, 
        desconto : number
    ){
        super(endereco, preco)
        this.desconto = desconto
    }

    imprimeAdicional(){
        console.log(`Valor desconto de um imovel velho: R$ ${this.desconto}`);
        
    }

    total(){
        console.log(`Valor imovel velho: R$ ${(this.preco - this.desconto).toFixed(2)}`);
        
    }
}

const novo = new Novo("enderecoA", 20, 10);
const velho = new Velho("enderecoB", 20, 5);

novo.imprimeAdicional();
novo.total();
velho.imprimeAdicional();
velho.total();