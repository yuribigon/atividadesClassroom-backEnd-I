interface IJogador {
    nome: string;
    idade: number;
    nivel: number;
}

interface ITime {
    jogadores: IJogador[];
    idadeMedia: number;
    nivelMedio: number;
}

export class Jogador implements IJogador {
    
    constructor(public nome: string, public idade: number,public nivel: number){
        this.nome = nome;
        this.idade = idade;
        this.nivel = nivel;
    }
}

export class Time implements ITime {
    public jogadores:IJogador[] = [];
    public idadeMedia: number = 0;
    public nivelMedio:number = 0;

    constructor(public nome:string){
        this.nome = nome;
    }
    
    get readJogadores() : IJogador[] {
        return this.jogadores;
    }
    get readIdadeMedia() : number {
        return this.idadeMedia;
    }
    get readNivelMedio() : number {
        return this.nivelMedio;
    }

    addJogador(jogador : IJogador){
        this.jogadores.push(jogador);
        console.log(`O jogador ${jogador.nome} foi adicionado à equipe ${this.nome}`)
    }

    setIdadeMedia(){
        console.log(`A idade média dos jogadores da equipe ${this.nome} é: `,
        this.jogadores.reduce((soma, jogador) => soma + jogador.idade, 0) / this.jogadores.length, ' anos.');
    }

    setNivelMedio(){
        console.log(`O nível médio dos jogadores da equipe ${this.nome} é: `, 
        this.jogadores.reduce((soma, jogador) => soma + jogador.nivel, 0) / this.jogadores.length);
    }
}

const yuri = new Jogador('Yuri', 31, 10);
const edu = new Jogador('Eduardo', 31, 7);
const vini = new Jogador('Vini', 29, 5);
const bruno = new Jogador('Bruno', 23, 9);

const timeA = new Time('Time A');
const timeB = new Time('Time B');

timeA.addJogador(yuri);
timeA.addJogador(edu);
timeB.addJogador(vini);
timeB.addJogador(bruno);

console.table(timeA.readJogadores)
timeA.setNivelMedio();
timeA.setIdadeMedia();

console.table(timeB.readJogadores)
timeB.setNivelMedio();
timeB.setIdadeMedia();

