// // console.log("Lorem ipsum dolor sit amet consectetur adipisicing elit.Qui, deleniti ipsam impedit accusantium fuga porro quam quas aspernatur quod nobis nihil nisi mollitia, illo ex dolorum magni! Eius, quas possimus!")


window.setTimeout(function app() {
    // put all of your JS code from the lecture here


    let todos = [];

    let input = prompt("What would you like to do?");





    while (input !== "quit") {

        if (input === "list") {
            console.log(todos);
        }
        else if (input === "new") {
            let newToDo = prompt("Enter new todo");
            todos.push(newToDo);
        }
        input = prompt("What would you like to do?");

    }

    console.log("Ok you quit the app.");


}, 500);
