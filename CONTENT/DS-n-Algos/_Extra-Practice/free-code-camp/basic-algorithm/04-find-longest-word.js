
function findLongestWord(str) {
  var arr = str.split(' ');
  var lengthlist = [];
  for (var i=0; i < arr.length; i++) {
    lengthlist.push((arr[i].split('').length));
  } return Math.max.apply(Math, lengthlist);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));