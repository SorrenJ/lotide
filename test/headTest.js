const head = require("../head");
const assertEqual = require("../assertEqual");
// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));

console.log("Arrays with 3 elements for numbers and string");
console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log("///////////////////////////////////////////////");
console.log("Arrays with 3 elements for unmatching numbers and string");
console.log(assertEqual(head([69, 6, 7]), 5));
console.log(assertEqual(head(["Bonjour", "Lighthouse", "Labs"]), "Hello"));
console.log("///////////////////////////////////////////////");
console.log("Arrays with no elemnts numbers and string");
console.log(assertEqual(head([]), 5));
console.log(assertEqual(head([]), "Hello"));
console.log("///////////////////////////////////////////////");
console.log("Arrays with single elemnts numbers and string");
console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head(["Bonjour"]), "Hello"));
console.log("///////////////////////////////////////////////");
console.log("No head numbers and string");
console.log(assertEqual(5, 5));
console.log(assertEqual("Bonjour", "Hello"));
