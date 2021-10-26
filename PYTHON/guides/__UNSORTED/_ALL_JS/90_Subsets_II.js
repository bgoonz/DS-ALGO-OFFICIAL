// provide many different solutions
// reference: http://bangbingsyb.blogspot.com/2014/11/leetcode-subsets-i-ii.html

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let subsetsWithDup = function (nums) {
  nums.sort(function (a, b) {
    return a > b;
  });
  let result = [[]];
  let current = [];
  generate(nums, 0, current, result);
  return result;
};

let generate = function (nums, index, current, result) {
  for (let i = index; i < nums.length; i++) {
    let num = nums[i];

    current.push(num);
    result.push(current.slice());

    // process first since it will give us the correct result
    generate(nums, i + 1, current, result);
    current.pop();

    // avoid duplicate using this step since we have already generate what we want from line 23
    while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      i++;
    }
  }
};
