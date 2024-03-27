// FUNCTION IMPLEMENTATION

let result;
let result_style;

//converts anything in index 0 to a string
const head = function(actual) {
  f = actual.slice(0,1);
  first = String(f);
  return first;
};

//not datatype sensitive
const assertEqual = function(first, expected) {
  if (first != expected) {
    result_style = `🛑🛑🛑 Assertion Failed: ${first} != ${expected}`;
  } else if (first == expected) {
    result_style = `✅✅✅ Assertion Passed: ${first} == ${expected}`;
  }
  return result_style;
};

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
