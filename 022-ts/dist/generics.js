"use strict";
class Pessoa {
    constructor(idade) {
        this.idade = idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
}
//extends mais tipos e pra limitar o tipo d edados que vai receber
//extends não aceita que altere a propiedade
class Pessoas {
    constructor(idade) {
        this.idade = idade;
    }
}
let carro = ["Gol", "Fiesta", "Fit"];
let numPrimos = [2, 3, 5];
// trabalhando com generics em função
function pegarPrimeiroElemento(lista) {
    return lista[0];
}
//para garantir que vai ser um tipo
console.log(pegarPrimeiroElemento(numPrimos));
console.log(pegarPrimeiroElemento(carro));
//generics basicamnete e permitir flexibilidade para trabalahr com mais de um tipo
//# sourceMappingURL=generics.js.map