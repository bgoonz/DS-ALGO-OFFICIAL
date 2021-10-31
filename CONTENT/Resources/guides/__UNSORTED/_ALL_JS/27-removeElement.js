/**
 * Key: same solution as 26?
 * Two pointers
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[start] = nums[i];
      start++;
    }
  }

  return start;
};
