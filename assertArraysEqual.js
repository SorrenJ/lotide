
/*
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
*/

const assertArraysEqual  = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    result_style = `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
    return result_style;
      
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result_style = `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
      return result_style;
    }
  }
  result_style = `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  return result_style;
};
  
  

    
  
  
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
  
console.log(assertArraysEqual([1, 2, 3], [3, 1, 2])); // => false
  
console.log(assertArraysEqual(['1', '2', '3'], ['1', '2', '3'])); // => true
  
console.log(assertArraysEqual(['1', '2', '3'], ['1', '2', 3])); // => false