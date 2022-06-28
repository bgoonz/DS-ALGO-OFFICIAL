/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  http://fisherlei.blogspot.com/2012/12/leetcode-next-permutation.html
let nextPermutation = function (nums) {
  let vioIndex = nums.length - 1;

  // example
  // 1. 687432
  // the violation index is 1 (number 8) since it's greater than index 0 (number 6)
  // 2. 87452
  // the violation index is 3 (number 5) since it's greater than index 2 (number 4)
  while (vioIndex > 0) {
    if (nums[vioIndex - 1] < nums[vioIndex]) {
      break;
    }
    vioIndex--;
  }

  // If it's not already the maximum value i.e. 876432 in the example of 687432 the maximum is 876432
  // then swap the the 6 with 7 since 7 a just a tad bigger
  if (vioIndex > 0) {
    vioIndex--;
    let first = nums.length - 1;
    while (first > vioIndex && nums[first] <= nums[vioIndex]) {
      first--;
    }

    let temp = nums[vioIndex];
    nums[vioIndex] = nums[first];
    nums[first] = temp;

    vioIndex++;
  }

  let end = nums.length - 1;

  while (end > vioIndex) {
    temp = nums[end];
    nums[end] = nums[vioIndex];
    nums[vioIndex] = temp;

    end--;
    vioIndex++;
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function (nums) {
  let violatedIndex = nums.length - 1;

  while (violatedIndex > 0) {
    if (nums[violatedIndex] > nums[violatedIndex - 1]) {
      break;
    }
    violatedIndex--;
  }

  // max
  if (violatedIndex > 0) {
    violatedIndex--;

    let indexToSwapWith = nums.length - 1;
    while (indexToSwapWith > violatedIndex) {
      if (nums[indexToSwapWith] > nums[violatedIndex]) {
        let temp = nums[violatedIndex];
        nums[violatedIndex] = nums[indexToSwapWith];
        nums[indexToSwapWith] = temp;
        break;
      }
      indexToSwapWith--;
    }

    violatedIndex++;
  }

  let end = nums.length - 1;

  while (end > violatedIndex) {
    temp = nums[violatedIndex];
    nums[violatedIndex] = nums[end];
    nums[end] = temp;
    end--;
    violatedIndex++;
  }
};
