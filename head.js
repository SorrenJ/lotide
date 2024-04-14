// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

//converts anything in index 0 to a string
const head = function(actual) {
  f = actual.slice(0,1);
  first = String(f);
  return first;
};


module.exports = head;

