//no typescript pode se tipar as variaveis
//o typescript não deixa alterar o valor de uma variavel apôs ser declarada
//variavel tipada
let nome;
//variavel tipada por valor
let sobrenome = "Aldo";
//declarando tipo de parametro qu espera ser recebido em uma função
function somar(a, b) {
    return a + b;
}
// declarando array vazio
let a = [];
//insirindo elemento no array
a.push(1);
//para permitir mais de um tipo
//tambem e possivel passar para aceitar dados taticos
//aonde ele so aceitaria aquele dado b:(number | "TreinaWeb")
let b = [];
let c = [1, 2, 3, "TreinaWeb"];
//declarando objeto especifico com type
// type Animal = {
//     nome: string;
//     idade?: number;
//     //pode se usar ? para definir se a propiedade e opicional
// }
// let cachorro: Animal;
// cachorro = {
//     nome: "toto",
//     idade: 10
// }
//trabalhando com enums
//atribui a cada valor um numero
// em vez de acessar o numero se acessa pelo valor para facilitar entendimneto do codigo
var produtoStatus;
(function (produtoStatus) {
    produtoStatus[produtoStatus["Ativo"] = 1] = "Ativo";
    produtoStatus[produtoStatus["Inativo"] = 2] = "Inativo";
    produtoStatus[produtoStatus["Indisponivel"] = 3] = "Indisponivel";
})(produtoStatus || (produtoStatus = {}));
function checarProdutoStatus(status) {
    switch (status) {
        case produtoStatus.Ativo:
            console.log("Produto Disponivel");
            break;
        case produtoStatus.Inativo:
            console.log("Produto não encontrado");
            break;
        case produtoStatus.Indisponivel:
            console.log("Produto aguardando estoque");
            break;
    }
}
checarProdutoStatus(produtoStatus.Ativo);
let gato = {
    nome: "Rex",
    idade: 0,
    estaVivo: false,
    nascer() {
        this.estaVivo = true;
        return console.log(`O ${this.nome} nasceu`);
    },
    crescer() {
        this.idade++;
        return console.log(`O ${this.nome} esta com ${this.idade}`);
    },
    morrer() {
        this.estaVivo = false;
        return console.log(`O ${this.nome} morreu`);
    },
};
//interface não e estatica é possivel alterar apos a declaeação
//interface IAnimal {
//  especie: string
// }
// caso seja feito assim todos que implementão essa interface terão que adiconar ess nova propiedade
//crinado classe
class Animal {
    get estaVivo() {
        return this._estaVivo;
    }
    set estaVivo(status) {
        this._estaVivo = status;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    constructor(nome) {
        this.nome = nome;
        this._idade = 0;
        this._estaVivo = false;
    }
    nascer() {
        this._estaVivo = true;
        return console.log(`O ${this.nome} nasceu`);
    }
    ;
    crescer() {
        this._idade++;
        return console.log(`O ${this.nome} esta com ${this.idade}`);
    }
    ;
    morrer() {
        this._estaVivo = false;
        return console.log(`O ${this.nome} morreu`);
    }
    ;
}
//subclasse
class Gato extends Animal {
    constructor() {
        super(...arguments);
        this._idade = 12;
    }
}
let cachorro = new Animal("Toto");
//usando namespace para trabalhar com escopo
var Terrestres;
(function (Terrestres) {
    class Cachorro extends Animal {
        correr() {
            console.log(`O ${this.nome} correu`);
        }
    }
})(Terrestres || (Terrestres = {}));
var Marinhos;
(function (Marinhos) {
    // para trabalhar fora do namespace
    class Golfinho extends Animal {
        nadar() {
            console.log(`O ${this.nome} nadou`);
        }
    }
    Marinhos.Golfinho = Golfinho;
    Marinhos.golfinho = new Golfinho("Willy");
})(Marinhos || (Marinhos = {}));
Marinhos.golfinho.nadar();
//delcareition e para usar recursos javascript que não esta regulados para typrscript
//reutilização de bibliotecas js que não foram tipadas
import calc from "./calc.js";
console.log(calc.soma(5, 5));
