export interface FormatoDeElemento {
    desenhar():void
    redimensionar(x: number, y:number):void
}

export class Circulo implements FormatoDeElemento {
    raio : number;
    constructor(raio: number){
        this.raio = raio;
    }

    desenhar():void {
        console.log(`Desenhando círculo com raio de ${this.raio} cm`);
    }
    redimensionar(novoRaio : number): void {
        this.raio = novoRaio;
        console.log(`Redimencionando círculo com raio de ${this.raio} cm`);
    }
}

export class Retangulo implements FormatoDeElemento {
    comprimento : number;
    altura: number;
    constructor(comprimento: number, altura: number) {
        this.comprimento = comprimento;
        this.altura = altura
    }

    desenhar():void {
        console.log(`Desenhando retângulo com comprimento de ${this.comprimento} cm e altura de ${this.altura} cm`);
    }
    redimensionar(comprimento:number, altura:number):void {
        this.comprimento = comprimento;
        this.altura = altura;
        console.log(`Redimencionando retângulo com comprimento de ${this.comprimento} cm  e altura de ${this.altura} cm`);
    }
}

const bola = new Circulo(15)
const novoRetangulo = new Retangulo(15, 45)

bola.desenhar();
bola.redimensionar(20);

novoRetangulo.desenhar();
novoRetangulo.redimensionar(20, 55);
