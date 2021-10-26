// Find the contiguous subarray within an array (containing at least one number) which has the largest product.

// For example, given the array [2,3,-2,4],
// the contiguous subarray [2,3] has the largest product = 6.

// Hide Company Tags LinkedIn
// Hide Tags Array Dynamic Programming
// Show Similar Problems

// Leetcode #152
// Language: Javascript
// Problem: https://leetcode.com/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
// reference: http://www.programcreek.com/2014/03/leetcode-maximum-product-subarray-java/
let maxProduct = function (nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  let max = nums[0];
  let min = max;
  let ans = max;

  for (let i = 1; i < nums.length; i++) {
    let tmax = nums[i] * max;
    let tmin = nums[i] * min;

    max = Math.max(Math.max(tmax, nums[i]), tmin);
    min = Math.min(Math.min(tmax, nums[i]), tmin);
    ans = Math.max(ans, max);
  }

  return ans;
};
