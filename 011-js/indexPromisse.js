// metodo fetch serve para fazer requisições http
function getUser(){
    return new Promise((resolve, reject) =>{
        //fetch não precisa de uma promisse , pois ele ja tem uma incluida nele
        fetch("http://localhost:3002/api/user")//fetch tem uma promise
        .then((response) =>{
            //como se trata de uma requisição http deve converte para JSON
            resolve(response.json());
        }).catch(() =>{
            reject("erro inesperado");
        })
    })
}
getUser().then((data) =>{
    console.log(data);
})
//fetch não precisa de uma promisse , pois ele ja tem uma incluida nele
fetch("http://localhost:3002/api/user")//fetch tem uma promise
.then((response) =>{
    //como se trata de uma requisição http deve converte para JSON
    return response.json();
}).then((data) =>{
    console.log(data);
}).catch((erro) =>{
    console.log("erro inesperado");
})
//promise com metodos statico
//declarando promise
const myPromise = Promise.resolve(77);
const newPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(500);
    }, 1000);
})
//race recebe uma lista de promisse
//race recebe uma lista de promise e captura com o then a primeira promise que foi resolvida
Promise.race([myPromise, newPromise])
    .then((data) => {
        console.log(data);
    });
//recebe uma lista de promise e so entra no then quando todas promises forem resolvidas
Promise.all([myPromise, newPromise])
    .then((promises) =>{
        console.log(promises);//retorna um alista com resultado das promises
    })
// exemplo de como as pessoa utlizam geralmente as promises
// async function resolvePromises(){
//     const result = Promise.all([myPromise, newPromise])
// }

//buscando se livro existe pelo titulo
function buscarLivro(titulo) {
    const livros = [
        {
            titulo: "Introdução ao JavaScript",
            autor: "João Silva",
            editora: "Editora X",
            descricao: "Este livro é um guia introdutório..."
        }, {
            titulo: "Desenvolvimento Web com Node.js",
            autor: "Maria Oliveira",
            editora: "Editora Y",
            descricao: "Este livro é um guia prático para..."
        },
    ];


    return new Promise((resolve, reject) => {
        if (titulo) {
            const livrosFiltrado = livros.filter((livro) => livro.titulo === titulo);
            resolve(livrosFiltrado.length ? livrosFiltrado : "nenhum livro encontrado");
        } else {
            reject("nenhum livro encontrado");
        }
    });

}

function main(nomeLivro) {
    buscarLivro(nomeLivro)
        .then((livro) => {
            console.log(livro);
        })
        .catch((error) => {
            console.log(error);
        });
}
//buscando cep se existe
function getData() {
    return Promise.resolve([
        {
            cep: '01310-100',
            logradouro: 'Avenida Paulista',
            bairro: 'Bela Vista'
        },
        {
            cep: '05420-001',
            logradouro: 'Rua Oscar Freire',
            bairro: 'Pinheiros'
        },
        {
            cep: '08060-000',
            logradouro: 'Rua Serra de Jairé',
            bairro: 'Jardim Pedro José Nunes'
        }
    ]);
}

function filterData(enderecos, cep) {
    return Promise.resolve(enderecos.find((endereco) => endereco.cep === cep));
}

async function main(cep) {
    try {
        const data = await getData();
        const endereco = await filterData(data, cep);
        console.log(endereco);
    } catch (error) {
        console.log(error.message);
    }
}