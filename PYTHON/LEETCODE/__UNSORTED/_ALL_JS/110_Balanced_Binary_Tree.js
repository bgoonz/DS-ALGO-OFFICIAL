// Leetcode 110
// Language: Javascript
// Problem: https://leetcode.com/problems/balanced-binary-tree/
// Author: Chihung Yu
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

let maxHeight = function (node) {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(maxHeight(node.left), maxHeight(node.right));
};

let minHeight = function (node) {
  if (node === null) {
    return 0;
  }

  return 1 + Math.min(minHeight(node.left), minHeight(node.right));
};

let height = function (node) {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(height(node.left), height(node.right));
};

let isBalanced = function (root) {
  if (root === null) {
    return true;
  }

  //  let maxh = maxHeight(root);
  //  let minh = minHeight(root);

  // return Math.abs(maxh - minh) <= 1;

  let lh = height(root.left);
  let rh = height(root.right);

  let diff = Math.abs(lh - rh);

  if (diff <= 1) {
    return isBalanced(root.left) && isBalanced(root.right);
  } else {
    return false;
  }
};
