"use strict"
//utiliza-se no topo do codigo ou no topo da função
//declarar privacidade para atributos e metodos
// para acessar as porpiedades publicas e privadas
//criando construtor do objeto Aluno
//Adicionando propiedade sexo na instacia do construtor para pode atribuir valor a ela
function Aluno(nome, idade, sexo, nota, resultadoFinal) {
    this.nome = nome,
    this.idade = idade
    // //variaveis privadas para armazenar  valores
    // let _nota = nota;

    //criando propieadade com difineProperty
    //propiedade criada dessa maneira não e visivel
    //criar propiedade dessa maneira se tem mais controle pela propieadade
    //para poder passar valor para variavel declarada precisa declara na instancia
    Object.defineProperty(this, "sexo", {
        //para deixar propiedade visivel
        //o valor padrão do enumerable e false
        enumerable: true,
        //para configurar para propidade para receber valor
        value: sexo, //o valor atribuido vai ser o que vai ser salvo na propiedade
        //para permitir se a propiedade pode ser alterada ou não
        //o valor padão do writable e false
        writable: true,
        //permite se pode redefinir a configurção da propieade
        //Valor padrão e false
        configurable: true 
    });
    //Exemplo de reconfiguração da propieade
    //so e possivel se configurable is true
    // Object.defineProperty(this, "sexo", {
    //     //para deixar propiedade visivel
    //     //o valor padrão do enumerable e false
    //     enumerable: true,
    //     //para configurar para propidade para receber valor
    //     value: sexo, //o valor atribuido vai ser o que vai ser salvo na propiedade
    //     //para permitir se a propiedade pode ser alterada ou não
    //     //o valor padão do writable e false
    //     writable: false,
    //     //permite se pode redefinir a configurção da propieade
    //     //Valor padrão e false
    //     configurable: false 
    // });
    //Usando Object.defineProperties
    //a diferença desse metodo ao anterior e que ele permite declaração de varias propieades ao mesmo tempo
    Object.defineProperties(this, {
        nota: {
            enumerable: true,
            //value: 60,
            configurable: false,
            //usando metodos acessores get e set
            //para usar metodos get e set as configurações de value e writable devem ser removidas
            //pois os metodos get e set realizam a mesma função
            //utilizando função arrow para retorna a nota
            //get e set são geralmente utilizados em encaspsulamento
            //retorna valor da propiedade nota
            get: () => nota,//ou _nota
            //atribuindo a propiedade nota valor via metodo set
            set: (nota) =>  nota = nota //ou _nota = nota       
        },
        resultadoFinal: {
            enumerable : true,
            value: "Aprovado"
        }
    })
}
function Counter(){
    //não se utiliza this, usa-se como variavel comum
    //us-se _ para declarar variavel para marcar que e privado
    let _count = 0;
    //declaração de metodos privados usa-se tambemo _
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
    // if(!(this instanceof Pessoa)){
    //     return new Pessoa(nome, idade);
    // }
    // //outra forma de ver se o objeto foi instaciado o não
    // if(!new.target){
    //     return new Pessoa(nome, idade);
    //     //declarando erro;
    //     throw "O objeto deve ser instaciado";
        
    // }
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
//Metodo this so aponta para pessoa quando esta dentro do escopo da função
//Caso o metdodo this não esteja dentro do escopo do objeto ele ira apontar para o objeto goblal
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

//chamar propiedade e metodos
// hamando propiedade nome
// engenheiro.nome;
// Chamando metodo andar
// engenheiro.andar();
// Imprimindo objeto engenheiro
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
//instaciando objeto engemheiro
const engenheiro = new Engenheiro("Jose", 55, "dev", 123456);
console.log(engenheiro);
// Acessa o prototype de Engenheiro
// console.log(Engenheiro.prototype);
// Acessa o prototype de Funcionario
// console.log(Engenheiro.prototype.__proto__); // Deve mostrar Funcionario.prototype
// Acessa o prototype de Pessoa
// console.log(Engenheiro.prototype.__proto__.__proto__);
console.log(engenheiro.nome);
engenheiro.nascer();
//todo objeto herda de Object (string, array)...
// e possoivel acessar os metods de object pois todo objeto herda dele
//e possivel acessar Object pelo proto
//a classe base acessar Object pelo proto
//Acessando prototype de Object
console.log(engenheiro.__proto__.__proto__.__proto__.__proto__);
//verifica se a propiedade existe
//retona valor boolean
console.log(engenheiro.hasOwnProperty("nome"));
//Object também tem um proto que o null
//quando tenta acessar um metodo ou propiedade acessa o null
//o fluxo de funcionamento do prototype e que quando quer acesssar metodo ou propiedade,
//e ela não se encontra no objeto ele acessa o proto de quem herda ate encontra ou ate para no proto que object esta apontando
//tambem conhecido como null
//JS quando se cria uma string  cria um objeto string
//todo valor que se instacia com new e um Objeto

//instanciando objeto Aluno
const aluno1 = new Aluno("Ariel", 29);
//para criar um novo objeto a partir de uma instacia anterior(de um objeto existente)
//O Object.create permite que cire um objeto a partur de um objeto existente
//serve caso queira criar um objeto com mesmo valor de outro ou parecido
//o novo obejo herda as propiedades e valore do objeto a partir do objeto que foi criado
const aluno2 = Object.create(aluno1);
//e possivel criar o objeto e explar no pbjeto que ta sendo herdado e adicionar novos dados ao objeto que esta sendo criado
//transorma o variavel em um objeto que vai conter todas propiedade presentes
const aluno3 = Object.create({
    ...aluno1,
    endereco: "Rua x"
});
// criando propiedade no objeto e adicona valor a ela ao inves de cria outro objeto 
//Cria a propiedade endereço no objeto pessoa2
aluno2.endereco = "Rua Y";
//cirando objeto pelo construtor com prototype
//se não passar os valores da propiedades ele herda apenas as propiedades existente no construtor
const aluno4 = new Aluno.prototype.constructor("Ariel", 55);
//criar objeto por um objeto existente
const aluno5 = new aluno1.__proto__.constructor("Ariel", 44);
//não e necessario passar o __proto__ para criar o objeto o js faz altomaticamente se o objeto existir
const aluno6 = new aluno1.constructor("Ariel", 15, "M", 60);
//imprimindo aluno6
console.log(aluno6);
//metodo difine propety