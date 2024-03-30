
/*
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
*/

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertEqual = function(actual, expected) {

  result = console.assert(actual === expected);
  
  if (actual !== expected) {
    result_style = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else if (actual === expected) {
    result_style = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return result_style;
};
  


console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS

console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]))); // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]))); // => true

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]))); // => true