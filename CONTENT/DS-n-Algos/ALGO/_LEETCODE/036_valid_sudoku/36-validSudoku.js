/**
 * use one row loop and one col loop to examine all three rules
 * row, column and sub-9-grid (the tricky part).
 *
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function (board) {
  if (!board || board.length !== 9 || board[0].length !== 9) return false;

  for (let i = 0; i < board.length; i++) {
    let row = {};
    let col = {};
    let grid = {};
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== "." && !(board[i][j] in row)) {
        row[board[i][j]] = true;
      } else if (board[i][j] !== "." && board[i][j] in row) {
        return false;
      }

      if (board[j][i] !== "." && !(board[j][i] in col)) {
        col[board[j][i]] = true;
      } else if (board[j][i] !== "." && board[j][i] in col) {
        return false;
      }

      let rowIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      let colIndex = 3 * (i % 3) + (j % 3);
      if (
        board[rowIndex][colIndex] !== "." &&
        !(board[rowIndex][colIndex] in grid)
      ) {
        grid[board[rowIndex][colIndex]] = true;
      } else if (
        board[rowIndex][colIndex] !== "." &&
        board[rowIndex][colIndex] in grid
      ) {
        return false;
      }
    }
  }

  return true;
};
