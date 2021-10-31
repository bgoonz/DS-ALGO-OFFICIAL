// Leetcode 12
// Language: Javascript
// Problem: https://leetcode.com/problems/integer-to-roman/
// Author: Chihung Yu
/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function (num) {
  let dict = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";

  for (let i = 0; i < val.length; i++) {
    let v = val[i];

    if (num >= v) {
      let count = parseInt(num / v);
      num %= v;

      for (let j = 0; j < count; j++) {
        result = result + dict[i];
      }
    }
  }

  return result;
};
