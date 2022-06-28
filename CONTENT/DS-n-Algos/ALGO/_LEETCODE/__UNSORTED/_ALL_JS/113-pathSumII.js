/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
let pathSum = function (root, sum) {
  let result = [];
  let results = [];
  pathSumHelper(root, sum, result, results);
  return results;
};

let pathSumHelper = function (root, sum, result, results) {
  if (!root) {
    return;
  }
  result.push(root.val);
  if (!root.left && !root.right && sum === root.val) {
    results.push(result.slice());
  }
  pathSumHelper(root.left, sum - root.val, result, results);
  pathSumHelper(root.right, sum - root.val, result, results);
  result.pop();
};
