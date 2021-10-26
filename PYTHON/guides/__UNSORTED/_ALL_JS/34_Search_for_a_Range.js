/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let leftBound = -1;
  let rightBound = -1;

  while (l <= r) {
    let mid = l + parseInt((r - l) / 2);
    console.log(mid, nums[mid]);
    if (nums[mid] === target) {
      leftBound = mid;
      r = mid - 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  l = 0;
  r = nums.length - 1;

  while (l <= r) {
    mid = l + parseInt((r - l) / 2);
    if (nums[mid] === target) {
      rightBound = mid;
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return [leftBound, rightBound];
};
