const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }


  return results;
};


const assertArraysEqual = function(actual, expected) {

  //result = console.assert(actual === expected);
  
  if (actual.length !== expected.length) {
    result_style = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    return result_style;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      result_style = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
      return result_style;
    }
  }


  result_style = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  return result_style;
 
};
  
//PASS
console.log(assertArraysEqual(letterPositions("hello").e, [1]));

//FAIL
console.log(assertArraysEqual(letterPositions("hello").h, [2]));