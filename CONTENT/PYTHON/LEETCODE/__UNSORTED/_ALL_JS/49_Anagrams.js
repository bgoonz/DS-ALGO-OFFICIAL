/**
 * @param {string[]} strs
 * @return {string[]}
 */
let anagrams = function (strs) {
  let result = [];
  let hash = {};
  let keyList = {};

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let key = getKey(str);

    if (hash[key]) {
      keyList[key] = true;
    } else {
      hash[key] = [];
    }

    hash[key].push(str);
  }

  for (i in keyList) {
    result = result.concat(hash[i]);
  }

  return result;
};

let getKey = function (str) {
  let key = "";
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let val = str.charCodeAt(i) - "a".charCodeAt(0);
    arr[val] = arr[val] || 0;
    arr[val]++;
  }

  return arr.join("_");
};
