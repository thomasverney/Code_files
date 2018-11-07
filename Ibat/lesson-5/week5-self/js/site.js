let fleet = [
    { "colour": "Red", "engine": "2.0", "mf": "Ford" },
    { "colour": "Green", "engine": "2.1", "mf": "Nissan" },
    { "colour": "Blue", "engine": "2.2", "mf": "Fiat" }
]


function listCarsFunc() {

    console.log("hello");


    let getCarMf = document.getElementById("ulCars");
    let htmlList = "<ul>";

    for (let i = 0; i < fleet.length; i++) {
        htmlList += "<li>";
        htmlList += fleet[i].mf;
        htmlList += "</li>";
    }

    htmlList += "</ul>";
    getCarMf.innerHTML = htmlList;

}



let currentStep = 0;

function loadNextCar() {

    let currentCar = fleet[currentStep];

    console.log("step is %d", currentStep);

    currentStep = currentStep > 1 ? 0 : currentStep + 1;

    console.log("Step is now %d", currentStep)
    
    let mf = document.getElementById("carMf");
    mf.innerHTML = currentCar.mf;

    let colour = document.getElementById("carColour");
    colour.innerHTML = currentCar.colour;

    let engine = document.getElementById("carEngine");
    engine.innerHTML = currentCar.engine;
}

function renderPage() {

    let car1 = {};
    car1.colour="Red";
    car1.engine="2.0";
    car1.mf="Ford";

    console.log(car1)

    let mf = document.getElementById("carMf");
    mf.innerHTML = car1.mf;

    let colour = document.getElementById("carColour");
    colour.innerHTML = car1.colour;

    let engine = document.getElementById("carEngine");
    engine.innerHTML = car1.engine;
}

