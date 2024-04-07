
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
    
const middle = function(arr) {
  if (arr.length < 3) {
    return []; // Return undefined if the array is empty
  }
  const middleIndex = Math.floor(arr.length / 2); // Search for the mid value by length
  if (arr.length % 2 === 0) { // If even then return the two middle elements (element to the left of mid, and math.floor calculation of mid)
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
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
  
console.log(middle([1]));
console.log(middle([1, 2]));

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));


console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
  
console.log(eqArrays([1, 2, 3], [3, 1, 2])); // => false
assertArraysEqual([1, 2, 3], [3, 1, 2]); // => false
  
console.log(eqArrays(['1', '2', '3'], ['1', '2', '3'])); // => true
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']); // => true
   
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3])); // => false
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]); // => false