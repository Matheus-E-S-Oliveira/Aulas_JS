console.log("Olá Mundo!");
//aborta solicitação http
const controller = new AbortController();
//request
const myRequest = new Request("http://localhost:3002/api/alunos",{
    method: "GET",
    headers: {
        Accept: "application/json",
        "Accept-language": "pt-BR"
    },
    signal: controller.signal//para pode abortar
})
//declarando objeto url
const url = new URL("/api/alunos","http://localhost:3002");
console.log(url);
async function getAlunos() {
    //fazendo requisição http
    //fazendo metodo get via fetch
    //e e possivel passar o request no fetch pois ele recebe um resquest
    return await fetch("http://localhost:3002/api/alunos")
        .then((response)=>{
            // console.log(response)
            return response.json();
        }).then((data)=>{
            console.log(data);
        })
}

//fazendo metodo post via fetch
async function criarAluno(){
    const aluno = {
        nome: "Marcos",
        sobrenome: "Foscenca",
        idade: 21,
        curdo: "Direito",
        nota: [8.0, 7.5, 9.2]
    }
    await fetch("http://localhost:3002/api/alunos",{//Objeto de configuração
        method: "POST",//define tipo de metodo utilizado
        headers: {      //definindo cabeçalho (headers)
                "Content-Type": "application/json"//expecificando que um arwuivo json
        },
        body: JSON.stringify((aluno)),//passando objeto a ser enviado ao server
        signal: controller.signal //para controlar para aborta a requisição
    }).then((response)=>{
        // console.log(response);
        return response.json();
    }).then((data)=>{
        console.log(data);
        return data;
    }).catch((erro)=>{
        if(erro.name == "AbortError"){
            console.log("Fetch abortada");
        }else{
            console.log("erro desconhecido");
        }
    });
}
 //criarAluno();

//usando metodo put para editar
async function editarAluno(){
    const aluno = {
        nome: "Maria",
        sobrenome: "Foscenca",
        idade: 21,
        curdo: "Direito",
        nota: [8.0, 7.5, 9.2],
        id : "DyK3xBuv40fbUPZA"
    }


    await fetch("http://localhost:3002/api/alunos?id=DyK3xBuv40fbUPZA",{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno),
    })
        .then(response => response.json()
        ).then((data) =>{
            console.log(data);
        })
}
async function editarValorAluno(){
    const aluno = {
        nome: "Elton",
    }


    await fetch("http://localhost:3002/api/alunos?id=DyK3xBuv40fbUPZA",{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno),
    })
        .then(response => response.json()
        ).then((data) =>{
            console.log(data);
        })
}
async function urlSearchParams() {
    //fazendo requisição http
    //fazendo metodo get via fetch
    return await fetch("http://localhost:3002/api/alunos?" + new URLSearchParams({
        id : "DyK3xBuv40fbUPZA"//caso os parametro estejam muito grandes
    }))
        .then((response)=>{
            // console.log(response)
            return response.json();
        }).then((data)=>{
            console.log(data);
        })
}
//deletar usando metodo delete
async function deletarAluno() {
    return fetch("http://localhost:3002/api/alunos?" + new URLSearchParams({
        id : "DyK3xBuv40fbUPZA"
    }),{
        method: "DELETE"
    }).then((response) => response.json()).then((data)=>{
        console.log(data);
    })
    
}
// deletarAluno();

// editarAluno();
//editarValorAluno();
// urlSearchParams();
getAlunos();
//
// function main(id) {

//     fetch(`http://exemplo.com/api/alunos?id=${id}`, {
//         method: "DELETE"
//     }).then(response => response.json())
//       .then((data)=>{
//           console.log(data);
//       }).catch(erro => erro.menssage)
//         //Informe seu código
//     }
//exemplo pratico de requisição sendo abordada
async function getAlunos2() {
    //fazendo requisição http
    //fazendo metodo get via fetch
    //e e possivel passar o request no fetch pois ele recebe um resquest
    setTimeout(()=>{
        controller.abort();
    },1000);
    return await fetch(myRequest)
        .then((response)=>{
            // console.log(response)
            return response.json();
        }).then((data)=>{
            console.log(data);
        }).catch((erro)=>{
            if(erro.name == "AbortError"){
                console.log("Fetch abortada");
            }else{
                console.log("erro desconhecido");
            }
        });
}
//metodo do objeto url
//da pra pegar partes da url confome precisa
// console.log(url.host)
getAlunos2();
//fazendo interciptação
//alterando valor do fetch
//desestruturando fetch
const {fetch: originfetch} = window;
window.fetch = async function (...args) {
    console.log("fetch com argumentos", args);
    const response = await originfetch(...args);

    response
        .clone()
        .json()
        .then((data)=>{console.log("response intercipitada", data)})
        .catch(err => cpnsole.log(err));

    return {
        ok: true,
        status: 200,
        json: async()=>({
            nome:"Ariel"
        })
    }
}
fetch("http://localhost:3002/api/alunos")
    .then((response) =>{
        console.log("fetch: ", response)
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })