class Pessoa{
    //permitir variavel aceitar mais de uma tipo
    idade: number | string;

    constructor(idade: number){
        this.idade = idade;
    }

    setIdade(idade: number){
        this.idade = idade;
    }
}
//extends mais tipos e pra limitar o tipo d edados que vai receber
//extends não aceita que altere a propiedade
class Pessoas<T extends string | number>{
    //define que o primeiro tipo declarado naquela variavel qeu so acietara dquele tipo em diante
    //o generic T aceita qualquer tipo mas pos a primeria declaração não aceita tipos diferentes dela
    idade: T;

    constructor(idade: T){
        this.idade = idade
    }
}

let carro: string[] = ["Gol", "Fiesta", "Fit"];
let numPrimos: number[] = [2, 3, 5];
// trabalhando com generics em função
function pegarPrimeiroElemento<T>(lista: T[]): T{
    return lista[0]
}
//para garantir que vai ser um tipo
console.log(pegarPrimeiroElemento<number>(numPrimos));
console.log(pegarPrimeiroElemento<string>(carro))
//generics basicamnete e permitir flexibilidade para trabalahr com mais de um tipo