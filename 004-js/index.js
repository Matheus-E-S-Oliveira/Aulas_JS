//valor maximo de inteiro no js 2 ** 53
//representação maxima de um interio Number.MAX_SAFE_INTEGER
//fazer operção com casa decimais pode dar resultado inesperado.
//para resolver isso pode se multiplicar o valor por 100 e depois da operação divida o resultado por 100
//para criar um bing int valor+n
let maiorNumero = Number.MAX_SAFE_INTEGER
let valorBigInt = 155n;
//não pode fazer operção com valor int e bigInt
//para converter int para bigInt utuliza-se
// maiorNumero = BigInt(MAX_SAFE_INTEGER)
// para trabalhar com binario para declarar que o numero e binario.
//a nota~ção utilizada para declarar que e bininario e (0b ou 0B) => notação para trabalhar com binario
//declaração de numero binario.
let binario = 0b1111;
let binario2 = 0B11110000;
console.log(binario);
console.log(binario2);
console.log(binario + binario2);
//numeros octais [0-7]
//para trabalhar com numero octal começa notação com 0o
var n1 = 0o755;
//o octal 8 e representado e o numero => 0o10;
let n2 = 0o10;
console.log(n1);
console.log(n2);
console.log(n1 + n2);
//números hexadecimal.
// [0-9] [A-F]
/*
A =10
B =12
C =13
D =14
F =15
*/
//notaçãode e hexadecimal => 0x
let hexadecimal = 0xF;
let hexadecimal1 = 0xA;
console.log(hexadecimal + hexadecimal1);
// coverter string para hexadecimal = >return `0x${hexadecimal}`;
//separador numericos utlizase => _
let num1 = 195_232_540.13_512;
console.log(num1);
//NaN e um tipo numerico console.log(typeof NaN);
//pode-se acessar o NaN com => Number.NaN
// retorna NaN quando não se consegue fazer a esquação ou contatenação
//operção unario (+variavel) tenta converter parametro recebido um numero
//NaN e um objeto goblal.
//Para verfificar se uma parametro e NaN
//pode-se utilizar função goblal isNaN(variavel)
console.log(isNaN(NaN));
console.log(isNaN("ola"));
//checar documentação para verificar condição do isNaN() ou Number.isNaN()
//pode se dar resultar resltado inesperado
//uma versão mais segura e o Number.isNaN(variavel);
console.log(Number.isNaN("ola"));
//Manipular precisão de um numero com ToFixed(Numero de casas decimais a serem voltadas)
//transforma numero em uma string
let num2 = 10.32165497.toFixed(2);
console.log(typeof num2);
//transformar em numero denovo com Number ou comterminador unario
console.log(typeof Number(num2));
console.log(Number(num2));
//pontecialização
//fazer ponteciazão com função Math.pow()
let numero = Math.pow(2,4);
console.log(Math.pow(2,2));
// ### Propriedades
// - **`Math.E`**: A constante `e` (base do logaritmo natural), aproximadamente 2.718.
// - **`Math.LN10`**: O logaritmo natural de 10, aproximadamente 2.302.
// - **`Math.LN2`**: O logaritmo natural de 2, aproximadamente 0.693.
// - **`Math.LOG2E`**: O logaritmo de `e` na base 2, aproximadamente 1.442.
// - **`Math.LOG10E`**: O logaritmo de `e` na base 10, aproximadamente 0.434.
// - **`Math.PI`**: O valor de π (pi), aproximadamente 3.14159.
// - **`Math.SQRT2`**: A raiz quadrada de 2, aproximadamente 1.414.
// - **`Math.SQRT1_2`**: A raiz quadrada de 1/2, aproximadamente 0.707.

// ### Métodos
// - **`Math.abs(x)`**: Retorna o valor absoluto de `x`.
//   console.log(Math.abs(-5)); // 5

// - **`Math.ceil(x)`**: Retorna o menor inteiro maior ou igual a `x`.
//   console.log(Math.ceil(4.2)); // 5

// - **`Math.floor(x)`**: Retorna o maior inteiro menor ou igual a `x`.
//   console.log(Math.floor(4.7)); // 4

// - **`Math.round(x)`**: Retorna o valor de `x` arredondado para o inteiro mais próximo.
//   console.log(Math.round(4.5)); // 5

// - **`Math.max(a, b, c, ...)`**: Retorna o maior valor entre os argumentos fornecidos.
//   console.log(Math.max(1, 2, 3)); // 3

// - **`Math.min(a, b, c, ...)`**: Retorna o menor valor entre os argumentos fornecidos.
//   console.log(Math.min(1, 2, 3)); // 1

// - **`Math.pow(base, exp)`**: Retorna a base elevada à potência do expoente.
//   console.log(Math.pow(2, 3)); // 8

// - **`Math.sqrt(x)`**: Retorna a raiz quadrada de `x`.
//   console.log(Math.sqrt(16)); // 4

// - **`Math.random()`**: Retorna um número pseudo-aleatório entre 0 (inclusive) e 1 (exclusive).
//   console.log(Math.random()); // Exemplo: 0.123456

// - **`Math.trunc(x)`**: Retorna a parte inteira de `x` removendo a parte decimal.
//   console.log(Math.trunc(4.9)); // 4

// tranforma numero em string usando metodo toString()
console.log(typeof numero.toString());
console.log(numero.toString());
//transformar numero em forma real ou moeda usando toLocaleString()
//pega pelo S.O.(escolha da moeda)
//para definir o de onde a moeda e usando toLocaleString('idioma'(pode acessar o tipo de moeda tambemusando) style: 'currency', currency: "BRL"(sigla da moeda requerida))(tem o currencyDysplay para mais customização)
//e possivel acessar no documento os sibulos da moedas
//retorna uma string
let customizacaooMoeda = 
console.log(numero.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));