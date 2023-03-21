interface Desconto {
  aplicarDescontoEmPorcentagem(desconto: number): void
  aplicarDescontoEmReais(desconto: number): void;
  recuperarValorTotal(): number;
}

interface ValorPedido {
    addItem(item: ItemPedido): void;
    removeItem(item: string): void
    recuperarValorTotal(): number;
}

class Pedido implements ValorPedido {
    itens: ItemPedido[] = [];

    addItem(item: ItemPedido): void {
        this.itens.push(item);
        console.log(`Item : ${item.nome} adicionado com sucesso!`);
        console.table(this.itens);
    }

    removeItem(item: string): void {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index > -1) {
        this.itens.splice(index, 1);
        }
        console.log(`Item : ${item} removido com sucesso!`);
        console.table(this.itens);
    }

    recuperarValorTotal(): number {
        let total = this.itens
        .map((i) => i.recuperarValorTotal())
        .reduce((sum, v) => sum + v, 0);

        return total;
    }

}

class ItemPedido implements Desconto {
    valor: number;
    nome: string;
    quantidade: number;
    
    constructor(valor: number, nome: string, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }
    
    recuperarValorTotal(): number {
        return this.valor * this.quantidade;
    }
    aplicarDescontoEmPorcentagem(desconto: number): void {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
        console.log(`Desconto de ${desconto}% aplicado com sucesso. Valor do item atualizado: R$ ${this.valor.toFixed(2)}`);
        
    }

    aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
    console.log(`Desconto de R$ ${desconto.toFixed(2)} aplicado com sucesso. Valor do item atualizado: R$ ${this.valor.toFixed(2)}`);
    }
}

const item1 = new ItemPedido(50, "Pizza", 2)
console.log(item1.recuperarValorTotal());

const item2 = new ItemPedido(30, "Vinho", 1)
console.log(item2.aplicarDescontoEmPorcentagem(10))

const item3 = new ItemPedido(10, "Refrigerante", 2)
item3.aplicarDescontoEmReais(2)

const pedido1 = new Pedido();
pedido1.addItem(item1)
pedido1.addItem(item2)
pedido1.addItem(item3)

console.log(pedido1.recuperarValorTotal());

pedido1.removeItem("Vinho");

console.log(pedido1.recuperarValorTotal());