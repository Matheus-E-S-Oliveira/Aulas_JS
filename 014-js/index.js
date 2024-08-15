//Trabalhando com funções topicos avançados
//sobre parametros
//parametro posicional
//e quando cria uma função e passa os parametros, pois para usar essa função e preciso resipeitar
//a ordem dos parametros
function calculadorPosicional(valorX, valorY){
    return valorX + valorY;
}
//parametros com valor default
//usado quando declara um valor padrão para um parametro para cajo não ele não receba um valor
//caso queria passar valor undefined para usar o valor padrão do parametro não utlizar o NULL
//NULL vai dar erro, caso queria ignorar o valor usa-se undefined
//caso passe valor na chamada na função com parametro igual gerara sobreescrita
function calculadorDefault(valorX, valorY = 5/*É possivel tambem passar variavel como valor valorY = valorX */){
    return valorX + valorY;
}
//atribuição por desestruturação
//e quando sobre um objeto como paeametro
function printUserDesestruturacao({nome, idade}){
    return nome, idade
}
//Apçicando desestruração no objeto
printUserDesestruturacao({nome, idade} = {
    nome: "Ariel",
    idade: 25
});
//desestruturação de lista
var [nome, idade] = ["Ariel", 29]
function printUserListaDesestruturação([nome, idade]){
    return nome, idade
}
printUserListaDesestruturação([nome, idade]);
//atribuição por rest operator
//e uma forma de perga o resto das propiedades, não indicadas nos parametros
//o rest oparateor so funciona no final, outra posição ria dar erro
function printUserRestOperator({nome, idade, ...props}){
    return nome, idade, props
}
//pegando propiedades sem passar os parametros na função
//arguments e uma propiedade declara por padrão
//arguments retorna os argumentos do escopa da função
function printUserSemParametros(){
//e um objeto que tem como referencia ao escopo da função
//e possivel acessar arguments especificos pelo indice
    return arguments;
}

printUserRestOperator({nome, idade} = {
    nome: "Ariel",
    idade: 25,
    cor: "P",
    sexo: "M"
});
//retorno dos valores numa função
//quando não declarado valor de retorno 
//o retorno sera o padrão undefined
//Retorno de um valor simoles
function somaReturnSimples(a, b){
    return a + b;
}
//retorno de array
function criarPessoaArray(nome, idade){
    return[nome,idade]
}
//e possivel desestruturar o retorno
var [nomeRetorno, idadeRetorno] = criarPessoaArray("Ariel", 25)
//retorno de um objeto
function criarPessoaObjeto(nome, idade){
    return {nome,idade}
}
//desestruturando objeto
const {nomeRetornoObj, idadeRetornoObj} = criarPessoaObjeto("Ariel", 25)
//retorna uma função
function criarPessoaFuncao(nome,idade){
    function myFunc(){
        return `${nome} ${idade}`;
    }
    //retorna função
    //myFunc() retorna o valor do retorna dessa função
    return myFunc;
}
const myFunc = criarPessoaFuncao("Ariel", 26);
myFunc();
//Funçõe auto executaveis IIFEs
//e quando declara entre parenteses para que sintaxe seja aceita
//e possivel usar função normal, anonima tambem, mas e recomendado usar arrow function
//a ideia de uma função auto executaveis e ter o menor numero de scrita possivel
(()=> console.log("executou"))();
//exemplo nde uso de uma função auto executavel
//as funções auto executaveis costumam colocar no topo da execução
//pois geralmete o objetivo dela e ser execultado no inicia a script
//isso tambem evitar erro por falta de ; 
(async ()=>{
    const resultado = await Promise.resolve("Promise executada com sucesso")
})();//esse parneteses serve para rceber valor de parametros
//currying tranforma uma função que aceita mutiplos argumentos em uma serie de funções que aceita um argumento
function multiplicador(a){
    return function (b){
        return a * b;
    };
}
//currying e criar um serie de funções encadeadas e utilizar cada uma delas com forma de pssar argumentos
//e possivel executar automaticamente a função e passar o valor dela
multiplicador(5)(20);
//funções de callback são funções que recebem como argumentos outra função
function main(callback){
    callback();
    setTimeout(() => callback(), 2000);
    //quando quando uma função de callback não recbe nenhum argumento como exemplo acima pode se encurta mias o codigo ex:
    setTimeout(callback, 2000)
}

main(()=>{
    console.log("Executou callback!!")
})
//funções de ordem superior
//usado geralmente com reaproveitamento de codigo
function dobro(n){
    return n * 2;
}
function triplo(n){
    return n * 3;
}
function aplicaFuncao(n, funcao){
    return funcao(n);
}
console.log(aplicaFuncao(5, dobro));
//funções recursivas
let i = 0;
function recursiva(){
    console.log(i++);
    recursiva();//loop
}
//função geradora
//para declarar função geradora usa-se *
function* gerador(){
//determina quantas instruções a função geradora vai pode executar
    yield 1;
    yield 2;
    yield 3;
}
const g = gerador();
//para pegar o valor de yield
console.log(g.next());
//uso de strict mode restringe o js para eviatar erros de ma patrica 
//para eviat bugs ou erros futuros 
// Garbage Collection é um mecanismo automático de gerenciamento de memória usado em linguagens de programação, 
// incluindo JavaScript, para detectar e remover automaticamente objetos que não estão mais sendo usados ​​por um programa, liberando assim espaço na memória.