/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
// Is there a better solution?
let BSTIterator = function (root) {
  this.stack = [];
  this.pushStack(root);
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0 ? true : false;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
  let small = this.stack.pop();
  if (small.right) {
    this.pushStack(small.right);
  }
  return small.val;
};

BSTIterator.prototype.pushStack = function (node) {
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
};

/**
 * Your BSTIterator will be called like this:
 *  let i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
