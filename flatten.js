
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
    
const flatten = function(arr1) {
  let newFlattenArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) { //detects if element is an array
      newFlattenArray.push(...arr1[i]);// adds each element of arr1[i] as individual elements to newFlattenArray
    } else {
      newFlattenArray.push(arr1[i]);
    }
  }
        
  return newFlattenArray;
};

  
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // Call eqArrays with the correct arguments
    const result_style = `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
    console.log(result_style);
    return result_style;
  } else {
    const result_style = `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
    console.log(result_style);
    return result_style;
  }
};
  
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
    
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
  
console.log(eqArrays([1, 2, 3], [3, 1, 2])); // => false
assertArraysEqual([1, 2, 3], [3, 1, 2]); // => false
  
console.log(eqArrays(['1', '2', '3'], ['1', '2', '3'])); // => true
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']); // => true
   
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3])); // => false
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]); // => false

module.exports = flatten;