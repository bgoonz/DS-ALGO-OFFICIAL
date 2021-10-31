/**
 * @param {number[]} nums
 * @return {number[]}
 */
let singleNumber = function (nums) {
  let appears = {};
  for (let i = 0; i < nums.length; i++) {
    if (appears[nums[i]]) {
      delete appears[nums[i]];
    } else {
      appears[nums[i]] = 1;
    }
  }

  let arr = [];
  for (let key in appears) {
    arr.push(parseInt(key));
  }
  return arr;
};
