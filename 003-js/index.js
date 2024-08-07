// string pode se utiliar '', "", ``. 
//construtor objetct String()
//para contatenação utilixa-se + ex: 'string 1' + "string2"
//contatenação nao liga pra diferença de "" '' de uma variavel para outra
//contatenação de variais de texte e igual a de strings
//pode contatenar string com variaveis
//para contatenar expressão entre ()
//codigo de escape e quando utilizamos com \
console.log('caixa d\'água');
// \' vai ser interpletado como asplas simples
// "\...\" interplerta aspas dublas
// \` interpleta craze
// \n quebra linha
// \t == tab
// \\ codigo de escape para o \ para ser interpletar como string
// ``(craze) permite escrever mias de uma linha
// ${} para interpolação com variaveis e expressão
//Para fazer comparação de strings
// ''a'variavel a ser comparada'.localCompare('b')//e possivel declarar a linga passando('b', 'pt-BR');
// se 'a' vem depois da letra 'b' retona vlor negativo
//se 'b' vem depois da letra 'a' retorna valor positivo
// se for equivalente retorna 0
console.log('a'.localeCompare('b', 'pt-BR'));
console.log('b'.localeCompare('a', 'pt-BR'));
console.log('a'.localeCompare('a', 'pt-BR'));
// serve para mais de uma letra
console.log('audo'.localeCompare('aline', 'pt-BR'));
// para verificar string de numero
console.log('2'.localeCompare('10', undefined, {numeric: true}));
// verificando string de numero errado
console.log('2'.localeCompare('10', 'pt-BR'));
// e possivel comparar com simbolos de > e < e ===
// se for comparar strings se ve antes ou depois utiliza-se localeCompare para evitar comportamento imprevisto
console.log("a" > "b");
//expressão regular
// /palavra buscada/.g.teste(testo testado);
//.g serve para pedir pra testar todas as linhas
// ^ para verificar se existe no inicio /^palavra/.g.test
// para verificar tamnho da string
//o espaço vazio tambem conta com string
console.log("ariel".length);
//recuperar caractere pelo indice
const myString = "Ariel"[1];
console.log(myString)
//para quando quiser o ultimo caractere da string
const myString2 = "Ariel"["Ariel".length - 1]
console.log(myString2);
//charAt(0) para pegar caractere daquela posição
//para buscar ultimo elemneto ultiza-se .at(-1)
const myString3 = "Ariel".charAt(0);
//indexOf() volta posição do caracterer se ele estiver no texto
// caso nao encontre return -1
const myString4 = "Ariel".indexOf("l");
console.log(myString4);
//alterna entre maisculo e minusculo
var nome = "Ariel";
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
//serve para recortar parte da string
console.log(nome.slice(0, 3));
//para substituir parte da string
//substitui o primeiro que valida com aquela condiçao
//para substituir todo texte que que e true para aquela codição utilizase replaceAll
console.log(nome.replace('el', 'br'));
// e possivel substituir a string por outra utilizando replace
//pode se usar expressão regular(/Ariel/.g, 'texte substituto')
//para substituir numero (/[0-9]/g, '') sever para substituir todos numeros por uma string vazia
//para substituir texte sem afetar o nomero(/[^0-9]g, "");
console.log(nome.replace(/Ariel/g, "Jose"));
