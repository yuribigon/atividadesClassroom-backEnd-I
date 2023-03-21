interface IItem {
    valor: number;
    nome: string;
    descricao: string; 
}

export class Item implements IItem {
    
    constructor(public valor: number, public nome: string,public descricao: string){
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
    }
}

export class Pedido {
    private itens:IItem[] = [];
    private valorTotal:number = 0;

    
    get readItens() : IItem[] {
        return this.itens;
    }
    get readValorTotal() : number {
        return this.valorTotal;
    }

    set addValorTotal(valorTotal:number){
        this.valorTotal += valorTotal;
    }
    
    addItem(item : IItem){
        this.itens.push(item);
    }

    imprimePedido(){
        const valorPedido : number = this.itens.reduce((acc, item) => acc + item.valor, 0);
        this.valorTotal = valorPedido;
        console.table(this.itens);
        console.log(`Total: R$ ${this.valorTotal.toFixed(2)}`);
        
    }
}

const item1 = new Item(15, "Brownie", "Brownie com recheio chocolate")
const item2 = new Item(12, "Bolo de Pote", "Bolo de Pote sabor prestígio")
const item3 = new Item(10, "Donuts", "Donuts sabor doce de leite")

const carrinho = new Pedido()
carrinho.addItem(item1)
carrinho.addItem(item2)
carrinho.addItem(item3)
carrinho.imprimePedido();

