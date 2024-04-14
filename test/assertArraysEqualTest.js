const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual"); 


console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

console.log(eqArrays([1, 2, 3], [3, 1, 2])); // => false
assertArraysEqual([1, 2, 3], [3, 1, 2]); // => false

console.log(eqArrays(['1', '2', '3'], ['1', '2', '3'])); // => true
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']); // => true
 
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3])); // => false
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]); // => false