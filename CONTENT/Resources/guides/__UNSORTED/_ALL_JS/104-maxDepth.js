/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function (root) {
  let max = 0;
  let lmax = maxDepth(root.left);
  let rmax = maxDepth(root.right);
  if (lmax > rmax) {
    root = root.left;
    max = lmax;
  } else {
    root = root.right;
    max = rmax;
  }
  return max + 1;
};

// second try
let maxDepth = function (root) {
  if (!root) return 0;
  let lHeight = maxDepth(root.left) + 1;
  let rHeight = maxDepth(root.right) + 1;
  return lHeight > rHeight ? lHeight : rHeight;
};

// simplist
let maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
