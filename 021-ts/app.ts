//no typescript pode se tipar as variaveis
//o typescript não deixa alterar o valor de uma variavel apôs ser declarada
//variavel tipada
let nome: string;
//variavel tipada por valor
let sobrenome = "Aldo";
//declarando tipo de parametro qu espera ser recebido em uma função
function somar(a: number, b: number){
    return a + b;
}
// declarando array vazio
let a: number[] = [];
//insirindo elemento no array
a.push(1);
//para permitir mais de um tipo
//tambem e possivel passar para aceitar dados taticos
//aonde ele so aceitaria aquele dado b:(number | "TreinaWeb")
let b:(number | string)[] = [];
//declarando tipo especifico para necessidade
type TipoArray = (number | "TreinaWeb")[];
let c:TipoArray = [1, 2, 3, "TreinaWeb"]
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
enum produtoStatus{
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
}
function checarProdutoStatus(status: number){
    switch(status){
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
checarProdutoStatus(produtoStatus.Ativo)
//trabalhando com interface
interface IAnimal{
    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;
}
let gato: IAnimal = {
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
        return console.log(`O ${this.nome} morreu`)
    },
}
//interface não e estatica é possivel alterar apos a declaeação
//interface IAnimal {
//  especie: string
// }
// caso seja feito assim todos que implementão essa interface terão que adiconar ess nova propiedade
//crinado classe
class Animal implements IAnimal{
    //adicionando modificadro de acesso
    //caso não defina o padrão e o public
    //permite apenas leitura
    readonly nome: string;
    //acessivel apenas na classe e nas filhas
    protected _idade: number;
    //pode alterar propiedade aepnas na classe
    private _estaVivo: boolean;

    get estaVivo(): boolean{
        return this._estaVivo;
    }
    set estaVivo(status: boolean){
        this._estaVivo = status
    }
    get idade(): number{
        return this._idade
    }
    set idade(idade: number){
        this._idade = idade;
    }
    constructor(nome: string){
        
        this.nome = nome;
        this._idade = 0;
        this._estaVivo = false;
    }

    nascer() {
        this._estaVivo = true;
        return console.log(`O ${this.nome} nasceu`);
    };
    crescer() {
        this._idade++;
        return console.log(`O ${this.nome} esta com ${this.idade}`);
    };
    morrer() {
        this._estaVivo = false;
        return console.log(`O ${this.nome} morreu`)
    };
}
//subclasse
class Gato extends Animal{
    _idade = 12;
}

let cachorro = new Animal("Toto");
//usando namespace para trabalhar com escopo
namespace Terrestres{
    class Cachorro extends Animal{
        correr(){
            console.log(`O ${this.nome} correu`)
        }
    }
}
namespace Marinhos{
    // para trabalhar fora do namespace
    export class Golfinho extends Animal{
        nadar(){
            console.log(`O ${this.nome} nadou`);
        }
    }
    export let golfinho = new Golfinho("Willy");
}
Marinhos.golfinho.nadar();
//delcareition e para usar recursos javascript que não esta regulados para typrscript
//reutilização de bibliotecas js que não foram tipadas
import calc from "./calc.js";
console.log(calc.soma(5, 5));