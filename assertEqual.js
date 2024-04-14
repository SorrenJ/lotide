const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
 
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

module.exports = assertEqual;