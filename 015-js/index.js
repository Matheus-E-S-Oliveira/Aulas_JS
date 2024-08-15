//criando expressão regular
//criando usando forma liteal
//e indicado quando tem certeza que ela não vai ser modificado
//ou quando não vem de uma chamada de função
/abc/
//criando usando construtor
//usado quando não tem certeza da expressão que vai receber
new RegExp("abc");
//metodos da expressão regular
const frase = "OS gatos são muitos fofos. Eu amo gatos!";
const regex = /gatos/g
//checar se uma expressão regular exite
regex.test  (frase);//true
//metodo exerc retorna uma lista do elesmentos encontrados de acordo com a expressão regular
regex.exec("gatos");
//para buscar um grupo
const frase2 = "A data de hoje é 22/05/2023";
const regex2 = /(\d{2})\/(\d{2})\/(\d{4})/;

const resultado = regex2.exec(frase2);
if(resultado !== null){
    console.log("Correspodência completa: ", resultado[0]);
    console.log("Primeiro grupo de captura (Dia): ", resultado[1]);
    console.log("Segundo grupo de captura(Mês): ", resultado[2]);
    console.log("Terceiro grupo de captura (Ano): ", resultado[3]);
    console.log("Índice da correspondecia na string: ",  resultado.index);
    console.log("String original: ", resultado.input);
}
const valor = "abc abc";
//retorna uma lista dos valores que derem match
///g serve para falar que e pra pecorrer toda string
//sem o / ele pega apenas a primeira
valor.match("abc/g")
const frase3 = "A data de hoje é 22/05/2023 e 23/05/2023";
const regex3 = /(\d{2})\/(\d{2})\/(\d{4})/g;
frase3.match(regex3);
//replace não e um metodo regex e um metodo para string
//mas pode se usar para regex
frase.replace(regex, "cachorro");
//executando função de callback no segundo argumneto
frase.replace(regex, (match, g1, offset,valor)=>{
    console.log(`Match: ${match} na posição ${offset}: ${g1}`) /* reorna primeiro que deu match*/
    console.log(`Valor original: ${valor}`);
    return "cachorros,"  //retorna match    //volta indice
})
//checar quantas vezes aparece determinada expressão
const texto = "Uma maçã por dia mantém o médico longe"
const proc = /a/g
const result = texto.match(proc)
console.log(result.length) ;
//usando split pra quebra string em array
console.log(valor.split(' '))//ou (/ /g) com expressão regular
const testo = "1, 2, 3; 4.5|6 7"
console.log(testo.split(/[\s,;.|]+/));
//metodo search metodo da string retorna o indice da string do primeiro match
console.log(frase.search(/gatos/));
//validar informaçoes
const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const email = "email@treinaweb.com"
if(validarEmail.test(email)){
    console.log(`email ${email} é válido e foi enviado`);
}else{
    console.log("email inválido");
}
//extrair dados
const valorTel = "O telefone é (11 9999-9999)";
const mask = /\((d+)\) (\d+) - (\d+)/
const match = valor.match(mask)
console.log(match[0])//retorna numero completo
//remove tudo que não e um numero
const numeroTelefone = match[0].replace(/\D/g);
//substituir string
const data = "2023-05-22"
data.replace(/(\d(4))-(\d(2))-(\d(2))/, (match,ano,mes,dia)=>{
    return `${dia}/${mes}/${ano}`
})