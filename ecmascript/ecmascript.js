"use strict";
// let e const
let seraQuePode = "?";
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar o casaco";
    console.log(acao);
}
const cpf = "123.456.789-00";
// cpf = "234234";
console.log(cpf);
function revelar() {
    var segredo = "interno";
    console.log(segredo);
}
revelar();
// console.log(segredo);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// arrow function
const somar = (n1, n2) => n1 + n2;
console.log(somar(2, 2));
const saudacao = () => console.log("olá");
saudacao();
const falarCom = (pessoa) => console.log("Olá " + pessoa);
falarCom("Fred");
// this
function normalComThis() {
    console.log(this);
}
const normalComThisEspecial = normalComThis.bind(2);
normalComThisEspecial();
console.log(this);
const arrowComThis = () => console.log(this);
arrowComThis();
const arrowComThisEspecial = arrowComThis.bind(2);
arrowComThisEspecial();
// parâmetro padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(5);
// rest & spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ["João", "Maria", "Fernanda"];
const turmaB = ["Fernando", "Miguel", "Lorena", ...turmaA];
console.log(turmaB);
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 3, 4, 5);
console.log(numeros);
// rest & spread (tupla)
const tupla = [1, "abc", false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// destructuring (array)
const caracteristicas = ["Motor Zetec", 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// destructuring (objeto)
const item = {
    nome: "SSD",
    preco: 200,
    caracteristicas: {
        w: "Importado",
    },
};
// const nomeItem = item.nome;
// const precoItem = item.preco;
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
// desafios ecmascript
// desafio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// desafio 2
const dizerOla = function (nome = "Pessoa") {
    console.log(`Olá, ${nome}`);
};
dizerOla();
dizerOla("Fred");
// desafio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// desafio 4
const arr = [55, 20, ...nums];
console.log(arr);
// desafio 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// desafio 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// callback
function espera3s(callback) {
    setTimeout(() => {
        callback("3s depois...");
    }, 3000);
}
espera3s(function (resultado) {
    console.log(resultado);
});
// promise
function espera3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("3s depois...");
        }, 3000);
    });
}
espera3sPromise().then(response => {
    console.log(response);
});
fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(person => person.films)
    .then(films => fetch(films[0]))
    .then(film => film.json())
    .then(data => console.log(data));
//# sourceMappingURL=ecmascript.js.map