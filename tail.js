// FUNCTION IMPLEMENTATION
let result_style;

// Returns everything except the first element of the array
const tail = function(actual) {
  return actual.slice(1);
};

// Not datatype sensitive
const assertEqual = function(first, expected) {
  if (first !== expected) {
    result_style = `🛑🛑🛑 Assertion Failed: ${first} != ${expected}`;
  } else if (first === expected) {
    result_style = `✅✅✅ Assertion Passed: ${first} == ${expected}`;
  }
  return result_style;
};

// TEST CODE
const original = ["Hello", "Lighthouse", "Labs"];
console.log(`Original: ${original}`);
const result = tail(original);
console.log(`After using tail: ${result}`); // Should log ["Lighthouse", "Labs"]
console.log(`////////////////////////////////////////`);
console.log(assertEqual(result.length, 2)); // Ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // Ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // Ensure second element is "Labs"

console.log(`////////////////////////////////////////`);
// Check if original array is not modified
console.log(`CHECKING FOR UNMODIFICATIONS TO ARRAY`);
console.log(assertEqual(original.length, 3));
console.log(`////////////////////////////////////////`);
console.log(`INCORRECT CASES`);
console.log(assertEqual(result.length, 4)); // Ensure we get back two elements
console.log(assertEqual(result[0], "L")); // Ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Sorren")); // Ensure second element is "Labs"