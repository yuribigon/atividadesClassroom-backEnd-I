abstract class Animal{
    private nome: string;
    private peso: number;
    private raca : string;

    get recuperarNome():string{
        return this.nome;
    }
    get recuperarPeso():number{
        return this.peso;
    }
    get recuperarRaca():string{
        return this.raca;
    }

    constructor(nome:string, peso:number, raca:string){
        this.nome = nome;
        this.peso = peso;
        this.raca = raca;
    }

    public emitirSom(){
        console.log(" emitindo som.....");
    }
}

export class Cavalo extends Animal{
    velocidade: number;

    constructor(nome:string, peso: number, raca:string, velocidade:number){
        super(nome, peso, raca)
        this.velocidade = velocidade;
    }

    public emitirSom(): void {
        console.log("pocotó, pocotó ...");
    }

    public cavalgar(): void {
        console.log(`cavalgando à ${this.velocidade} km/h`);
    }
}

export class Gato extends Animal{
    constructor(nome:string, peso: number, raca:string){
        super(nome, peso, raca)
    }

    public emitirSom(): void {
        console.log("miau ...");
    }

    public escalar(): void {
        console.log(`o gato está escalando...`);
    }
}

export class Cachorro extends Animal{
    macho: boolean
    constructor(nome:string, peso: number, raca:string, macho: boolean){
        super(nome, peso, raca);
        this.macho = macho
    }

    public emitirSom(): void {
        console.log("Au au ...");
    }

    public brincar(): void {
        console.log(`o cachorro está brincando e abanando o rabo...`);
    }
}

const dog = new Cachorro("Bóris", 20, "Golden", true)
dog.emitirSom();
dog.brincar();
console.log('\n');
const cat = new Gato("Sol", 10, "SRD")
cat.emitirSom();
cat.escalar();
console.log('\n');
const horse = new Cavalo("Pangaré", 20, "SRD", 40)
horse.emitirSom();
horse.cavalgar();
