
/*
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
*/

const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // Call eqArrays with the correct arguments
    const result_style = `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
    console.log(result_style);
    
  } else {
    const result_style = `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
    console.log(result_style);
   
  }
};

module.exports = assertArraysEqual; 
