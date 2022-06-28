/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function (matrix, target) {
  let low = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let high = rows * cols - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let midNumber = findElementByIndex(matrix, mid, rows, cols);
    if (target < midNumber) high = mid - 1;
    else if (target > midNumber) low = mid + 1;
    else return true;
  }

  return false;
};

let findElementByIndex = function (matrix, index, m, n) {
  let row = Math.floor(index / n);
  let col = index - n * row;
  return matrix[row][col];
};

// second try
let searchMatrix = function (matrix, target) {
  let low = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let high = rows * cols - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let midElement = findElementByIndex(matrix, mid, cols);
    if (midElement === target) {
      return true;
    } else if (midElement > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
};

// only need n (columns).
let findElementByIndex = function (matrix, index, n) {
  let row = Math.floor(index / n);
  let col = Math.floor(index % n);
  return matrix[row][col];
};
