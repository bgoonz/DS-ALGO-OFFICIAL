/**
 * Use the idea of House Robber I, find the maxAmount twice.
 * first to find the max amount from 0 to length - 2,
 * second to find the max amount from 1 to length - 1,
 * doing this because the last house and first house are connected, they can't both
 * be robbed. Finally find the max value from first and second.
 *
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  return Math.max(
    robSingle(nums, 0, nums.length - 2),
    robSingle(nums, 1, nums.length - 1)
  );
};

let robSingle = function (nums, start, end) {
  let toRob = 0;
  let notRob = 0;

  for (let i = start; i <= end; i++) {
    let tmp = toRob;
    toRob = notRob + nums[i];
    notRob = Math.max(notRob, tmp);
  }

  return Math.max(toRob, notRob);
};
