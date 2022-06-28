/**
 * Key: backtracking. Be careful about JavaScript array sort.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum = function (candidates, target) {
  let result = [];
  let results = [];

  candidates.sort(function (a, b) {
    return a - b;
  });
  combinationSumHelper(candidates, target, results, result, 0);
  return results;
};

let combinationSumHelper = function (
  candidates,
  target,
  results,
  result,
  start
) {
  if (target === 0) {
    results.push(result.slice());
    return results;
  }

  for (let i = start; i < candidates.length; i++) {
    if (candidates[i] > target) break;
    result.push(candidates[i]);
    combinationSumHelper(
      candidates,
      target - candidates[i],
      results,
      result,
      i
    );
    result.pop(candidates[i]);
  }
};
