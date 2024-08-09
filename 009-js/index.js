//collections
//array e um collection porque e uma forma de armazena lista
//criando array
//acessar pelo indice do array para chegar a elemneto especifico
const frutas = ["maça", "banana","laranja"];
//map
//criando map
const map = new Map();
//pata adiconar no map se passsa ele mais o metodo
//metodo set para adicionar
map.set("nome", "Ariel");
map.set("ano", 3032)
//metodo get para buscar
//passa o valor da chave para fazer a bsuca
console.log(map.get("nome"));
console.log(map);
//para deletear e so passar a chave desejada
map.delete("ano");
//interar sobre o map
for (const interar of map) {
    console.log(interar);
}
//desestruturando map
for (const [key, valor] of map) {
    console.log(`${key}: ${valor}`);
}
//um benefico do map e que a chave pode ser o que precisar
//inclusive funções pode ser salva no map
//amarzenando objeto
map.set({"nome": "valor"}, "meu objeto")
//amarzenando função
map.set(function (){}, "minha dunção");
//para poder faze get de objetos  e funções, e necessario criar uma constante ou uma variavel para atribuir o objeto
//exemplo de tentar pegar objeto sem declarar constante ou variavel
map.set({}, "Objjeto")
//desse jeito da errado o js não reconhece ele como o mesmo
console.log(map.get({}));
//declarando objeto a uma constante
const myObj = {};
//adiconando objeto no map
map.set(myObj, objeto);
//buscando objeto pela chave
console.log(map.get(myObj));
//diferença entre map e Objeto
//a diferença esta nas chaves, no map pode se passar qualquer coisa com chave
//ja trabalahndo com obejto dentro das{} tenta converter em string e objeto so trabalha com string ou symbol
// a diferença dois dois e a questão das chaves
//quando não esta mais utlizando map as chave são um tipo primitivo sendo assim sendo mais facil de eliminar da memoria quando não esta em uso
//o map não permite que o elimandor que limpa acesse o objeto passado {}
//foi criado o week map para permitir que o eliminador de memoria apage os objs que não tao sendo utlizado
//declarando WeakMap, aceita apenas objetos
//se acessa igual weakMap
const weakMap = new WeakMap();
//set são coleções de valores
//o set não repete valores
//crinado um set
const mySet = new Set();
//adiconar valor ao set
mySet.add(1);
mySet.add(2);
mySet.add(3);
//no caso de valor repitido ele ignora o ultimo elemento
//set e um aglomerado de valores
//para deletar no set
mySet.delete(1);
//para fazer loop com set
for (const item of mySet) {
    console.log(item)
}
//verificar se o valor exite dentro do set
mySet.has(2);
//weakSet
//foi criado por causa do eliminador de memoria para tirar informções não utilizados
const weakSet = new weakSet();
//não aceita tipos primitivos, foi feito para tipos que da problema de coleta de memoria como objeto
//metodo de adicionar e remover e igual set unica diferença e a do coletor de memoria para objetos em uso;
// ele não tem todos metodos do set
//criando uma collection personalizada usando classe
class Queue{
    itens = [];

    enqueue(elemento){
        //adicona no ultima posição da lista
        this.itens.push(elemento);
    }
    dequeue(){
        //remove o primeiro elemento da lista
        this.itens.shift();
    }
    first(){
        //pega o primeiro elemento
        return this.itens[0];
    }
    last(){
        //pega o ultimo elemento
        return this.itens.at(-1);
    }
    isEmpty(){
        //verifica se a lista esta vazia
        return this.itens.length === 0;
    }
    size(){
        //retorna o quantos itens tem na lista
        return this.itens.length;
    }
}

// Dado N linhas, cada linha com zero ou mais inteiros, defina um código que exibida qual número está localizado na posição y da linha x. Se nada for encontrado, exiba "ERRO!"

// function main(linhas) {
//     let i = 0;
//     var n = parseInt(linhas[i++]);
//     var lista = new Map();
//     while(i <= n)
//     {
//         let linha = new Map();
//         let dados = linhas[i].split(' ').map(s => s.trim());
//         var d = parseInt(dados[0]);
//         for(var j = 1; j <= d; j++)
//             linha.set(j, parseInt(dados[j]));
        
//         lista.set(i, linha);
        
//         i++;
//     }

//     var q = i + parseInt(linhas[i++]);
//     while(i <= q)
//     {
//         var [y, x] = linhas[i].split(' ').map(s => s.trim()).map(Number);

//         let linha = lista.get(y);
//         if(linha)
//             console.log(linha.get(x) || "ERRO!");
//         else
//             console.log("ERRO!");
            
//         i++;
//     }
// }