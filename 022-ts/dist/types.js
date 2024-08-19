"use strict";
function exibirPessoa(nome, idade) {
    console.log(`O nome é ${nome} e tem ${idade} anos`);
}
function exibirAnimal(nome, especie, idade) {
    console.log(`O nome é ${nome}, ${especie} e tem ${idade} anos`);
}
function showStatus(status) {
    //type guardian e o conjunto do if + typeof
    //type guardian tambem funciona com interfaces
    //permite tratar os dados dependendo do tupo que recebe
    if (typeof status === "number") {
        //quando faz isso o comopilador deixa acessar os metodos dos tipos
    }
    else if (typeof status === "boolean") {
    }
}
const PF = {
    nome: "Marina",
    cpf: "0000"
};
const PJ = {
    nome: "MArina",
    cnpj: "0101"
};
function showPessoa(pessoa) {
    if (pessoa.cpf) {
        console.log(pessoa.cpf);
    }
    else {
        console.log(pessoa.cnpj);
    }
}
//outra forma de fazer mias rezumida
function show(pessoa) {
    if ("cpf" in pessoa) {
        console.log(pessoa.cpf);
    }
    else {
        console.log(pessoa.cnpj);
    }
}
//e possivel debugar declarando a palavra reservada debugger no local desejado
//para permitir que debug no vs e so ir no tsconfig e desomentar a opção sourcemap
//para debugar com node
//# sourceMappingURL=types.js.map