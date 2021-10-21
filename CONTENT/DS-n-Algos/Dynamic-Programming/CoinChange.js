/**
 * @params {Array} coins
 * @params {Number} amount
 */
export const change = (coins, amount) => {
  // Create and initialize the storage
  const combinations = new Array(amount + 1).fill(0)
  combinations[0] = 1
  // Determine the direction of smallest sub-problem
  for (let i = 0; i < coins.length; i++) {
    // Travel and fill the combinations array
    for (let j = coins[i]; j < combinations.length; j++) {
      combinations[j] += combinations[j - coins[i]]
    }
  }
  return combinations[amount]
}
/**
 * @params {Array} coins
 * @params {Number} amount
 */
export const coinChangeMin = (coins, amount) => {
  const map = { 0: 1 }
  for (let i = 1; i <= amount; i++) {
    let min = Infinity
    for (const coin of coins) {
      if (i < coin) continue
      min = Math.min(min, 1 + map[i - coin])
    }
    map[i] = min
  }
  return map[amount] === Infinity ? -1 : map[amount] - 1
}
