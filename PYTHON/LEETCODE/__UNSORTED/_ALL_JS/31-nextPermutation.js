/**
 * search from right to left, find the first number smaller than it's next. (nums[i] < nums[i+1])
 * let's say the index is p;
 * have a second scan from right to left, find the first number bigger than nums[p], say the index is q,
 * swap element at p and q, then reverse all elements from p+1 to the last element of nums.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function (nums) {
  if (!nums || nums.length === 1) return;
  let p = nums.length - 1;
  let q = nums.length - 1;

  for (let i = p - 1; i >= 0; i--) {
    if (nums[i + 1] > nums[i]) {
      p = i;
      break;
    }
    p--;
  }

  for (let i = q; i > p; i--) {
    if (nums[i] > nums[p]) {
      let tmp = nums[p];
      nums[p] = nums[i];
      nums[i] = tmp;
      break;
    }
    q--;
  }

  if (p === 0 && q === 0) {
    reverse(nums, p);
    return;
  }

  reverse(nums, p + 1);
};

let reverse = function (nums, i) {
  let j = nums.length - 1;
  while (i < j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
    i++;
    j--;
  }
};
