/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
let findMissingRanges = function (nums, lower, upper) {
  let missing = [];
  if (nums.length === 0) {
    missing.push(getRange(lower, upper));
    return missing;
  }

  // Only need to search range between lower and upper
  let next = lower;
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];

    if (val < next) {
      continue;
    } else if (val === next) {
      next++;
      continue;
    }
    // val > next
    missing.push(getRange(next, val - 1));
    next = val + 1;
  }

  if (next <= upper) {
    missing.push(getRange(next, upper));
  }

  return missing;
};

function getRange(lower, upper) {
  return upper === lower ? `${lower}` : `${lower}->${upper}`;
}
