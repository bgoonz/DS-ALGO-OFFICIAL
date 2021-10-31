/**
 * Key: backtracking, similar to subsets
 * Only save combinations with length k
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let combinationSum3 = function (k, n) {
  let nums = [];
  for (let i = 1; i <= 9; i++) nums[i] = i;
  let result = [];
  let results = [];
  helper(0, k, n, nums, result, results);
  return results;
};

let helper = function (start, k, n, nums, result, results) {
  if (n === 0 && k === 0) {
    results.push(result.slice());
    return results;
  }

  for (let i = start; i < nums.length; i++) {
    if (n < 0) break;
    result.push(nums[i]);
    helper(i + 1, k - 1, n - nums[i], nums, result, results);
    result.pop(nums[i]);
  }
};
