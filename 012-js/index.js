//para executar comandos no prot de comando tem que importa um pacote
//pacote usado e o readline
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
function question(querry){
    return new Promise((resolve) => {
        readLine.question(querry, ((resposta) =>{
            resolve(resposta);
        }))
    });
}
// question("pergunt aleatoria").then((resposta) =>{
//     console.log(resposta);
//     readLine.close();
// })

const candidatos = [];
const votos ={};

async function main(){
    console.log("### Bem vindo ao sistema eleitorla TreinaWeb ###");
    console.log("\nEscolha um número das opções a seguir\n");

    let continuarLoop = true;
    do{
        console.log("1 - Cadastrar candidato");
        console.log("2 - Iniciar Eleição");
        console.log("3 - Imprimir Candidatos");
        const opcao = await question("\nEscolha uma opção: \n")

        switch(opcao){
            case '1':
                await cadastarCandidato();
                break;
            case '2':
                if(candidatos.length > 1){
                    await iniciarEleicao();
                    continuarLoop = false
                }else{
                    console.error("\nUma eleição precisa de no minimo de dois cadidatos\n")
                }
                break;
            case '3' :
                console.log("\nOs candidatos são:\n");
                candidatos.forEach((candidato) =>{
                    console.log(`Nome: ${candidato.nome}, Número: ${candidato.numero}`)
                })
                break;
            default:
                console.error("\nOpção inválida tente novamente!!");
        }
    }while (continuarLoop)
    
    async function cadastarCandidato() {
        const numero = await question("\nDigite o numero do candidato: \n");
        if(isNaN(numero)){
            console.error("\nO candidato deve receber um número. Tente novamente\n");
            return;
        }
        const cadidatosExiste = candidatos.find((candidato) => {
            return candidato.numero === numero;
            
        });
        if(cadidatosExiste){
            console.error("\nJá existe um candidato com esse número. Por favor, tente novamente com um número diferente\n");
            return;
        }

        const nome = await question("Digite o nome do candidato:\n ");
        const novoCandidato = {nome, numero};
        candidatos.push(novoCandidato);
        votos[novoCandidato.numero] = 0;

        console.log(`\n${novoCandidato.nome} cadastrado com sucesso\n`);
    }
    async function iniciarEleicao() {
        console.log("\nEleição inicializada");
        console.log("Digite 'fim'para encerrar a eleição");

        let continuarLoop = true;
        do{
            
            const numero = await question("Digite o numero do candidato em que deseja votar: \n");
            if(numero === "fim"){
                continuarLoop = false;
                console.log("\nFinal da eleição");
                resultadoFinal();
                return;
                
            }
            if(votos[numero] === undefined){
                console.error("\nNúmero invalido. Tente novamente\n");
                return;
            }else{
                votos[numero]++;
                console.log(`Voto para o candidto com o número ${numero} confirmado`);
            }
        }while (continuarLoop);
    }
    
}
function resultadoFinal(){
    const resultado = candidatos.map((candidato) =>{
        return {nome: candidato.nome, numero: candidato.numero, votos: votos[candidato.numero]}
    });

    resultado.sort((a, b) => {
        return b.votos - a.votos
    })

    const candidatoVencedor = resultado[0];
    const totalVotos = Object.values(votos).reduce((acl, vla) => {return acl + vla}, 0);

    console.log("\nresultado da eleição\n");
    console.log(`O vencedor da eleição é: ${candidatoVencedor.nome}, com ${candidatoVencedor.votos} votos`);
    console.log(`Total de votos: ${totalVotos}`);
    console.log("Lista de candidato e votos");
    resultado.forEach((candidato) =>{
        console.log(`Nome: ${candidato.nome}, Número: ${candidato.numero}, Votos: ${candidato.votos}`);
    })
}
main();