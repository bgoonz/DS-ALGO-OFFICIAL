/**
 * Key: Traverse from left to right, increase rowStart, means this top row has been visited.
 * Traverse from up to down, decrease colEnd, means this right column has been visited.
 * Traverse from right to left, decrease rowEnd, means this bottom row has been visited.
 * Traverse from down to up, increase colStart, means this left column has been visited.
 * if one row/column left, no circle can be formed, so
 * when the rowStart === rowEnd, there is only this row left to visit, (left -> right)
 * when the colStart === colEnd, there is only this column left to visit, (up -> down)
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function (matrix) {
  if (matrix.length === 0) return matrix;
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = matrix.length - 1;
  let colEnd = matrix[rowStart].length - 1;
  let path = [];

  while (rowStart <= rowEnd && colStart <= colEnd) {
    if (rowStart === rowEnd) {
      for (let i = colStart; i <= colEnd; i++) {
        path.push(matrix[rowStart][i]);
      }
      break;
    }

    if (colStart === colEnd) {
      for (let i = rowStart; i <= rowEnd; i++) {
        path.push(matrix[i][colEnd]);
      }
      break;
    }

    for (let i = colStart; i <= colEnd; i++) {
      path.push(matrix[rowStart][i]);
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      path.push(matrix[i][colEnd]);
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      path.push(matrix[rowEnd][i]);
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      path.push(matrix[i][colStart]);
    }
    colStart++;
  }

  return path;
};
