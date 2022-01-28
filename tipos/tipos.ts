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