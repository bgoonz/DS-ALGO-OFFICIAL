/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  if (nums.length === 0) return 1;
  const arr = [];
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] > 0) arr[nums[i]] = nums[i];
    if (nums[i] > max) max = nums[i];
  }
  for (let i = 1; i < max; i++) {
    if (arr[i] == null) return i;
  }
  return max < 0 ? 1 : max + 1;
};

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
  const A = nums;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (A[i] > 0 && A[i] <= n && A[A[i] - 1] !== A[i]) swap(A, i, A[i] - 1);
  }

  for (let i = 0; i < n; i++) {
    if (A[i] !== i + 1) return i + 1;
  }
  return n + 1;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
