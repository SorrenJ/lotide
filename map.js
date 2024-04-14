const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];



const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
      }
  
    return results;
  };



const results1 = map(words, word => word[0]); 
console.log(results1);


//Test cases
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, ['s', 'c', 't', 'm', 't']);