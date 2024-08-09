//Criando um novo erro que atende o erro especifico
class MeuErro extends Error{
    //precisa passar o construtor para passar amsg e o objeto de configuração
    constructor(message, props){
        super(message, props);
        //nome do erro
        this.nome = "MeuErro";
    }
}
//função para tratar todo erros
function handError(Error){
    if(erro instanceof MeuErro){
        console.log("Tratando erro especifico")
    }

    if(erro instanceof RangeError){
        console.log("Tratando o RangeError");
    }

    //imprimi nome do erro
    console.log("Nome:", erro.name);
    //volta mesagem sobre o erro resumida
    console.log("Menssagem:", erro.message);
    //não e possivel pegar cause assim
    console.log("Causa: ", erro.cause);
    //tras todas informações do erro
    console.log("Stack: ",erro.stack);
}
//função pra tratar erro especifico
function fetchErro(){
    if(Math.random() > 0.5){
        //define mensagem pro erro
    throw new MeuErro("erro desconehcido",{
        //define causa pro erro
        cause: "causa do erro"
    });
    }else{
        const array = new Array(10000000000000000);
    }


    // if(Math.random() > 0.5){
    //     //define mensagem pro erro
    // throw new Error("erro desconehcido",{
    //     //define causa pro erro
    //     cause: "causa do erro"
    // });
    // }else{
    //     const array = new Array(10000000000000000);
    // }
}

//para fazer tratamento de excessão
//estrutura try-cach-finally
//o bloco de codigo try-cach-finally para tratamento de erro
//que no caso se hover um erro no codigo dentro de cach ele enterronpe a execução daquele codigo
//caso tenha capturado com cach ele ira fazer o tratamento ou imprimir mensagem de erro 
//e o bloco finally que sempre vai ser executado indepedente se houver erro ou não
//o uso de do bloco try-cach, evita que a fluxo de execunção trave a aplicação
//pulando codigo que deu exeção e executando o codigo normalmente depois cajo haja um
try{
    //codigo que pode dar erro
    console.log("primeiro console")
    fetchErro();

    console.log("segundo console");
}catch(erro){
    //tartando erro especifico
    if(erro instanceof MeuErro){
        console.log("Tratando erro generico")
    }
    //erro generico engobla todos tipos de erros
    //para evitar esse problema se cria um erro especifico

    // if(erro instanceof Error){
    //     console.log("Tratando erro generico")
    // }
//o bloco cach e para pegar o erro
//tratamento de exceção
// console.log("tratamento de exeção", erro);
//imprimi nome do erro
console.log("Nome:", erro.name);
//volta mesagem sobre o erro resumida
console.log("Menssagem:", erro.message);
//não e possivel pegar cause assim
console.log("Causa: ", erro.cause);
//tras todas informações do erro
console.log("Stack: ",erro.stack);
} finally{
    //executa indepedente se a erro ou não
    console.log("finally")
}
console.log("final da execução do erro");
//quando e pra retorna mensagem de erro não e necessario usar return e so declara o erro e a msg