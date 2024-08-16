import { TodoListModel, TarefaModel } from "../model/todo-model.js"
import { TodoListView } from "../view/todo-view.js"

export class TodoListController{
    // view = new TodoListView
    // todoListModel = new TodoListModel
    constructor(todoListModel, view){
        this.todoListModel = todoListModel
        this.view = view
    }

    async addItem(){
        const {title, dueDate} = await this.view.displayAddItem()
        const tarefa = new TarefaModel(title, dueDate);
        this.todoListModel.add(tarefa)
        this.view.log(`\nTarefa "${title}" adicionado\n`)
    }

    listarTarefa(){
        const todoList = this.todoListModel.getAll();
        this.view.displayItens(todoList);
    }

    async completarTarefa(){
        const todoList = this.todoListModel.getAll();
        if(!todoList.length){
            this.view.log("\nNenhuma tarefa encontrada\n");
            return;
        }   
        const id = await this.view.displaySelectItem(todoList);
        const tarefa = this.todoListModel.get(id);
        tarefa.status = "done";
        this.view.log(`\nTarefa "${tarefa.title}" marcado como concluido\n`)
    }

    async editarTarefa(){
        const todoList = this.todoListModel.getAll();
        if(!todoList.length){
            this.view.log("\nNenhuma tarefa encontrada\n");
            return;
        }   
        const id = await this.view.displaySelectItem(todoList);
        const tarefa = this.todoListModel.get(id);
        const {title, dueDate} = await this.view.displayEditItem(tarefa);
        this.todoListModel.update(id,{title, dueDate});
    }
    async deletarTarefa(){
        const todoList = this.todoListModel.getAll();
        if(!todoList.length){
            this.view.log("\nNenhuma tarefa encontrada\n");
            return;
        }   
        const id = await this.view.displaySelectItem(todoList);
        this.todoListModel.delete(id);
        this.view.log(`\nTarefa deletada com sucesso\n`)
    }
}