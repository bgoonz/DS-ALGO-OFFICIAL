class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [1] * n
        for row in range(1, m):
            for j in range(1, n):
                dp[j] += dp[j - 1]
        return dp[-1]
