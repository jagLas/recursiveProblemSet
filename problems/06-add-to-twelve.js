/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

const addToTwelve = (array) => {
  let num1 = array[0];
  let num2 = array[1];

  // base case. If num2 is undefined then only 1 number remains in the array.
  if (num2 === undefined) {
    return false;
  }

  //checks if first two numbers add to 12
  if (num1 + num2 === 12) {
    return true;
  }

  //recursion
  return addToTwelve(array.slice(1))


}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
