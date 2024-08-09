//Criando construtor do Objeto pessoa
function Pessoa (nome, idade){
    this.nome = nome,
    this.idade = idade
}
//Criando funções do objeto Pessoa no seu prototype
Pessoa.prototype.viver = function () {
    console.log(`O individo ${this.nome}, nasceu`);
} 

Pessoa.prototype.morrer = function () {
    console.log(`O individuo ${this.nome} morreu aos ${this.idade}`)
}
//Criando construtosr do objeto Funcionario
//E necessario declarar atributos herdados
function Funcionario (nome, idade, cargo) {
    //herdando propiedades do objeto pessoa via prototype
    Pessoa.call(this, nome, idade),
    this.cargo = cargo;
}
//Criando metodos do objeto Funcionario no seu prototype
Funcionario.prototype.baterPonto = function () {
    console.log(`O funcionario, bateu ponto`);
}
//Configurando herança  do prototype do objeto pessoa
Funcionario.prototype = Object.create(Pessoa.prototype);
//Configurando construtor o objeto Funcionario no prototype
Funcionario.prototype.construtctor = Funcionario;
//Criando construtor do objeto Engenheiro
//E necessario declara todas propiedades herdadas do objeto
function Engenheiro (nome, idade, cargo, crea) {
    //herdadndo propiedades do objeto Funcionario via prototype
    Funcionario.call(this, nome, idade, cargo);
    this.crea = crea
}

Engenheiro.prototype = Object.create(Funcionario.prototype);
Engenheiro.prototype.construtctor = Engenheiro;
//instanciado objetos conectados pelo prototype via engenheiro
const engenheiro = new Engenheiro("Ariel", 34, "Dev", 123456);
//Impressão do objeto enegenheiro
console.log(engenheiro);
//E possivel acessar propiedades dos objetos herdados de forma abreviada
console.log(engenheiro.nome);
//o mesmo tambem e possivel para os metodos
engenheiro.viver();
