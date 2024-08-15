//para promisses de nivel superio
//elas so funciona em modulos
const data = await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Promisse resolvida")
    },2000);
})
console.log(data);