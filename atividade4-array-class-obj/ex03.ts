// AQUI ESTÃO OS EXERCICIOS 3, 4 e 5

const pessoasList : Pessoa[] = [];

export class Pessoa{
    public nome: string;
    public idade: number;
    public salario: number;

    constructor(nome: string, idade: number, salario: number)
    {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }

}

const yuri = new Pessoa('Yuri', 31, 3500);
const giovanna = new Pessoa('Giovanna', 30, 7500);
const thiago = new Pessoa('Thiago', 14, 900);
const fernando = new Pessoa('Fernando', 24, 2570);
const rose = new Pessoa('Rosemeire', 58, 1020);

pessoasList.push(yuri);
pessoasList.push(giovanna);
pessoasList.push(thiago);
pessoasList.push(fernando);
pessoasList.push(rose);

console.log('----------->>> EXERCÍCIO 3 <<<-------------');
console.log('Lista de Pessoas');
console.table(pessoasList);

const pessoasUnder23 : Pessoa[] = [];

pessoasList.filter((pessoa) => {
    if(pessoa.idade < 23){
        pessoasUnder23.push(pessoa);
    }
})

console.log('Lista de Pessoas - abaixo de 23 anos');
console.table(pessoasUnder23);

//EXERCICIO 04

const pessoasUnder30 : Pessoa[] = [];

pessoasList.filter((pessoa) => {
    if(pessoa.idade < 30){
        pessoasUnder30.push(pessoa)
    }
})

console.log('----------->>> EXERCÍCIO 4 <<<-------------');
console.log('A média de idade das pessoas abaixo de 30 é: ',
pessoasUnder30.reduce((soma, pessoa, i)=>
    (soma += pessoa.idade) / (i + 1), 0
),'\n')

//EXERCICIO 05

console.log('----------->>> EXERCÍCIO 5 <<<-------------\n');
console.log('As pessoas com salário menor que R$ 1027,00 são:')
console.log(pessoasList.filter(pessoa=>{
    if(pessoa.salario < 1027){
        const newList = [];
        return newList.push(pessoa);
    }}))