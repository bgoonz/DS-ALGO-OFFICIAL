// Leetcode #165
// Language: Javascript
// Problem: https://leetcode.com/problems/compare-version-numbers/
// Author: Chihung Yu
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

let comparator = function (v1, v2) {};

let compareVersion = function (version1, version2) {
  let arr1 = version1.split(".");
  let arr2 = version2.split(".");

  let index = 0;
  let len = Math.max(arr1.length, arr2.length);

  while (index < len) {
    let v1 = parseInt(arr1[index]);
    let v2 = parseInt(arr2[index]);

    if (isNaN(v1) && v2 !== 0) {
      return -1;
    }

    if (isNaN(v2) && v1 !== 0) {
      return 1;
    }

    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    }

    index++;
  }

  return 0;
};
