/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// First try, Memory Limit Exceeded
let permuteUnique = function (nums) {
  if (nums.length === 0) return nums;
  nums.sort(function (a, b) {
    a - b;
  });
  let results = [];
  permutation(results, nums, 0);
  return results;
};

let permutation = function (results, nums, start) {
  if (start >= nums.length) {
    results.push(nums.slice());
    return;
  }

  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;
    swap(nums, i, start);
    permutation(results, nums, start + 1);
    swap(nums, i, start);
  }
};

let swap = function (nums, i, j) {
  if (i === j) return;
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

// A iterative version, accepted, 140ms, beats 100%
// same idea as permutation,
// but, sort first, then if there is number is same as the previous one, skip
// for example: nums=[1,2,2]
// step1: [1]
// step2: inserst 2 to [1], two possibilities: [2,1], [1,2]
// step3: inserst 2 to [1,2] and [2,1]? but there is a 2 in each array, so skip this number and return
let permuteUnique = function (nums) {
  if (nums.length === 0) return nums;
  nums.sort(function (a, b) {
    return a - b;
  });
  let results = [[nums[0]]];
  for (let i = 1; i < nums.length; i++) {
    let newResults = [];
    for (let m = 0; m < results.length; m++) {
      for (let j = 0; j <= i; j++) {
        let list = results[m].slice();
        list.splice(j, 0, nums[i]);
        newResults.push(list);
        if (results[m][j] === nums[i]) break;
      }
    }
    results = newResults;
  }

  return results;
};
