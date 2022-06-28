/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  let result = [];
  let results = [result];
  subsetsHelper(0, nums, result, results);
  return results;
};

let subsetsHelper = function (start, nums, result, results) {
  if (start === nums.length) {
    return;
  }

  for (let i = start; i < nums.length; i++) {
    result.push(nums[i]);
    results.push(result.slice());
    // start from next element i, not the next element of 'start'
    subsetsHelper(i + 1, nums, result, results);
    result.pop(nums[i]);
  }
};
