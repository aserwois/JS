var todos = [];

window.setInterval(function() {
    var firstQuestion = prompt("What you would like to do?")
    if(firstQuestion === "list") {
        listTodos();
    } else if (firstQuestion === "new") {
        addTodo();
    }  else if (firstQuestion === "quit") {
       quitTodo();
    } else if (firstQuestion = "delete") {
        deleteTodo();
    }
}, 500)

function listTodos() {
    console.log(todos);
        todos.forEach(function(item, i) {
            console.log(i + ": " + item);
        })
}

function addTodo() {
    var addNewItem = prompt("Please write new list item");
        todos.push(addNewItem);
}

function deleteTodo() {
    var indexToDelete = prompt("Write an index which you want to delete:)")
        todos.splice(indexToDelete, 1);
}

function quitTodo() {
    return alert("Thanks for exercising!");
}