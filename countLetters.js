// FUNCTION IMPLEMENTATION

//let result;
let result_style;

function countLetters(letters) {
  const letterCounts = {};

  for (const letter of letters) {
    if (letter !== ' ') { // Check if the letter is not a space
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }

  return letterCounts;
}

const assertEqual = function(actual, expected) {

  //result = console.assert(actual === expected);

  if (actual !== expected) {
    result_style = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  } else if (actual === expected) {
    result_style = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  return result_style;
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");


console.log(countLetters("lighthouse in the house"));
let result = countLetters("lighthouse in the house");
console.log(assertEqual(result['l'], 1));
console.log(assertEqual(result['i'], 2));

console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));

