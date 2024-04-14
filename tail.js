// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

// Returns everything except the first element of the array
const tail = function(actual) {
  return actual.slice(1);
};


module.exports = tail;

