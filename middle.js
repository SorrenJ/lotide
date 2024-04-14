
const middle = function(arr) {
  if (arr.length < 3) {
    return []; // Return undefined if the array is empty
  }
  const middleIndex = Math.floor(arr.length / 2); // Search for the mid value by length
  if (arr.length % 2 === 0) { // If even then return the two middle elements (element to the left of mid, and math.floor calculation of mid)
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};

  
module.exports = middle; 
