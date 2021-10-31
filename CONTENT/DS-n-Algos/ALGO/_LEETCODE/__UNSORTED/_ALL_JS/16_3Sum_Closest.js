/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function (nums, target) {
  if (nums === null || nums.length < 2) {
    return null;
  }

  if (nums.length === 3) {
    return nums.reduce(function (prev, cur) {
      return prev + cur;
    });
  }

  let result = 0;
  let closest = Infinity;

  nums.sort(function (a, b) {
    return a > b ? 1 : -1;
  });

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[j] + nums[k] + nums[i];
      let diff = sum - target;

      if (diff === 0) {
        return sum;
      }

      if (sum < target) {
        diff = target - sum;
        j++;
      } else {
        diff = sum - target;
        k--;
      }

      if (diff < closest) {
        closest = diff;
        result = sum;
      }
    }

    while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
  }

  return result;
};

//Shorter solution
let threeSumClosest = function (nums, target) {
  let closest = Number.Infinity;
  let gap = -1;

  nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];
      partialGap = Math.abs(target - sum);
      if (partialGap < gap || gap === -1) {
        gap = partialGap;
        closest = sum;
      }

      if (sum === target) {
        return target;
      } else if (sum < target) {
        low++;
      } else {
        high--;
      }
    }
  }
  return closest;
};
