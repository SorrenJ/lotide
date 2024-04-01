
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
     
const without = function(w,itemsToRemove) {
  let itemsToKeep = [];
  for (let i = 0; i < w.length; i++) {
    if (!itemsToRemove.includes(w[i])) {
      itemsToKeep.push(w[i]);
    }                                      
  }
      
  return itemsToKeep;
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
  
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
 
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

console.log(without([1, 2, 3], [])); 
console.log(without(["1", "2", "3"], [""])); 


console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
  
console.log(eqArrays([1, 2, 3], [3, 1, 2])); // => false
assertArraysEqual([1, 2, 3], [3, 1, 2]); // => false
  
console.log(eqArrays(['1', '2', '3'], ['1', '2', '3'])); // => true
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']); // => true
   
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3])); // => false
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]); // => false