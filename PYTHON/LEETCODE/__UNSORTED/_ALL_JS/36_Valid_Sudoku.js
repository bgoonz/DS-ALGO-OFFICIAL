/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function (board) {
  // col
  for (let i = 0; i < board.length; i++) {
    let dupCheck = [];

    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] !== "." && dupCheck[board[i][j]]) {
        return false;
      } else {
        dupCheck[board[i][j]] = true;
      }
    }
  }

  for (i = 0; i < board.length; i++) {
    dupCheck = [];

    for (j = 0; j < board[0].length; j++) {
      if (board[j][i] !== "." && dupCheck[board[j][i]]) {
        return false;
      } else {
        dupCheck[board[j][i]] = true;
      }
    }
  }

  for (i = 0; i < board.length; i += 3) {
    for (j = 0; j < board.length; j += 3) {
      dupCheck = [];

      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          if (board[i + x][j + y] !== "." && dupCheck[board[i + x][j + y]]) {
            return false;
          } else {
            dupCheck[board[i + x][j + y]] = true;
          }
        }
      }
    }
  }

  return true;
};
