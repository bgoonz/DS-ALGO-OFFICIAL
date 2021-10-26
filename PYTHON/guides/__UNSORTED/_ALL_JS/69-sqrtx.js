/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
  if (x === 0) return x;
  let left = 0;
  let right = x;
  let mid = Math.floor(x / 2);
  while (left <= right) {
    let divideX = Math.floor(x / mid);
    // instead of using mid * mid > x, use x / mid incase overflow happens
    if (mid > divideX) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = left + Math.floor((right - left) / 2);
  }
  return mid;
};
