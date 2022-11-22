/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr, subset = [[]]) => {
  
  //base case: if the incoming array is zero, then it has found all subsets
  if (arr.length === 0) {
    return subset;
  }

  let num = arr[0];
  let newSubset = subset.slice()  //copies subsets to new variable
  
  subset.forEach(sub => {
    newSubset.push(sub.concat(num)) //takes each previous subset and combines it with the newest number
  })

  //returns the recursion. Recursive step slices off first number, and passes in current subsets.
  return subsets(arr.slice(1), newSubset);

}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
