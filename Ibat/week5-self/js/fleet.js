let fleet = [
    {"mf": "Ford", "model": { "colour": "Red", "engine": "2.0", "mf": "Ford" }},
    {"mf": "Fiat", "model": { "colour": "Green", "engine": "2.1", "mf": "Nissan" }},
    {"mf": "Nissan", "model": { "colour": "Blue", "engine": "2.2", "mf": "Fiat" }},
]


function renderPage() {
renderList()
}
function renderList() {

    let carSelectObject = document.getElementById("carListing");
    carSelectObject.length = 0;

    for (let i = 0; i < fleet.length; i++) {
        let optionText = fleet[i].mf;
        let optionID = i
        carSelectObject[i] = new Option(optionText, optionID);
        
    }


}
