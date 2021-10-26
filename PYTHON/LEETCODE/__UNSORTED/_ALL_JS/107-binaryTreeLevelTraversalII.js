/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrderBottom = function (root) {
  let results = [];
  helper(root, 0, results);
  return results;
};

let helper = function (node, level, results) {
  if (!node) return results;
  if (level >= results.length) {
    // insert level result array reversely
    results.unshift([]);
  }
  results[results.length - level - 1].push(node.val);
  helper(node.left, level + 1, results);
  helper(node.right, level + 1, results);
};
