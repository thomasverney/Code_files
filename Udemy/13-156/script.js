console.log("Hey");

let todos = ["Buy New Turtle", "Get TP", "Buy dumplings"];

let input = prompt("What do you want do?");

while (input !== "quit") {


    if (input === "list") {
        listTodos();

    } else if (input === "new") {
        newTodo();

    } else if (input === "delete") {
        removeTodo();
        
    }
    input = prompt("What do you want do?");
}

console.log("OK, you quit the app. Bye!");

function listTodos() {
    console.log("**********")
    todos.forEach(function (e, i) {
        console.log(i + ": " + e);
    });
    console.log("**********")
}

function newTodo() {
    var newTodo = prompt("Enter new Todo");
    todos.push(newTodo);
    console.log("Added Todo");
}

function removeTodo() {
    let removeTodo = prompt("Enter the number")
    todos.splice(removeTodo, 1);
    console.log("Removed Todo");
}