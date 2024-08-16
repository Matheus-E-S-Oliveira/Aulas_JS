//para pegar a exportação usa-se
//require retorna exportação do mudolo
// const calculadora = require("./calculadora.js");
// calculadora.adicao();
// calculadora.subtracao();
// calculadora.multiplicacao();
// calculadora.divisao();
//pode desestrurar o objeto
//para executar tem que ser pelo node no terminal
// const {adicao, subtracao, multiplicacao, divisao} = require("./calculadora.js");
//importando com ES6
// import { adicao, subtracao, multiplicacao, divisao } from "./calculadora.js";
//não e uma desestruturação 
const a = 10;
const b = 5;
// console.log(`Adição: ${a} + ${b} = ${adicao(a,b)}`);
// console.log(`Subtração: ${a} - ${b} = ${subtracao(a,b)}`);
// console.log(`Multiplicação: ${a} * ${b} = ${multiplicacao(a,b)}`);
// console.log(`Divisão: ${a} / ${b} = ${divisao(a,b)}`);
//para compilador do node reconhecer que vai utilizar ES6
//uma e mudando extenção do arquivo pra .mjs
//outra forma  usando package.json para fazer uma configuração goblal
//outra forma de importar e importa todo o modulo
// import * as calculador from "./calculadora.js"
//importação default
//para fazer importação default e nomeada e so adiconar apos o default
//a importação default vem antes
// tambem e possivel importa um por vez com {}
import raizQuadrada, *as calculador from "./calculadora.js"
//import { mostrarMenssagem } from "./moduloDinamico.js";
console.log(raizQuadrada(4));
// forma de acessar valore quando importa o modulo como um todo
console.log(`Adição: ${a} + ${b} = ${calculador.adicao(a,b)}`);
console.log(`Subtração: ${a} - ${b} = ${calculador.subtracao(a,b)}`);
console.log(`Multiplicação: ${a} * ${b} = ${calculador.multiplicacao(a,b)}`);
console.log(`Divisão: ${a} / ${b} = ${calculador.divisao(a,b)}`);
// reenomeação dos imports e a mesma da importação usando as
//apos a reenomeação o nome original não existira mais no modulo
//executando modulo dinamico
// import { mostrarMenssagem  } from "./moduloDinamico.js";
// mostrarMenssagem();
async function  carregarMenssagem() {
    const {mostrarMenssagem} = await import("./moduloDinamico.js");
    mostrarMenssagem();
}
setInterval(()=>{
    carregarMenssagem();
},2000)