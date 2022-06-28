/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*/

function intersect(arr1, arr2) {
  let commonEles = [];

  for (let ele of arr1) {
    if (arr2.indexOf(ele) > -1) {
      commonEles.push(ele);
    }
  }

  return commonEles;
}

module.exports = intersect;
