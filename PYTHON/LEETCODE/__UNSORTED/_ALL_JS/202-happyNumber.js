/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function (n) {
  let squareSums = [n];
  while (n !== 1) {
    n = squareSum(n);
    // check this square sum num exists or not.
    let isSquareSumApeared = squareSums.indexOf(n) > -1;
    if (isSquareSumApeared) return false;
    squareSums.push(n);
  }
  return true;
};

let squareSum = function (n) {
  let sum = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    sum += lastDigit * lastDigit;
    n = Math.floor(n / 10);
  }
  return sum;
};
