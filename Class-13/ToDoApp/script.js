let todoArray = [];

class ToDo{
    constructor(todo){
        this.id = todoArray.length;
        this.text = todo;
        this.isDone = false;
    }
}

function createToDo(){
    let textarea = document.getElementById("text-area");
    if(textarea.value.length !== 0){
        let newToDo = new ToDo(textarea.value);
        todoArray.push(newToDo);
        renderUI();
        textarea.value = "";
    }
    else{
        alert("Please enter something");
    }
}

function renderUI(){
    let tableBody = document.getElementById("table-body");
    // put all todoArray element in tbody
    tbody = "";
    for(let i = 0; i < todoArray.length;i++){
        tbody += `  <tr class="table-active">
        <td>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ${todoArray[i].isDone === true ? "checked" :""} />
            </div>
          </td>
          <td>
            ${todoArray[i].text}
          </td>
      </tr>`
    }

    tableBody.innerHTML = tbody;

}

