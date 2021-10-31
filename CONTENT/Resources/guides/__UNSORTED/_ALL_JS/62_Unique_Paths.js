/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let uniquePaths = function (m, n) {
  if (m === 0 || n === 0) {
    return 0;
  }

  let dp = [[1]];

  for (let i = 1; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let j = 1; j < m; j++) {
    dp.push([]);
    dp[j][0] = 1;
  }

  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  console.log(dp);

  return dp[m - 1][n - 1];
};
