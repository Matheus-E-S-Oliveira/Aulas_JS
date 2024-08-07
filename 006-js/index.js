//Criar array pelo construtor
//1 argumento desine tamanho do array
//2 argumentos ou mais adiciona elemento ao array
let arrayConstrutor = new Array();
//criar pela notação literal
let arrayNotacaoLiteral = ["item 1", "item 2", "item 3"]//parametro dele
//acessar valor do array pelo indice
//acessar pelo indexOf
//indexOf pega o primeiro elemento encontrado
//indexOf retorna o indice caso o elemeno seja encontrado
//caso não encontra retorna -1
console.log(arrayNotacaoLiteral.indexOf("item 2"));
//editar valor pelo indice ou pelo indice retornado do indexOf
//para adicionar elemento no array com unshift();
//metodo unshift adiciona na primeira posição do array
//O metodo unshift modifica tod o array
arrayNotacaoLiteral.unshift("item 0");
//para adicionar elemento no final do array
//metodo push()
arrayNotacaoLiteral.push("item 5");
//para veirificar tamanho da lista usa length
//metodo unishift e push retorna o tamanho do array atualizado
//metdo para remover elemneto da lista
//metodo shift remove primeiro elemento da lista
arrayNotacaoLiteral.shift();
//metodo pop remove o ultimo elemento da lista
arrayNotacaoLiteral.pop();
//os metodos shift e pop retornam o elemento que foi removido
//Metodo splice no 1 argumento acessa o indice do array
//2 serve para saber quantos elementos ira remover.
//ex splice(indice inicial, quantos vai remover) splice(0, 2)
arrayNotacaoLiteral.splice(0, 1);
//3 ou N argumentos serve para adicionar elementos no array
// splice(indice inicial, quantos elementos vão ser removidos, elemntos a ser adiconados)
//pode se remover elementos e adicionar elementos apos exclusao
//ex splice(2, 2, "item 1", "item 2")
//Quando indice passado e negativo ele começa pelo contrario
//para remover todos elementos e so passar apenas o valor de indice que ele ira remover todos a partir dele
arrayNotacaoLiteral.splice(0, 0, "item 1");
//metodo find pra busca
//retorna o elemento que satisfaz a condição 
//Ele e um metodo que recebe uma função de callback
//ele retorna primeira condição que der verdadeiro
let item = arrayNotacaoLiteral.find( (item) => item === "item 3"); 
  //return true; //condição a ser checada
console.log(item);
//interação sobre o array
//retornar valor por valor
for(let i = 0; i < arrayNotacaoLiteral.length; i++){
    console.log(arrayNotacaoLiteral[i]);
}
//retorna cada item do array
arrayNotacaoLiteral.forEach(item => {
    console.log(item);
});
//retorna indece e o tem daquele indice
arrayNotacaoLiteral.forEach(function (item, indice){
    console.log(item, indice);
})
//retorna indice
for(let indice in arrayNotacaoLiteral){
    console.log(indice);
}
//retorna o item
for(let nome of arrayNotacaoLiteral){
    console.log(nome);
}
//Destruturar array
//em vez de pegar item por indice separadamente atribui eles a uma variavel
//e pega aquele conjunto de dados.
let [item1, item2, item3] = arrayNotacaoLiteral;
// caso seja um array muito grande utlizase ...res
let [n1, n2, n3, ...res] = [1, 2, 3, 4]
console.log(n1, n2, n3);
console.log(res);
//array dentro de outro [1, 2, [3, 4 ,5]]
//para acessar um array dentro de outro utiliza-se notação de matriz [i][i]
//caso queira considerar os dois arrays como um utiliza-se  spread operator[1, 2, 3, ...[4, 5, 6]]
//spread operator serve para copiar arrays, concatenar arrays,passar elemnetos para função
//copiar e mesclar objetos, adicionar propiedade a objetos
//metodo map serve pra criar uma nova lista a partir de uma lista existente
let vet = [1, 2, 3, 4];
//pode receber indice também
let vetCopy = vet.map((vet, indece) => {
    console.log(vet, 'indice>', indece);
    return vet * 2;
})
console.log(vetCopy);
//metodos de ordenação
//metodo sort()
//serve para alfabeto tambem
//tmabém pode ordenar numeros e letras
// numeros tem prioridade sobre as letras
let vet1 = [ 9, 7, 3 ,0 ,1, 5];
console.log(vet1.sort());
//metodo reverse
//inverte a posição dos elementos do array
console.log(vet1.reverse());
//pode se utilizar os dois juntos para caso queira os numeros em ordem descrescente
//metodo de ordenação letras tem prioridade
// garante que o array seja ordenado como numero
// Ordena o array numericamente
// vet.sort((a, b) => a - b);
// metodo slice() não altera o array original
//ele retorna um novo array
console.log(vet1.slice(1));
//para corta uma array e so colocar apos o indice ate qual inicia ate qual indice pra ir
//slice(1, 3);
//ele não corta o indice informado como ate onde vai cortar
//ele pega o do indice ate ele; 
console.log(vet1.slice(1,3));
//no caso de indice negativo faz a contagem de ordem inversa ele recortar os elementos ate o indice passado
//quando se passa apenas um valor ele pega a partir da frente daquele indice
//se não passar um valor ele retorna uma copia do array
//Metodo concat
//serve para concatenar array
//nao edita array original, retorna uma copia contatenada dos arrays
let vetConcat =  [].concat(vet).concat(vet1);
console.log(vetConcat);
//tem funcionamento parecido com join
//e possivel contatenar array exitente
//pode contatenar quantos arrays for necessario
//Array com metodo filter
//não altera o array digital
let vetFilter = vetConcat.filter(function(item){
    console.log('Numero:',item)
    return item < 5;
})
console.log("Filter:", vetFilter);
//filter pode pegar outros parametros indice e o array original
//filter diferente do map retorna apenas o item que atende a condição passada
//en quanto o map retorna um novo array completo cujo os itens não cumpriram a condição retornan undefined
// metodo reduce
//usado principalmente para calculo
let vetReduce  = vet.reduce(function(acumulador, atual){
    return acumulador + atual
}, 0);//inicializa atual com 0;
console.log(vetReduce);
//metedo join
//ele junta todo array em uma unica string
//por padrão ele separa cada item por virgula
// e possivel definir como vai separa esses elementos de acordo com que é necessario
console.log(vet.join("-"));
