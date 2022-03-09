// let e const
let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar o casaco";
    console.log(acao);
}

const cpf: string = "123.456.789-00";
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
const somar = (n1: number, n2: number): number => n1 + n2;
console.log(somar(2, 2));

const saudacao = () => console.log("olá");
saudacao();

const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
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
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
    console.log(inicio);
    while(inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(5);