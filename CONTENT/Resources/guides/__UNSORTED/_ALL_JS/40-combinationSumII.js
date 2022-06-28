/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let combinationSum2 = function (candidates, target) {
  let result = [];
  let results = [];

  candidates.sort(function (a, b) {
    return a - b;
  });
  combinationSum2Helper(candidates, result, results, target, 0);
  return results;
};

let combinationSum2Helper = function (
  candidates,
  result,
  results,
  target,
  start
) {
  if (target === 0) {
    results.push(result.slice());
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    if (target < 0) break;
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue;
    } else {
      result.push(candidates[i]);
      combinationSum2Helper(
        candidates,
        result,
        results,
        target - candidates[i],
        i + 1
      );
      result.pop();
    }
  }
};
