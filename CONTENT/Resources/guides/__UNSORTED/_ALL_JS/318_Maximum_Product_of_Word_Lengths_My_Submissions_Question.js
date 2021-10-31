// Leetcode 318
// Language: Javascript
// Problem: https://leetcode.com/problems/maximum-product-of-word-lengths/
// Author: Chihung Yu
/**
 * @param {string[]} words
 * @return {number}
 */
let maxProduct = function (words) {
  let processed = [];

  for (let i = 0; i < words.length; i++) {
    processed.push(compute(words[i]));
  }

  let result = [];
  let max = 0;

  for (i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if ((processed[i] & processed[j]) === 0) {
        let cur = words[i].length * words[j].length;

        if (cur > max) {
          max = cur;
        }
      }
    }
  }

  return max;
};

function compute(word) {
  let val = 0;
  let base = "a".charCodeAt(0);

  for (i = 0; i < word.length; i++) {
    val |= 1 << (word.charCodeAt(i) - base);
  }
  return val;
}
