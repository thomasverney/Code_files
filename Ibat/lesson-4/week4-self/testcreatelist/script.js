console.log("test");

function renderPage() {
    listHellos();
}


let hellos = ["Hola", "Salut", "Ciao", "Hello"];

function listHellos() {

    console.log(hellos);

    let getlistdiv = document.getElementById("listdiv");

    let htmlString = "<ul>";

    for (let i = 0; i < hellos.length; i++) {
        htmlString += "<li>";
        htmlString += hellos[i];
        htmlString += "</li>";
    }

    htmlString += "</ul>";

    getlistdiv.innerHTML = htmlString;


}