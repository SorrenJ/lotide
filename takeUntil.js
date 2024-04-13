const takeUntil = function(array, callback) {
    let output = [];

    for (const item of array) {
  
      const keepGoing = !callback(item); // if stopping condition has not been met
  
      if (keepGoing) { // if not truthy push current item to new array
        output.push(item);
      } else {
        return output;
      }
  
    }
  
    return output;
    }

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
      
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


console.log(eqArrays(results1, [1, 2, 5, 7, 2])); // => should PASS
assertArraysEqual(results1, [1, 2, 5, 7, 2]); // => should PASS

console.log(eqArrays(results2, [ "I've", 'been', 'to', 'Hollywood'])); // => should PASS
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood']); // => should PASS