// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
// "code" -> False, "aab" -> True, "carerac" -> True.

/**
 * @param {string} s
 * @return {boolean}
 */
let canPermutePalindrome = function (s) {
  let countMap = {};

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    countMap[c] = countMap[c] || 0;
    countMap[c]++;
  }
  let oddCount = 0;

  for (i in countMap) {
    if (countMap[i] % 2 === 1) {
      oddCount++;
    }
  }

  return oddCount < 2;
};

// Solution (2) that assume it's ascii 256 chars only

let canPermutePalindrome = function (s) {
  // assume that s is only contact 256 english letters
  let letters = Array(256).fill(0);
  let odd = 0;
  for (let i = 0; i < s.length; i++) {
    let letterIndex = s[i].charCodeAt(0);
    odd += (++letters[letterIndex] & 1) === 1 ? 1 : -1;
  }
  return odd < 2;
};
