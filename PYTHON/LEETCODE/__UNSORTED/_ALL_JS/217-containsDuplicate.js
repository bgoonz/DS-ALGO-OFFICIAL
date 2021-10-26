/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
  let appears = {};
  let containsDuplicate = false;
  for (let i = 0; i < nums.length; i++) {
    if (appears[nums[i]]) {
      appears[nums[i]] += 1;
      containsDuplicate = true;
      break;
    } else {
      appears[nums[i]] = 1;
    }
  }

  return containsDuplicate;
};
