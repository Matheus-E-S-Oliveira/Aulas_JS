//aprendendo ler call stack
//call stack tem funcionamento parecido dom FILO
//First in Last out
function main(){
    F1();
    console.log("Função main");
}
function F1(){
    F2();
    console.log("Função F1");
}
function F2(){
    throw new Error("erro generico");
    F3();
    console.log("Função F2");
}
function F3(){
    console.log("Função F3");
}
main();