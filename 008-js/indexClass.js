//Declarando classes
//Classe abstrct  não pode ser instaciada, pode ser apena instanciada
class Pessoa {
    //criando propiedades
    //propiedade publica
    nome;
    idade;
    //para declarar uma propiedade privada utliza-se #
    //propiedade private
    // #id;
    // //declarando propiedade static
    // static pessoas = 0;
    //metodos não precisa de declarar termo function
    //metodos tem apenas seu nome e corpo
    //metodo publico
    //declarando metodo static
    static pessoasMorreu(valor){
        Pessoa.pessoas -= valor;
    }
    andar(){
        console.log("Pessoa andou");
    }
    //para declarar metodo privado utiliza-se #
    //metodo private
    // #correr(){
    //     console.log("Correu");
    // }
    //para atribuir valor a parametros usa-se constructor
    constructor(nome, idade){
        //JS não tem meio de declarar classe abstrata
        //para não instaciar a classe pode-se usar
        //olha se o alvo do new e a classe Pessoa
        if(new.target === Pessoa){
            //lançando erro caso tente instaciar a classe
            throw new Error("Está e uma classe abstrata")
        }
        //caso não tenha declarado a propiedade o construtor cria essa propiedade em tempo de execução
        //na hora que executar o constructor
        //o metodo this chega se a propiedade existe se não existir o construtor cira uma na hora
        this.nome = nome;
        this.idade = idade;
        //implementando propiedade static
        // Pessoa.pessoas++;
    }
    //metodos acessores para acessar propiedades 
    //por convenção declarar nome do metodo com o nome da propiedade em questão
    // get nome () {
    //     return this.#id;
    // }
    // //o metodo set precisa do metodo set para funcionar
    // set nome(value){
    //     this.#id = id;
    // }
}
//fazendo herança na classe Pessoa
//declarando classe Alunos
class Alunos extends Pessoa{
    nota;

    constructor(nome, idade, nota){
        //super a forma de acessar as proidades da classe pai
        //super é construtor o clase pai
        //O construtor super vem primeiro
        super(nome, idade)
        this.nota = nota;
    }
}
const aluno = new Alunos("Marcos", 88, 66);
//Para acessar propiedade static se acessa pela classe(objeto)
// console.log(Pessoa.pessoas);
console.log(aluno.andar());
//sobre a sobreescrita dos metodos, os metodos da classe filha tem prioridade sobre os da classe pai, de acordo com o fluxo de execução do JS
// classe abstrata != interface 
//classe abstrata pode implemntar nela
//a interface serve como um contrato, aonde toda classe que usa ela tem que implentar seu metodos obrigatoriamente
//JS não tem implementação nativa de interface
//Exmplo de interface

class Animal{

    constructor(){
        if(new.target === Animal){
            throw new Error("Essa interface não pode ser instaciada")
        }
    }
    //não pode implentar metodo da classe pai
    andar(){
        throw new Error("Este metodo precisa ser implementado")
    }
}
class Gato extends Animal{
    raca;
    sexo;
    miado;
    constructor(raca, sexo, miado){
        //e necessario declarar o super mesmo não tendo atributos pois a classe esta herdado outra
        super();
        this.raca = raca;
        this.sexo = sexo;
        this.miado = miado;
    }
    andar(){
        console.log("O gato andou");
    }
}