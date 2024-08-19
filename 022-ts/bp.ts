//var, let, const
//na delcração de variaveis priorizar o let
//conveção de delcaração de função e variaveis
//Calme Case
//let nome
//function setNome()
//classes e interfaces
//Pascal Case
//calss Pessoa
//interface IAnimal()

//any
//usa-se para quando se faz transição de um sistema js para ts
//any basicamnete anula as verificações 
//e possivel substituir o any por unknown
//e recomendado substituir any por unknown qaundo for possivel

//combinação dos overloads - Unions Types
//overloads e metodos com mesmo nome e variaveis diferentes
//combina metodos para eviat erro usando numer | string
interface Moment{
    //usando unio type
    utcOffSet(a: string | number): Moment
    //usando overloads
    /* overload
    utcOffSet(a: string):Moment
    utcOffSet(a: number): Moment */
}
let y: Moment;
function fcn(x: string | number){
    return y.utcOffSet(x);
}
