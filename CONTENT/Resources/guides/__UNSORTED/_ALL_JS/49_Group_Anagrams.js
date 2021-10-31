// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
  let hash = {};

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];

    let key = sort(str);

    hash[key] = hash[key] || [];
    hash[key].push(str);
  }

  let result = [];
  for (i in hash) {
    result.push(hash[i]);
  }

  return result;
};

let sort = function (s) {
  let arr = s.split("");

  arr.sort((a, b) => (a > b ? 1 : -1));
  return arr.join("");
};

// Use bucket sort, much faster

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
  let hash = {};
  let base = "a".charCodeAt(0);

  for (let i = 0; i < strs.length; i++) {
    let arr = Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      let code = str[j].charCodeAt(0) - base;
      arr[code]++;
    }

    let key = arr.join("");
    hash[key] = hash[key] || [];
    hash[key].push(strs[i]);
  }

  let res = [];

  for (i in hash) {
    res.push(hash[i]);
  }

  return res;
};
