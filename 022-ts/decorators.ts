function greeting(msg: string){
    return (target: any) => {
        console.log(`${msg} - ${target}`);
    }
}
function setOs(os: string){
    return(target: any) =>{
        return class extends target{
            version = os;
        }
    }
}
//decorators e uma notação que se pode anexar a algo 
//para adionar novos recursos ou omportamentos
//exibe uma menssagem
@greeting('Hello World!')
//decorators para classes
//decorartor para setar versão so SO
@setOs("WebOS 3.0")
class LG{

}
let tvLg = new LG();
@setOs("Android TV 2.1")
class Sony{
    
}
let tvSony = new Sony();

function minSize(size: number){
    return (target: any, key: any) =>{
        let val = target[key];
        const getter = () => val;
        const setter = (value: number) =>{
            if(value < size){
                console.log("O tamanho da tela deve ser maior que 32 polegadas");
            }else{
                val = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        })

    }
}
class Panasonic{
    //decorator para verificação do tamanho da tv
    //deocrator para propiedade
    @minSize(32)
    size: number;

    constructor(size: number){
        this.size = size;
    }
}
function delay(time: number){
    return (target: any, key: string, descriptor: PropertyDescriptor)=>{
        console.log(descriptor);
        let method = descriptor.value;

        descriptor.value = function(...args: any){
            setTimeout(()=>{
                method.apply(this, args)
            },time);
        }
        return descriptor;
    }
}
//usando decorators com função
class Timer {
    //usar o mesmo deocrator pra coisas diferentes
    @delay(5000)
    showMsg(){
        console.log("Menssagem após 5 segundos!")
    }
    //imprimi a cada segundo
    @delay(500)
    newTmer(cont: number): number{
        if(cont === 0 ){
            return 0;
        }else{
            console.log("Contador  em ", cont);
            return this.newTmer(cont - 1);
        }
    }
}
let t = new Timer()
t.showMsg()
t.newTmer(5)