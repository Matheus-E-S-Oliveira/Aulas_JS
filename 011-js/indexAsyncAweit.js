//transforma em uma promise , mas não no objeto promise.
//resumindo a função tranformada não tem efeito na parte da call sctack
//ela executa como uma função sincrona executa
function getData(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            const data = {
                nome: "Ariel",
                idade: 15
            }
            resolve(data)
        }, 1000)
    });
}

function proscesseData(data){
    return new Promise((resolve) => {
        setTimeout(() =>{
            data.idade *= 2; 
            resolve(data)
        }, 1000)
    });
}

async function displayData() {
    // console.log("displayData")
    //comando await e um comando para esperar um intruçã ser executada
    //await so funciona em função async
    const data = await getData();
    console.log(data);
    const procesData = await proscesseData(data);
    console.log(procesData);
}

function main(){
    console.log("main");
}

displayData(); 
//exemplode usi de async e await pega requisção http
async function getUser(userId) {
    return await fetch(`http://localhost:3002/api/user?id=${userId}`);
}
async function getProfile(profileId) {
    return await fetch(`http://localhost:3002/api/profile?id=${profileId}`);
}
async function main() {
    const responseUser = await getUser("xl0iFime0lJZ3EA1");
    
    const user = await responseUser.json();
    console.log(user);
    const responseProfile = await getProfile(user.profileId);

    const profile = await responseProfile.json();
    console.log(profile);
}
main();