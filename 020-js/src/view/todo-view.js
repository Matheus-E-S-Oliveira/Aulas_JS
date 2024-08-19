import inquirer from "inquirer";

export class TodoListView{
    async displayMenu(){
        const {option} = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                menssage: "Escolha uma opção",
                choices: [
                    "Adicionar tarefa",
                    "Listar tarefas",
                    "Marcar tarefa como concluida",
                    "Editar tarefa",
                    "Deletar tarefa",
                    "Sair"
                ]
            }
        ])
        return option;
    }

    async displayAddItem(){
        const {title, dueDate} = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "Digite o titulo da tarefa",
            },
            {
                type: "input",
                name: "dueDate",
                message: "Digite a data de vencimento da tarefa",
            }
        ])
        return {title, dueDate}
    }

    displayItens(todoList){
        todoList.forEach((tarefa)=>{
            console.log(`Titulo: ${tarefa.title} - Data: ${tarefa.dueDate} - Status: ${tarefa.status}`)
        })
    }

    async displaySelectItem(todoList){
        const{ id } = await inquirer.prompt([
            {
                type: "list",
                name: "id",
                message: "Qual tarefa você quer marcar como concluido",
                choices: todoList.map((tarefa)=>({name: tarefa.title, value: tarefa.id})),
            }
        ])
        return id
    }

    async displayEditItem(tarefa){
        const {title, dueDate} = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "Digite um novo titulo",
                default: tarefa.title,
            },
            {
                type: "input",
                name: "dueDate",
                message: "Digite uma nova dota",
                default: tarefa.dueDate
            }
        ])
        return {title, dueDate};
    }

    log(text){
        console.log(text);
    }
}
