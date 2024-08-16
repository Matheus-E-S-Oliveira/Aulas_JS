export const adicao = (a,b) => a + b;
const subtracao = (a,b) => a - b;
const multiplicacao = (a,b) => a * b;
const divisao = (a,b) => a / b;

//para exporta alguma coisa do CommomJS usa-se module
//module e um objeto que contem varias coisa do node
//exports vai esportar qualquer coisa que eloe recber
//um arquivo esportanto um objeto contendo as chves das funções
// module.exports ={
//     adicao,//resumo de adicao : adicao resumo serve quando os nome são iguais
//     subtracao,
//     multiplicacao,
//     divisao
// }
//utilizando modulo ES6 usa-se export
//não vai ser tratado como um objeto como acontece quando utilizmaos CommomJS
//passa-se o valor do que vai ser exportado
//exportação em lote
export {
   // adicao,
    subtracao,
    multiplicacao,
    divisao
}
//tem como exporta individualmente como abaixo
// export const adicao = (a,b) => a + b;
//exportação por lote
const PI = 3.14
class Circulo{ }
export{
    PI,
    Circulo
}
//exportar por default geralmenre utilizada para exporta o principal valor ou funcionulidade do modulo
//so pode se ter uma exportação default por arquivo
export default function raizQuadrada(x){
    return Math.sqrt(x)
}
//renomear exportação
//por causa da renomeação e possivel ter exportação com mesmo valor
export {
    PI as constantePi,
    Circulo as circulo
}