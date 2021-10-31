/**
 * key: sort each string in strs. If two strings are anagram to each other, then
 * after sorting, theses two strings are same. Use a map to track the same strings,
 * the string itself becomes the key, the value is the array of the anagram strings.
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let strCopy = strs[i].split("");
    strCopy.sort(strCompare);
    if (strCopy.join("") in map) {
      map[strCopy.join("")].push(strs[i]);
    } else {
      map[strCopy.join("")] = [strs[i]];
    }
  }

  let result = [];
  for (let key in map) {
    result.push(map[key].sort(strCompare));
  }

  return result;
};

let strCompare = function (a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
};
