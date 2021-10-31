/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  let results = [];

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      results.push(left + 1, right + 1);
      break;
    } else if (numbers[left] + numbers[right] < target) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return results;
};
