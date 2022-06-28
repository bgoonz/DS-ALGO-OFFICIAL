// Note: This is an extension of House Robber.

// After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
// Microsoft

/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  // same as house robber I, but we cannot rob first and last house at the same time.

  function robHouses(nums) {
    let odd = 0;
    let even = 0;

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (i % 2 === 0) {
        even = Math.max(even + num, odd);
      } else {
        odd = Math.max(odd + num, even);
      }
    }

    return Math.max(even, odd);
  }

  if (nums.length <= 1) {
    return robHouses(nums);
  }

  let robHousesExceptLast = robHouses(nums.slice(0, -1));
  let robHousesExceptFirst = robHouses(nums.slice(1));
  return Math.max(robHousesExceptLast, robHousesExceptFirst);
};
