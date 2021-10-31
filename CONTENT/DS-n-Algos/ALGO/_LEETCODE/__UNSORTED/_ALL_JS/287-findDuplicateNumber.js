/**
 * Solution: Binary search [1, n-1]; find the mid number, count how many numbers
 * are less than or equal to mid, if the count is more than mid, then the duplicates
 * must exist in [1, mid], otherwise [mid+1, hi].
 * e.g. [1,10], mid = 5,if the count of number that is <= 5 in nums (the array), then
 * the duplicate number must be in [1,5] .... continue this binary search in this half.
 *
 * @param {number[]} nums
 * @return {number}
 */
let findDuplicate = function (nums) {
  let n = nums.length;
  let lo = 1;
  let hi = n - 1;

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i] <= mid) {
        count++;
      }
    }
    if (count <= mid) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return lo;
};
