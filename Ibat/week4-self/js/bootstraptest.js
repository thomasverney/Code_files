function demofunc() {

    var items = ["item1", "item2", "item3", "item4"]

    console.log(items);


    var e = document.getElementById("listitems");

    var countItems = items.length;


    var htmlString = []
    htmlString.push("<div class='row'>








    
        < div class= 'col-md-12' id = 'row_4' >
        <ul class='list-group'>")
    for (var i = 0; i < countItems; i++) {

        if (i == 2) {
            htmlString.push("<li class='favouriteItem'>");
            htmlString.push(items[i]);
            htmlString.push("</li>");
        } else {


            htmlString.push("<li>");
            htmlString.push(items[i]);
            htmlString.push("</li>");
            console.log(htmlString)

        }
    }
    htmlString.push("</div></div>");
    console.log(htmlString)
    e.innerHTML = htmlString.join(" ");


}