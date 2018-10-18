console.log("Date and time Demos");



// button to click and it appears on screen

function displayDate() {


    var now = new Date();
    console.log("time is %s", now)

    var yy = now.getFullYear();
    console.log("Year is %s", yy)
    var e = document.getElementById("paragraph");
    e.innerHTML = now + ". Year is " + now.getFullYear();

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
    var mt = now.getMonth();
    console.log("Month is %d [%s]", mt, months[mt])

    e.innerHTML += "<p> The Month # is " + mt + " [ " +months[mt] + " ] " + "</p>"


}