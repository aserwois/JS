var todos = [];

window.setInterval(function() {
    var firstQuestion = prompt("What you would like to do?")
    if(firstQuestion === "list") {
        console.log(todos);
        todos.forEach(function(item, i) {
            console.log(i + ": " + item);
        })
    } else if (firstQuestion === "new") {
        var addNewItem = prompt("Please write new list item");
        todos.push(addNewItem);
    }  else if (firstQuestion === "quit") {
       return alert("Thanks for exercising!");
    } else if (firstQuestion = "delete") {
        var indexToDelete = prompt("Write an index which you want to delete:)")
        todos.splice(indexToDelete, 1);
    }
}, 500)
