//para evitar ficar escrevendo unio type e facilitar a manutenção sajo não deseje receber mias de umma valor
//criar um tipo e atribuir o union type a ele
type Idade = number | string;
function exibirPessoa(nome: string, idade: number | string){
    console.log(`O nome é ${nome} e tem ${idade} anos`); 
}
function exibirAnimal(nome: string, especie: string, idade: number | string){
    console.log(`O nome é ${nome}, ${especie} e tem ${idade} anos`)
}

function showStatus(status: number | boolean){
//type guardian e o conjunto do if + typeof
//type guardian tambem funciona com interfaces
//permite tratar os dados dependendo do tupo que recebe
    if(typeof status === "number"){
        //quando faz isso o comopilador deixa acessar os metodos dos tipos

    }else if(typeof status === "boolean"){

    }
}
type PessoaFisica ={
    nome: string;
    cpf: string;
}
type PessoaJuridica ={
    nome: string;
    cnpj: string;
}

const PF: PessoaFisica ={
    nome: "Marina",
    cpf: "0000"
}
const PJ: PessoaJuridica ={
    nome: "MArina",
    cnpj: "0101"
}
function showPessoa(pessoa: PessoaFisica | PessoaJuridica){
    if((pessoa as PessoaFisica).cpf){
        console.log((pessoa as PessoaFisica).cpf)
    }else{
        console.log((pessoa as PessoaJuridica).cnpj)
    }
}
//outra forma de fazer mias rezumida
function show(pessoa: PessoaFisica | PessoaJuridica){
    if("cpf" in pessoa){
        console.log(pessoa.cpf);
    }else{
        console.log(pessoa.cnpj)
    }
    
}
//e possivel debugar declarando a palavra reservada debugger no local desejado
//para permitir que debug no vs e so ir no tsconfig e desomentar a opção sourcemap
//para debugar com node