export class Universidade{
    private nome: string;
    private local: string;
    

    get RecuperarNome():string { 
        return this.nome;
    }
    get RecuperarLocal():string { 
        return this.local;
    }

    constructor(nome:string, local:string){
        this.nome = nome;
        this.local = local;
    }
}
export class Pessoa{
    private nome: string;
    private dataNasc: string;
    private universidade: Universidade;
    private dpto: Departamento; //exercicio 05

    get RecuperarNome():string { 
        return this.nome;
    }
    get RecuperarDataNasc():string { 
        return this.dataNasc;
    }
    get RecuperarUniv():Universidade { 
        return this.universidade;
    }

    constructor(nome:string, dataNasc:string, universidade: Universidade, dpto: Departamento){
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.universidade = universidade;
        this.dpto = dpto   //exercicio 05     
    }
}

const Fundacao = new Universidade("Fundação", "Santo André")

console.log(Fundacao.RecuperarNome);
console.log(Fundacao.RecuperarLocal);


// EXERCICIO 5

export class Departamento{
    private nome: string;

    get RecuperarDpto():string { 
        return this.nome;
    }

    constructor(nome:string){
        this.nome = nome;
    }
}

const RH = new Departamento("Recursos Humanos");
const Adm = new Departamento("Administração");
const Pedagógico = new Departamento("Pedagógico");
const Secretaria = new Departamento("Secretaria Acadêmica");


const Yuri = new Pessoa("Yuri", "22/04/1991", Fundacao, RH);

console.log(Yuri.RecuperarDataNasc);
console.log(Yuri.RecuperarNome);
console.log(Yuri.RecuperarUniv);