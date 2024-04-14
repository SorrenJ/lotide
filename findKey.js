const findKey = (obj, callback) => {
    for (const keys in obj) {
      innerObj = obj[keys]; // access the inner objects 
      if (callback(innerObj)) {
        return keys;
      }
    }
  
    return undefined;
  };
  
// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
};
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

//inputs
const result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2); // => "noma"

const expectedResult = "noma";
assertEqual(result, expectedResult);

module.exports = findKey;