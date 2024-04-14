//let result;
let result_style;


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
  
 
// finds the genre (key) of the show (val)
const findKeyByValue = function(genreObj, show) {
  for (let genre in genreObj) { // loops through the genre object
    if (genreObj[genre] === show) {
      return genre;
    }
  }
  return undefined;
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




// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

module.exports = findKeyByValue;