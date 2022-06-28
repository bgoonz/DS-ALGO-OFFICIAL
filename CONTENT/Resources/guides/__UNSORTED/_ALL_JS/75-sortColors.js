/**
 * Key: move all 2s to the end, and move all 0s to the beginning.
 * Use two pointers to track start and end respectively.
 * Move 2s first.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  for (let i = 0; i <= end; i++) {
    while (nums[i] === 2 && i < end) {
      swap(nums, i, end);
      end--;
    }
    while (nums[i] === 0 && i > start) {
      swap(nums, i, start);
      start++;
    }
  }
};

let swap = function (nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};
