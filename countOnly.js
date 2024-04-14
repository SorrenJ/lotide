// FUNCTION IMPLEMENTATION

//let result;
let result_style;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];



// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //itemsToCount = result1;


  allItems.forEach(function(name) {
    if (itemsToCount[name]) {
      if (results[name]) {
        results[name] += 1;
      } else {
        results[name] = 1;
      }
    }
  });
  
  console.log(results);


  return results;
};


const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});




const assertEqual = function(actual, expected) {

  result = console.assert(actual === expected);

  if (actual !== expected) {
    result_style = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else if (actual === expected) {
    result_style = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return result_style;
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);



console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

module.exports = countOnly;
