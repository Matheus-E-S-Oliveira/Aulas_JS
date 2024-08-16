import { get } from "http";

export class TarefaModel{
    #title;
    #dueDate;
    #status;
    #id;

    constructor(title, dueDate){
        this.#title = title;
        this.#dueDate = dueDate;
        this.#status = "peding";
        this.#id = Date.now();
    }

    get title() {
        return this.#title;
    }
    set title(value){
        this.#title = value;
    }
    get dueDate(){
        return this.#dueDate;
    }
    set dueDate(value){
        this.#dueDate = value;
    }
    get status(){
        return this.#status;
    }
    set status(value){
        this.#status = value;
    }
    get id(){
        return this.#id;
    }
    toJson(){
        return{
            title: this.#title,
            dueDate: this.#dueDate
        }
    }
}

export class TodoListModel{
    #BASE_URL = "https://alunos.treinaweb.com.br/tw-todos/api/v1";
    todoList= []
    constructor(){ };

    add(tarefa){
        fetch(`${this.#BASE_URL}/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: tarefa.toJson(),
        })
        this.todoList.push(tarefa);
    }
    getAll(){
        return this.todoList;
    }
    get(id){
        return this.todoList.find(tarefa => tarefa.id === id)
    }
    update(id,data){
        const tarefa = this.get(id);
        Object.assign(tarefa, data);
    }
    delete(id){
    this.todoList = this.todoList.filter(tarefa => tarefa.id !== id)
    }
}