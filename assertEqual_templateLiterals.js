// FUNCTION IMPLEMENTATION

let result;
let result_style;

const assertEqual = function(actual, expected) {

  result = console.assert(actual === expected);

  if (actual !== expected) {
    result_style = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else if (actual === expected) {
    result_style = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return result_style;
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

