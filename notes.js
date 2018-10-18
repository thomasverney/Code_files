// Multi-line comments start with /* and end with */.

// An Expression is a set of combined values, like  these:
"John" + " " + "Doe"
5 * 10

// You can declare many variables in one statement:
var person = "John Doe", carName = "Volvo", price = 200;

// Arrays syntax uses brackets []:
var cars = ["Saab", "Volvo", "BMW"];

// ========================================================================================================================

// Objects are written within {}. They can contain pairs of names and values. In this example, the array person contains 4 pairs of names and values:
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// You can access each element in an Array by using its number. It starts with 0:
cars[0];

// ========================================================================================================================

// for loops - Syntax:
for ([initialization]; [condition]; [final - expression])
    statement

// example:
var str = "";

for (var i = 0; i < 9; i++) {
    str = str + i;
}

// for loops can include a variable that wasn't declared before. while loops can't. You have to first declare the var, then create your while loop.

console.log(str);
// expected output: "012345678"
// What it does is: "var i = 0" is the initial statement. Then, we indicate the condition, which is "i < 9". So as long as i is inferior to 9, the loop will keep running. Then, the "final - expression" is i++. It's like the result.

// creating an empty object:
var exemple = {}; //creates **a new empty object**

// Explaining functions:
https://www.youtube.com/watch?v=N8ap4k_1QEQ


// Objects:
// They are like arrays with pairs of keys and values for a given object, here a car. You can access them as below. Object.values() will return all values, while Object.keys() does the same thing for keys.
// When to Use Arrays.When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings(text).
// You should use arrays when you want the element names to be numbers.
let car = {
    name: "fiat500", weight: "850kg", color: "white", fullDesc: function () {
        return "the car is a " + this.name + " it weighs " + this.weight + " and it is " + this.color + ".";
    }
};

console.log(Object.values(car));
console.log(car.name);
console.log(car.fullDesc());

// "New" operator:
// Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
// If you already have an object with different properties for a given case, you can add a new one within this object with new.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var car1 = new Car('Eagle', 'Talon TSi', 1993);

var car2 = new Car('Peugoet', '205', 1996);



/*
Misc ideas:

- Making something that uses text from a source like Gmail and see what are the words that come the most often

- Use people's activity online to generate music. Example: use hashtags on instagram as a data source. For a given time duration, each time a photo with #cat is liked, generate a meow. Everytime a photo with #dog is liked, generate a woof. 


*/