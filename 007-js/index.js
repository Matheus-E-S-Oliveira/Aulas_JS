//Criação de objetos
//objeto Js => {cahve: valor}
//criando pelo construtor
//Construtor consegue criar objeto quando recebe undefined
let objetoConstrutor = new Object();
//criando pela notação literal
//Não cria objeto caso receba undefined
let objetoNotacaoLiteral = {};
//caracterizando objeto com propiedades e metodos
//propiedades => caracteristica do objeto
//metodo => ações realizadas pelo objeto
// criação de objeto pelo construtor
const pessoa = new Object({
    nome: "Ariel",
    sobrenome: "Sardinha",
    idade: 29,
    apresentar(){
        //para acessar objeto utiliza-se o this
        //cahmar this e o mesmo que acessar o objeto inteiro
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
});
//Criação de objeto por notação literal
const carro = {
    // declarando propiedades
    marca: "Toyota",
    modelo: "Corola",
    ano: "2023",
    //atribuir valor de uma propiedade de um objeto a propiedade de outro objeto
    proprietario: pessoa.nome,
    //forma de atribuir um objeto a uma propiedade
    //atribui uma obejeto a propiedade de outra com sprad operator
    //caso use dois objetos passando mesma chave o ultimo vai sobreeescrer o anterior
    //pode se atribuir o objeto tbm a propiedade
    contratante: {...pessoa},
    //criando chave com string
    //forma de acessar e editar a mesma
    //geralmente usado dessa forma quando se precisa usar caracter especial
    "chassi": "123456",
    //para acessar propiedade que começão com caracter especiais usa-se carro["@"]
    //o metod de acesso por ponto não funciona para essa situação ex ERRO => carro.@
    "@": "@@",
    //declarando metodos
    //tem duas formas de criar metodos
    //1 froma
    ligar : function(){
        console.log("O caroo ligou")
    },
    //2 forma
    //Forma mais resumida de criar um metodo
    desligar(){
        console.log("O carro desligou")
    }
}
//lista de carros
const carros = [carro]

const empresa = {
    nome: "Toyota",
    //quando a chave e o  valor for identicos não precisa passar o valor
    carros
}
//Metodos podem retornar valores com return
//Para acessar os parametros do objeto se chama a objeto.nome da propiedade requrida

//criando obejto dentro de objeto
const usuario = {
    nome: "Ariel",
    tipo: "Admin",
    idade: 29,
    //exemplo de obejto dentro de objeto(classe filha?)
    resisdencia: {
        rua: "Rua x",
        numero: "123",
        bairro: "Bairro y"
    },
    //possivel tambem passar um array
    telefone: {
        nome: "Ariel",
        numero:{
            n1: "999999999",
            n2: "111111111"
        },
        //criação de metodos segue mesmo principio
        adicionarTelefone(){
            //this serve com referencia do objeto atual dentro da função
            usuario.telefone.numero.n3 = "2222222222"
        }
    }
}
//chamando metodo do objeto
pessoa.apresentar();
//adicionar propiedades a um objeto existente
console.log(carro);
carro.categoria = "Sedan";
console.log(carro);
//adicionar metodo a um obejeto existente
carro.parar = () => {
    console.log("O carro parou");
};
carro.parar();
// e possivel acessar as propieades de um objeto com []
//dentro do [propiedade requerida]
console.log(carro["marca"]);
//e possivel usar esse mesmo metodo para os metodos do objeto
//e possivel criar metodo e propiedades com objeto[nome proprietario ou metodo] = valor
//criando propiedade com [] e atribuido valor a ela
carro['proprietario'] = "Ariel";
//cirando metodo com [] e editando o valor da propiedade
carro['editarProprietario'] = function (novoProprietario){
    console.log("O novo proprietario é :", novoProprietario);
    //this serve com referencia do objeto atual dentro da função
    this.proprietario = novoProprietario;
}
carro.editarProprietario("Daniel");
//Editar valores do objeto
//as formas de editar e com notação de pontos ou conxetes
console.log(carro);
carro.ano = 2024;
//edição dos metods
carro.ligar = () => {
    console.log("Metodo editado: O carro ligou");
}
//para acessar propidade de um objeto dentro de outro
console.log(usuario.resisdencia.bairro);
//this serve com referencia do objeto atual dentro da função
//para deletar propiedade e metodo de umm objeto
//deletando usando operador delete
delete carro.proprietario;
console.log(carro);
//verificar se existe uma propiedade ou metodo no objeto
//utiliznaod o operadi in
// o operador in retorna true ou false 
if("nome" in pessoa){
    console.log("Existe");
}
//tambem e possivel tentando acessar pela notação por . ou por []
//tomar cuidado para não acessar propieade de undefined
//por .
if(pessoa.dinheiro === undefined){
    console.log("Não a propiedade dinheiro");
}
//por []
if(carro['modelo'] !== undefined){
    console.log("Existe essa propiedade em objeto carro")
}
//outra forma de acessar e pe hasOwnProperty() retorna true ou false 
if(pessoa.hasOwnProperty("idade")){
    console.log("Existe propiedade idade");
}
// testando se metodo existe
if(carro.hasOwnProperty("ligar")){
    console.log("Existe esse metodo em carro");
}
//Desestruturação
//propieade requerida
//destruturação de objeto filho
//destrutaração metodo
//para imprimir todo objeto usa ...objeto
//quando for acessar ...objeto sempre no final
const {nome, nota: {nota1, nota2}, formar } = {
    nome: "Aldo",
    idade: 25,
    nota: {
        nota1: 15,
        nota2: 20
    },
    formar() {console.log("Parabens")}
}
//pode acesssar propiedade diretamente
//não pode acessar o objeto filho so suas propieades
console.log(nome, nota1, nota2);
formar();
//Renomear destrutaração
const {nome: novoAluno} = {
    nome: "Jose",
    idade: 25,
    nota: {
        nota1: 15,
        nota2: 20
    },
    formar() {console.log("Parabens")}
}
console.log(novoAluno)
//interar sobre o objeto imprime as propiedade
for(const chave in empresa){
    console.log(chave);
}
//interar objeto imprimindo valor das propiedades
for(const chave in empresa){
    console.log(empresa[chave]);
} 
//usando for of
//tem transforma objeto em lista para da certo
for (const interar of Object.entries(pessoa)){
    console.log(interar);
}
//destruturar lista
for (const [chave, valor] of Object.entries(pessoa)){
    console.log(chave, valor);
}
//trabalahdno com object
//retorna uma lista retorna as chaves do objeto
console.log(Object.keys(empresa));
//usando for para epgar valor usando keys
const emrpesaKeys = Object.keys(empresa);

for(let i = 0; i < emrpesaKeys.length; i++){
    //retorna as chaves na forma de uma lista acessando o indice da lista
    console.log(emrpesaKeys[i]);
    const chave = emrpesaKeys[i];
    console.log(chave, ': ', empresa[chave]);
}
//Object.values, tras uma lista com o valor do objeto
console.log(Object.values(pessoa));

///diferença entre JSON e JS
//a notação JSON foi criada para transmição de dados
//JSON não aceita funções
//JSON aceita?: boolean, null, 123.123, "dwad", {}, []
//declaração de JASON
// {
//     //as chaves são entre aspas
//     "nome" : "ALdo",
//     "Sobrenome" : "Oliveira",
//     "idade" : 12
// }
//JSON não aceita metodos.
//para converter objeto JS para JSON usa-se JSON.stringfy()
//transforma em uma string
const json = JSON.stringify(pessoa);
console.log("Objeto JSON: ", json);
//para converter um JSON para um objeto
const jsonConvert = JSON.parse(json);
console.log("Objeto JS: ", jsonConvert);
