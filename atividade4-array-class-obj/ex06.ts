export class Aluno {
    public nome: string;
    public idade: number;
    public nota: number;
    public status: boolean;
    constructor(nome: string, idade: number, nota: number, status: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
        this.status = status
    }

}

const listaAlunos : Aluno[] = [];

const yuri = new Aluno('Yuri', 31, 0, false);
const giovanna = new Aluno('Giovanna', 30, 0, false);
const thiago = new Aluno('Thiago', 14, 0, false);
const fernando = new Aluno('Fernando', 24, 0, false);
const rose = new Aluno('Rosemeire', 58, 0, false);
const jose = new Aluno('José', 59, 0, false);
const raysa = new Aluno('Raysa', 32, 0, false);

listaAlunos.push(yuri);
listaAlunos.push(giovanna);
listaAlunos.push(thiago);
listaAlunos.push(fernando);
listaAlunos.push(rose);
listaAlunos.push(jose);
listaAlunos.push(raysa);

const gabarito = ['a', 'c', 'b', 'c', 'a', 'b', 'a', 'c', 'b', 'b']

const gerarResposta = () : Array<string> => {
    const alternativas = ['a', 'b', 'c']
    const respostasAluno : Array<string> = [];
    for(let i =0; i <= 9; i++) {
        let res = Math.floor(Math.random() * 2);
        respostasAluno.push(alternativas[res]);
    }
    return respostasAluno;
};

const respostas = listaAlunos.map(aluno => {

    return {
        aluno,
        respostas : gerarResposta()
    }
})

const correcao = respostas.forEach((alunoeRespostas) => {
    let pontos : number = 0;
    for(let i = 0; i <= 9; i++){
        if(alunoeRespostas.respostas[i] === gabarito[i]){
            pontos += 1;
        }
        alunoeRespostas.aluno.nota = pontos;
        alunoeRespostas.aluno.status = pontos >= 7;
    }
}
    
);

const aprovados = listaAlunos.filter((aluno) => aluno.status)
const reprovados = listaAlunos.filter((aluno) => !aluno.status)

const media = Math.round((listaAlunos.reduce((acc, n)=> acc + n.nota, 0) / listaAlunos.length) * 100) / 100;

const melhorAluno = listaAlunos
    .reduce((melhor: Aluno[], alunoAtual: Aluno) => { 
        if(!melhor[0]) return [alunoAtual];
        if(alunoAtual.nota > melhor[0].nota) return [alunoAtual];
        if(melhor[0].nota === alunoAtual.nota) return [...melhor, alunoAtual];
        return melhor;
    }, []);
        
const piorAluno = listaAlunos
    .reduce((pior: Aluno[], alunoAtual: Aluno) => { 
        if(!pior[0]) return [alunoAtual];
        if(alunoAtual.nota < pior[0].nota) return [alunoAtual];
        if(pior[0].nota === alunoAtual.nota) return [...pior, alunoAtual];
        return pior;
    }, []);

console.table(aprovados);
console.table(reprovados);
console.log('A média de notas é', media);
console.table(melhorAluno);
console.table(piorAluno);