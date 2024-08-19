"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function greeting(msg) {
    return (target) => {
        console.log(`${msg} - ${target}`);
    };
}
function setOs(os) {
    return (target) => {
        return class extends target {
            constructor() {
                super(...arguments);
                this.version = os;
            }
        };
    };
}
//decorators e uma notação que se pode anexar a algo 
//para adionar novos recursos ou omportamentos
//exibe uma menssagem
let LG = class LG {
};
LG = __decorate([
    greeting('Hello World!')
    //decorators para classes
    //decorartor para setar versão so SO
    ,
    setOs("WebOS 3.0")
], LG);
let tvLg = new LG();
let Sony = class Sony {
};
Sony = __decorate([
    setOs("Android TV 2.1")
], Sony);
let tvSony = new Sony();
function minSize(size) {
    return (target, key) => {
        let val = target[key];
        const getter = () => val;
        const setter = (value) => {
            if (value < size) {
                console.log("O tamanho da tela deve ser maior que 32 polegadas");
            }
            else {
                val = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Panasonic {
    constructor(size) {
        this.size = size;
    }
}
__decorate([
    minSize(32),
    __metadata("design:type", Number)
], Panasonic.prototype, "size", void 0);
function delay(time) {
    return (target, key, descriptor) => {
        console.log(descriptor);
        let method = descriptor.value;
        descriptor.value = function (...args) {
            setTimeout(() => {
                method.apply(this, args);
            }, time);
        };
        return descriptor;
    };
}
//usando decorators com função
class Timer {
    //usar o mesmo deocrator pra coisas diferentes
    showMsg() {
        console.log("Menssagem após 5 segundos!");
    }
    //imprimi a cada segundo
    newTmer(cont) {
        if (cont === 0) {
            return 0;
        }
        else {
            console.log("Contador  em ", cont);
            return this.newTmer(cont - 1);
        }
    }
}
__decorate([
    delay(5000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Timer.prototype, "showMsg", null);
__decorate([
    delay(500),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], Timer.prototype, "newTmer", null);
let t = new Timer();
t.showMsg();
t.newTmer(5);
//# sourceMappingURL=decorators.js.map