//para criar data utiliza-se o construtor new Date()
//de acordo com esse construtor cria essa data de acordo com a do sistema operacional
//utiliza-se padrão americano como padrão
let data = new Date();
//criar data com string de acordo com a documentação
//mm/DD/AAAA hh:MM:ss.ms +z no final para levar em conta o padrão UTC
let data2 = new Date("December 17, 2022 03:24:00.001z")
//AAA/mm/dd T(serve pra marca que e tempo)hh:MM:ss
let data3 = new Date("2021-11-15T13:15:02z");
//declarar data com numero
//Em JavaScript, o índice dos meses no construtor Date é baseado em zero
// janeiro == 0, fevereiro == 1, ... dezembro = 11;
//para definir fuso horario  pode se colocar hora -d=fuso horario
let data4 = new Date(2023, 5, 10, 11 - 3 ,13, 15);
//leva em conta em consideração o UTC da região aonde esta
let data5 = new Date(Date.UTC(2020, 5, 15, 12, 14, 25));
//reotna os milisegundos desde 1970 ate a data passada
//esse modo de declarar da problema quando vai se trabalhar com tipo date seus metodos
let data6 = Date.UTC(2020, 5, 10, 10, 10, 25);
// retorna os milisegundos des 1970 as 00:00:00 UTC
let data7 = Date.now();
//para criar uma data a partir dos milisegundo
let data8 = new Date(Date.now());
console.log("Data 1:", data);
console.log("Data 2:",data2);
console.log("Data 3:",data3);
console.log("Data 4:",data4);
console.log("Data 5:",data5);
console.log("Data 6:",data6);
console.log("Data 7:",data7);
console.log("Data 8:",data8);
//outra forma de pegar o timeStamp e com .getTime()
console.log(new Date().getTime());
//tambem e possivel pegar timeStamp com terminador ternario
console.log(+new Date());
//pegar diferença de tempo
//Tras a diferença entre os dois tempos
let dataInicio = Date.now();
//calcula diferença de tempo com setTimeout(() => {})
setTimeout(() => {
    let milisegundos = Date.now() - dataInicio;
    console.log(milisegundos / 1000);//converte voltar em segundos.
}, 2000)//Tempo de espera para pegar diferença
// para calcular a diferença de tempo entre duas datas
let datat = new Date(2024, 11, 20); // 1º de janeiro de 2024
let datat2 = new Date(2023, 11, 20);
let diferença = datat.getTime() - datat2.getTime();
//saber quantos minutos passaram
console.log(diferença / (1000 * 60));
//para horas
console.log(diferença / (100 * 60 * 60));
//para dias
let difDays = diferença / (1000 * 60 * 60 * 24);
console.log(difDays);
//selecionar parte especifica da data
//para pegar dia do mes é de [1-30~31]
console.log(data3.getDate());
//buscar dia da semana incia [0-6]
console.log(data3.getDay());
//busca mes é de [0-11]
console.log(data3.getMonth());
//busca ano
console.log(data3.getFullYear());
//formata data
console.log(`${data3.getDate()}/${data3.getMonth()}/${data3.getFullYear()}`)
//adicionar 0 quando for apenas um digito
//para configurar para exibir mes certo fora da formatação JS[0-11]
//pode se somar +1 quando buscar o mes => (data5.Month() +1)
let mes = data5.getMonth().toString().padStart(2 , '0')
console.log(`${mes}`);
//Trabalhar com as horas
//Todos metodos get para trabalhar com tempo tem o metodo sem UTC
//Mas geralmente apenas horas da problema
//aplica UTC automaticamnete
console.log(data5.getHours());
//pegar as horas sem aplicar o UTC
console.log(data5.getUTCHours());
//pegar minutos
console.log(data5.getMinutes());
//para segundo
console.log(data5.getSeconds());
//formatar horas
console.log(`${data5.getHours().toString().padStart(2, '0')}:${data5.getMinutes().toString().padStart(2, '0')}:${data5.getSeconds().toString().padStart(2, '0')}`)
//editar data
console.log("Data 3:",data3);
//retorna apenas timeTemp
//altera o ano
//assim por diante para dias e mes
data3.setFullYear(2022)
console.log(data3);
//para edição de time e o mesmo de date
//ciudado com utc na hora de editar a data igual a quando busca
// na edição de horas pode atualizar minutos e horas junto
//para evitar erro de fuso horario sendo aplicado duas vezes usar setUTChours
data3.setHours(6, 15, 2);
console.log(data3);
data3.setUTCHours(5, 15, 2);
console.log(data3);
//exemplo de edição mais pratica
//tomar cuidado para não deixar numero negativo
setTimeout(() => {
    data3.setDate(data3.getDate()- 1);
    console.log("Dia editado", data3);
});
//é possivel editar o pelo offset(-00:00) UTC mais nao e recomendado
//'aaaa-mm-ddThh:mm:ss-00:00
//-00(UTC relativo):00
//formatar data com Intl
//incializar intl
//existe dois jeitos de implementar Intl
let dataFormatada = new Intl.DateTimeFormat("pt-BR",{
    dateStyle: 'short', timeStyle: 'short'
}).format(data3);
console.log(dataFormatada);
//segundo jeito de implementar
let formatada2 = new Intl.DateTimeFormat("pt-BR",{
    dateStyle: 'full', timeStyle: 'full'
});
console.log(formatada2.format(data3));
