// string
let nome: string = "João";
console.log(nome);
// nome = 28;

// numbers
let idade: number = 27;
console.log(idade);
idade = 27.5;

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "27";

// array
let hobbies: any[] = ["Cozinhar", "Jogar", "Programar"];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);

// tuplas
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 1
    Azul   // 2
}

let minhaCor: Cor = Cor.Azul;
console.log(minhaCor);

// tipo any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);

// funções
function retornaMeuNome(): string {
    return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
    console.log("oi");
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

console.log(multiplicar(2, 3));
console.log(multiplicar(2.5, 4));

// tipo função
let calculo: (numeroA: number, numeroB: number) => number;
calculo = multiplicar;
console.log(calculo(3, 5));

// objetos
let usuario: { nome: string, idade: number } = {
    nome: "João",
    idade: 27,
}
// usuario = {}
console.log(usuario);

usuario = {
    nome: "Maria",
    idade: 31,
}
console.log(usuario);

// desafio / alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (hora: number) => string
}

let funcionario: Funcionario = {
    supervisores: ["Carlos", "João", "Roberto"],
    baterPonto: (hora: number): string => {
        if (hora > 8) {
            return "Fora do horário";
        }
        return "Ponto normal";
    }
}

let funcionario2: Funcionario = {
    supervisores: ["Bia", "João", "Fernando"],
    baterPonto: (hora: number): string => {
        if (hora > 8) {
            return "Fora do horário";
        }
        return "Ponto normal";
    }
}

console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);
nota = "10";
console.log(`Minha nota é ${nota}`);
// nota = true;

// checando tipos
let valor = 30;
// valor = false;

if (typeof valor === "number") {
    console.log("valor number");
} else {
    console.log(typeof valor);
}

// never
function falha(msg: string): never {
    throw new Error(msg);
}

const produto = {
    nome: "Sabão",
    preco: 9,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido");
        }
    }
}

produto.validarProduto();

let altura = 12;
// altura = null;

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null,
}

const contato1: Contato = {
    nome: "Fulano",
    tel1: "4234324",
    tel2: null,
}

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

let podeSerNulo = null;
podeSerNulo = 12;
podeSerNulo = "abc";

// desafio aplicar tipos
type Conta = {
    saldo: number,
    depositar: (valor: number) => void,
}

let contaBancaria: Conta = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor;
    }
}

type Correntista = {
    nome: string,
    contaBancaria: Conta,
    contatos: string[],
}

let correntista: Correntista = {
    nome: "Ana",
    contaBancaria: contaBancaria,
    contatos: ["2423423", "65645645"],
}

correntista.contaBancaria.depositar(3000);
console.log(correntista);