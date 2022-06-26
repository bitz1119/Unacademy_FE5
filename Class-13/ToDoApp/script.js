let todoArray = [];

class ToDo{
    constructor(todo){
        this.id = todoArray.length;
        this.text = todo;
        this.isDone = false;
        this.isDeleted = false;
    }
}

function createToDo(){
    let textarea = document.getElementById("text-area");
    if(textarea.value.length !== 0){
        let newToDo = new ToDo(textarea.value);
        todoArray.push(newToDo);
        renderUI();
        // clear text area after adding todo
        textarea.value = "";
    }
    else{
        alert("Please enter something");
    }
}

function renderUI(){
    let tableBody = document.getElementById("table-body");
    // put all todoArray element in tbody
    tbodyText = "";
    for(let i = 0; i < todoArray.length;i++){
        tbodyText = tbodyText + `  <tr class="table-active ${todoArray[i].isDone == true? "table-success":""}" style="${todoArray[i].isDeleted == true ? "display:none" : ""}">
        <td>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ${todoArray[i].isDone === true ? "checked" :""} onclick="taskDone(${todoArray[i].id})"/>
            </div>
          </td>
          <td>
            ${todoArray[i].text}
          </td>
          <td>
          <button type="button" class="btn btn-danger" onclick="deleteTodo(${todoArray[i].id})">Delete</button>
          </td>
      </tr>`
    }

    tableBody.innerHTML = tbodyText;
    
}

function taskDone(id){
    todoArray[id].isDone = true;
    renderUI();
}

function deleteTodo(id){
    todoArray[id].isDeleted = true;
    renderUI();
}