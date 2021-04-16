
function largestOfFour(arr) {
  var lengthlist = [];
  for (var i = 0; i < arr.length; i++) {
    lengthlist.push(Math.max.apply(Math, arr[i]));
  }
  return lengthlist;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [10, 10, 7, 1]]));