// console.log("test");

// function listDwarves() {
//     var dwarves = ["Sleepy", "Bashful", "Happy", "Doc"];

//     console.log(dwarves);

//     var e = document.getElementById("messagePanel");

//     var countItems = dwarves.length;

//     var htmlString = "<ol>";
//     for(var i = 0; i < countItems; i++) {
//         htmlString += "<li>";
//         htmlString += dwarves[i];
//         htmlString += "</li>";
//     }
//     htmlString += "</ol>";
//     e.innerHTML = htmlString;


// }


function renderPage() {
    listDwarves()
    listRainbowColours();
}

function listDwarves() {
    var dwarves = ["Sleepy", "Bashful", "Happy", "Doc"];

    console.log(dwarves);


    var e = document.getElementById("messagePanel");

    var countItems = dwarves.length;

    var htmlString = "<ol>";
    for (var i = 0; i < countItems; i++) {



        htmlString += "<li>";
        htmlString += dwarves[i];
        htmlString += "</li>";
    }
    htmlString += "</ol>";
    e.innerHTML = htmlString;

}

function listRainbowColours() {
    var colours = ["Red", "Yellow", "Orange", "Green"];

    console.log(colours);


    var e = document.getElementById("listOfRainbowColours");

    var countItems = colours.length;


    var htmlString = []
    htmlString.push("<ol>")
    for (var i = 0; i < countItems; i++) {

        if (i == 2) {
            htmlString.push("<li class='favouriteItem'>");
            htmlString.push(colours[i]);
            htmlString.push("</li>");
        } else {


            htmlString.push("<li>");
            htmlString.push(colours[i]);
            htmlString.push("</li>");
            console.log(htmlString)
        
    }
}
htmlString.push("</ol>");
console.log(htmlString)
e.innerHTML = htmlString.join(" ");


}