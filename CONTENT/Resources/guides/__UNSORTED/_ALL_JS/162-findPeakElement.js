/**
 * key. binary search, why does it work?
 * explanation: https://leetcode.com/discuss/17793/find-the-maximum-by-binary-search-recursion-and-iteration
 *
 * @param {number[]} nums
 * @return {number}
 */
let findPeakElement = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid + 1] > nums[mid]) low = mid + 1;
    else high = mid;
  }

  return high;
};
