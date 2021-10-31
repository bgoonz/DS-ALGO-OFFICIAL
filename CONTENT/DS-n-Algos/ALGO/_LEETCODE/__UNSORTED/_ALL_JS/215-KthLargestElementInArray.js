/**
 * Key:
 * Quick select algorithm, choose last element of the array as the pivot.
 * Move all smaller elements than the pivot to the left of the pivot,
 * move all bigger elements than the pivot to the right of the pivot,
 * repeat this process until the pivot is K
 * O(N)? worst O(N^2)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
  k = nums.length - k;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let pivot = partition(nums, start, end);
    if (k === pivot) {
      return nums[pivot];
    } else if (k < pivot) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
  }
};

let partition = function (nums, start, end) {
  let left = start;
  let right = end;
  let pivot = end;
  while (true) {
    while (left < right && nums[left] < nums[pivot]) {
      left++;
    }
    while (left < right && nums[right] >= nums[pivot]) {
      right--;
    }
    if (left === right) break;
    swap(nums, left, right);
  }
  swap(nums, right, end);
  return right;
};

let swap = function (nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};
