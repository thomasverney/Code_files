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

console.log(str);
// expected output: "012345678"
// What it does is: "var i = 0" is the initial statement. Then, we indicate the condition, which is "i < 9". So as long as i is inferior to 9, the loop will keep running. Then, the "final - expression" is i++. It's like the result.