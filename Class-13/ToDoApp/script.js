let todoArray = [];

class ToDo{
    constructor(todo){
        this.id = todoArray.length;
        this.text = todo;
        this.isDone = false;
    }
}

function createToDo(text){
    let newToDo = new ToDo(text);
    todoArray.push(newToDo);
}

function renderUI(){
    let tableBody = document.getElementById("table-body");
    // put all todoArray element in tbody


}

