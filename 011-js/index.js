//Progamação sicrona e qunado se executa um atarefa por vez e espera ate esta tarefa estar concluida para começar outra
//Progamação assincrona e quando permite o progama execuatar varias tarefas sem bloquear a execução das outras tarefas
//progamção assincrona e bem utilizada em atividades que requerem tempo para ser executada
//então usando assincrona permitimos que essas tarefas demoradas executem em segundo plano enquanto o progama executa outras tarefas ate a tarefa estar pronta
//Progamação sincrona => executa em forma de fila, enquanto não estiver pronto não começa outro
//Progamação assincrona => execulta varios serviços ao mesmo tempo
//Concorrencia e quando na progamação assincrona tem varios serviços solicitando a ser executados ao mesmo tempo
//Concorrencia e quando os serviços disputam para ser executados
//quando o progama executa em uma instacia fazendo mais de um serviço
//Js e concorrente
//Paralelismo e quando e quando o progama pode executar mais de um serviço ao mesmo tempo
//aonde tem instacia separadas para executar cada uma um serviço.
// exemplo de execução sincrona e o call stack do Js
//MICROTASKS tem maior prioridade que TASKS
//exemplo de execução assincrona e o setTimeout
//exemplo partico de progamação sincrona

function main(){
    console.log("main");
}
function f1(){
    f2();
    console.log("F1");
}
function f2(){
    console.log("F2");
}main();
function teste(){
    console.log("teste async")
}
//exemplo patico de progamação assincorna
//a função assincrona e so retorna a call stack apos o codigo ser executado 
setTimeout(() => {
    console.log("setTimeout");
}, 2000); 
//promisse tem prioridade apenas quando o setTimeout e a promisse tem o mesmo tempo de execução,
//à promisse tem prioridade
new Promise ((resolve) =>{
    resolve();
}).then (() => {
    console.log("Promise");
})

teste();
//funções callback permite que uma função seja passada para outra função como argumento
//exemplo de callback
function getData(callback){
    setTimeout(() => {
        const data ={
            nome: "ariel",
            idade: 29
        }

        callback(data);
    }, 1000);
}
function processData(data, callback){
    setTimeout(() =>{
        data.idade *= 2;

        callback(data);
    }, 1000);
}

function displayData(data){
    console.log(data);
}

getData((data) => {
    processData(data, (processesData) =>{
        displayData(processesData);
    });
});

const { error } = require("console");
//Callback Hell é um dos problemas quando a muitas execuções de callback
//função de callback e uma função que se executa depois que a função que foi passada com argumento
//filesystem para ler arquivos
const fs = require("fs");
//callback para abrit um arquivo
function lerArquivo(caminho, callback){
    fs.readFile(caminho, (erro, data) =>{
        if(erro){
            console.log("Erro ao ler o arquivo:", erro);
        }else{
            callback(data.toString());
        }
    })
}
//lendo o arquivo
lerArquivo("Aulas_JS/011-js/arquivo.txt", (data) => {
    console.log(data);
});
//declarando promise, a promise tem dois parametros resolve e reject
new Promise((resolve, reject) => {
    //usando setTimeout para atrasar execução da promise
    setTimeout(() =>{
        if(Math.random > 0.5){
            resolve("----Promisse resolvida----");//caso de certo
        }else{
            reject("Erro ao executar a promisse");//caso houer algum erro
        }
        
    },1000);
   
}).then((data) => {//recebe quando deu certo a execução
    console.log(data);
    //e possivel retornar valor no then e capturar com outro then
    //como tambem e possivel retorna outra promise pelo then
    //e caso haja erro ele executa catch normalmente 
}).catch((erro) => {
    console.log(erro);
});