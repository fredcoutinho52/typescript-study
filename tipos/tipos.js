"use strict";
// string
let nome = "João";
console.log(nome);
// nome = 28;
// numbers
let idade = 27;
console.log(idade);
idade = 27.5;
// boolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "27";
// array
let hobbies = ["Cozinhar", "Jogar", "Programar"];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; // 2
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
// tipo any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("oi");
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 3));
console.log(multiplicar(2.5, 4));
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(3, 5));
// objetos
let usuario = {
    nome: "João",
    idade: 27,
};
// usuario = {}
console.log(usuario);
usuario = {
    nome: "Maria",
    idade: 31,
};
console.log(usuario);
let funcionario = {
    supervisores: ["Carlos", "João", "Roberto"],
    baterPonto: (hora) => {
        if (hora > 8) {
            return "Fora do horário";
        }
        return "Ponto normal";
    }
};
let funcionario2 = {
    supervisores: ["Bia", "João", "Fernando"],
    baterPonto: (hora) => {
        if (hora > 8) {
            return "Fora do horário";
        }
        return "Ponto normal";
    }
};
console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = "10";
console.log(`Minha nota é ${nota}`);
// nota = true;
// checando tipos
let valor = 30;
// valor = false;
if (typeof valor === "number") {
    console.log("valor number");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
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
};
produto.validarProduto();
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: "Fulano",
    tel1: "4234324",
    tel2: null,
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null;
podeSerNulo = 12;
podeSerNulo = "abc";
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: "Ana",
    contaBancaria: contaBancaria,
    contatos: ["2423423", "65645645"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map