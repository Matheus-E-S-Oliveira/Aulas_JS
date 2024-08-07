//Exemplo de funcionamento de função
function myFunction(){
    console.log("Hello World");
}
function soma(valor1, valor2){ //Função recebendo parametro
    console.log(`O valor resultando é: `,valor1 + valor2);
}
function teste(value = 'valor padrão', numero = 0){//Caso não se passe nenhum argumento na função, pode se passar uma valor padrão.
    console.log(value, numero);
}
function subtracao(x ,y){
    let resultado = x - y;
    // return x - y; forma de retorno retorna a instrução
    return resultado; //outra forma de retorno retorna a resposta
    //return padrão == undefined
}
function init(){
    console.log("Teste hoisting");
}
//Função anonima, obs tem que atribuir ela a uma variavel
let funcaoAnonima = function (){
    console.log("função anonima");
}
//arrowFunction
let arrowFunction = () =>{
    console.log("Exemplo de arrow function");
}
//Outra forma de implemeta arrowFunction para quando so tem uma unica linha de codigo.
//Com retorno implicito
let arrowFunctionImplicita = () => "Arrow Function Implicita";
console.log("Teste");
let mutiplicacao = (x, y) => x * y;
//Ordem de chamada determina de quando vai ser executado
myFunction();
soma(5, 5);//Passando argumento
teste();//Chamada sem passar nenhum argumento
//Função suporta passar apenas uma parte dos argumentos
teste("novo valor", 5);//Argumento passado tem prioridade sobre o valor padrão
let resultado = subtracao(10,5);
//A chamado da função não infuluicia dados que vem to return
//não influencia ordem de execução mais sim o que recebe o parametro pelo return
console.log(resultado);
//*retono padro do return
// *let resultadoSoma = soma(1,1);
//* console.log(resultadoSoma);
// atribuir função a uma variavel
let resultadoSubtracao = subtracao;
console.log(resultadoSubtracao(11,10));
//Chamando função anonima
funcaoAnonima();
//Chamando função arrow
arrowFunction();
//Chamando função arrow implicita
console.log(arrowFunctionImplicita());
//Chamando função arrow implicita passando paramentro
console.log(mutiplicacao(2,2));
//Excopo lexo e a aplicação da mesma variavel no bloco de codigo
//Hoisting quano se delcara varaveis e função apos a execução
//hoisting e o processo de elevar as funçoes e varaveis para o topo
//esse processo e levar a declaração da função e a declaração das variaveis
//permitindo a execução do bloco de codigo mesmo com o chamado da função e da variavel antes da declaraçã dos mesmo
//variaveis declaradas com let não funciona hoisting
//variaveis declaradas com  var funciona hoisting
//hoisting e execução de funções e variveis indepedente da ordem.