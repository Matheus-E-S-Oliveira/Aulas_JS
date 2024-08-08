"use strict"
//utiliza-se no topo do codigo ou no topo da função
//declarar privacidade para atributos e metodos
function Counter(){
    //não se utiliza this, usa-se como variavel comum
    //us-se _ para declarar variavel para marcar que e privado
    let _count = 0;
    
    function _increment(){
        _count++;
    }

     //criando metodo publica para acessar o count
    this.getCount = () => _count;

    //criando metodo publico para incrementar no count
    this.increment = function () {
        _increment();
    }
}

//Criando construtor para o objeto
function Pessoa (nome, idade) {
    //referencia para objeto
    //cria propiedade
    //validação para sabe se o objeto foi instaciado para evitar o erro com uso do this
    //valida se o this não tiver referenciando o objeto
    //instaceia ele
    if(!(this instanceof Pessoa)){
        return new Pessoa(nome, idade);
    }
    //outra forma de ver se o objeto foi instaciado o não
    if(!new.target){
        return new Pessoa(nome, idade);
        //declarando erro;
        throw "O objeto deve ser instaciado";
        
    }
    //execuatar erro para que o  ususario corriga e passe o new para instaciar o objeto
    this.nome = nome;
    this.idade = idade;
    //declarando metodo no construtor
    // this.andar = function () {}
    
}
// prototype para herença
//Declaração dos metodos fica no prototype
Pessoa.prototype.nascer = function(){
    console.log(`A pessoa ${this.nome} nasceu`);
}
Pessoa.prototype.morrer = function(){
    console.log(`A pessoa ${this.nome} morreu`);
}
Pessoa.prototype.andar = function() {}
// let nome = "ariel"
// let idade = 24
//inicializa pessoa
//const pessoa = new Pessoa();
//prototype aparece quando imprime a instacia do objeto
// console.log(pessoa);
//formas de acessar prototupe de pessoa
// console.log(Pessoa.prototype);
// //acessa prototyoe dele
// console.log(pessoa.__proto__);

function Funcionario (nome, idade, cargo){
    //a ordem das propiedades tem que tar na mesma ordem
    //chamando metodo call para acessar parametros do objeto herdado
    //e necessario passar propieades do objeto que ta sendo heraddo
    Pessoa.call(this, nome, idade)
    this.cargo = cargo;
}

//tratamento => para p funcionario poder acessar o prototype de pessoa
//precisa de fazer um ajuste no construtor pois se perde ele apos aplicar esse metodo abaixo
//correção para herança funcionar corretamente
Funcionario.prototype = Object.create(Pessoa.prototype)
//fazendo ajuste para prototype não perde o construtor
//correção para herança funcionar corretamente e poder acessar o prototype de pessoa
Funcionario.prototype.constructor = Funcionario;
//cuidado com a ordem metodo vem depois dos ajustes para acessar objeto herdado
Funcionario.prototype.baterPronto = function() {
    console.log("bateu ponto");
}
//instacianado objeto funcionario
//const funcionario = new Funcionario ()
//const funcionario = new Funcionario("dev");
// console.log(funcionario)
// console.log(Funcionario.prototype);
//acessa o prototype dele
// console.log(funcionario.__proto__);
//para acessar o prototype do objeto que esta herdando
//mas não mostra o prototype daquele que esta herdando para acessar tem que fazer um tratamento para poder acessar prototype de pessoa
//precisa de correção para acessar herança corretamente
// console.log(funcionario.__proto__.__proto__);
//correção para herança funcionar corretamente e pode acessar prototype de funcionario
function Engenheiro(nome, idade, cargo, crea){
    //a ordem das propiedades tem que tar na mesma ordem
    //chamando metodo call para acessar parametros do objeto herdado
    //e necessario passar propieades do objeto que ta sendo heraddo
    Funcionario.call(this, nome, idade, cargo)
    this.crea = crea;
}
Engenheiro.prototype = Object.create(Funcionario.prototype);
//correção para construtor aparecer no prototype
Engenheiro.prototype.constructor = Engenheiro;
//instaciando objeto engemheiro


// console.log(engenheiro.__proto__.__proto__);
// console.log(Engenheiro.prototype);

//chamar propiedade e metodos
// engenheiro.nome;
// engenheiro.andar();
// console.log(engenheiro);
//This
//sobre a palavra resevada this
//se referencia ao propio objeto do contexto que se encontra
// tomar cuidado com uso da palavra reservada this.
//caso não se passe a função com a palavra reservada new
//pois ele vai ta passando como uma variavel normal
//caso não se instacei o objeto antes de passar para o construtor
//a palavra this vai ta se refecenciando ao objeto goblal
console.log(this);
//outra forma de evitar erro e uso "strict mode"
//muda a semnatica do JS e a forma que le se coporta
//elimina erros silenciosos
//faz uma serie de correções para evitar que cometa um tipo de erro
//Ele vai no topo do arquivo ou no topo da função
//Instaciando objeto counter
const counter = new Counter();
counter.increment();
console.log(counter.getCount());
// para acessar as porpiedades publicas e privadas
const engenheiro = new Engenheiro("Jose", 55, "dev", 123456);
console.log(engenheiro);
console.log(Engenheiro.prototype);
console.log(Engenheiro.prototype.__proto__); // Deve mostrar Funcionario.prototype
console.log(Engenheiro.prototype.__proto__.__proto__);