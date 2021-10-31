/**
 * @param {string} s
 * @return {number}
 */

// not accepted!!! time exceeded!
let lengthOfLongestSubstring = function (s) {
  let visitedChars = {};
  let len = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in visitedChars) {
      len = Math.max(len, Object.size(visitedChars));
      delete visitedChars[s[i]];
    }
    visitedChars[s[i]] = i;
  }

  return Math.max(len, Object.size(visitedChars));
};

Object.size = function (obj) {
  let size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

// accepted, O(N)
let lengthOfLongestSubstring = function (s) {
  let visitedChars = {};
  let len = 0;
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in visitedChars) {
      len = Math.max(len, i - j);
      j = Math.max(j, visitedChars[s[i]] + 1);
    }
    visitedChars[s[i]] = i;
  }

  return Math.max(len, s.length - j);
};
