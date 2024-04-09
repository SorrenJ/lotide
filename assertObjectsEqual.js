
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
    console.log(result_style); 
    return result_style;
  };

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
    if (eqObjects(arr1, arr2)) { // Call eqArrays with the correct arguments
        const result_style = `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
        console.log(result_style);
        return result_style;
      } else {
        const result_style = `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
        console.log(result_style);
        return result_style;
      }
  };


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

    const obj1Keys = Object.keys(object1);
    const obj2Keys = Object.keys(object2);
  
    // if the 2 objects have the same number of keys
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
  
    for (const key of obj1Keys) {  // loop through the array of key values for the first object
  
      if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
        return false;
      } else if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
  
    return true;

};

const shirtObject = { color: "red", size: "medium" };
Object.keys(shirtObject); // => returns ["color", "size"]

//const anotherShirtObject = { size: "medium", color: "red" };
//eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
//assertEqual(eqObjects(shirtObject, anotherShirtObject), true);