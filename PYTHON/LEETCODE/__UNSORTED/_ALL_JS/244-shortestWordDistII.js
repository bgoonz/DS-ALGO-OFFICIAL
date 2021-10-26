/**
 * question: http://www.programcreek.com/2014/07/leetcode-shortest-word-distance-ii-java/
 *
 */

function ShortestWordDist(words) {
  this.hashMap = {};

  let map = this.hashMap;

  words.forEach(function (word, index) {
    if (word in map) {
      map[word].push(index);
    } else {
      map[word] = [index];
    }
  });
}

ShortestWordDist.prototype.shortest = function (word1, word2) {
  let list1 = this.hashMap[word1];
  let list2 = this.hashMap[word2];
  let dist = Number.MAX_VALUE;

  for (let i = 0, j = 0; i < list1.length && j < list2.length; ) {
    let index1 = list1[i];
    let index2 = list2[j];

    dist = Math.min(Math.abs(index1 - index2), dist);
    if (index1 < index2) {
      i++;
    } else {
      j++;
    }
  }

  return dist;
};

// test cases
let ws = [
  "practice",
  "makes",
  "perfect",
  "coding",
  "makes",
  "google",
  "coding",
  "apple",
  "alpha",
];
let words = new ShortestWordDist(ws);

let word1 = "practice";
let word2 = "coding";
let word3 = "apple";
console.log(words.shortest(word1, word2));
console.log(words.shortest(word2, word3));
