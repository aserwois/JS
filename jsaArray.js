var todos = [];

window.setInterval(function() {
    var firstQuestion = prompt("What you would like to do?")
    if(firstQuestion === "list") {
        console.log(todos);
    } else if (firstQuestion === "new") {
        var addNewItem = prompt("Please write new list item");
        todos.push(addNewItem);
    }  else if (firstQuestion === "quit") {
       return alert("Thanks for exercising!");
    }
}, 500)
