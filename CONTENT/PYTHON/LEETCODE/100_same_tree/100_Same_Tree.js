/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = function (p, q) {
  let queue1 = [];
  let queue2 = [];

  queue1.push(p);
  queue2.push(q);

  while (queue1.length && queue2.length) {
    let node1 = queue1.shift();
    let node2 = queue2.shift();
    let val1;
    let val2;

    if (node1 === null) {
      val1 = null;
    } else {
      val1 = node1.val;
      queue1.push(node1.left);
      queue1.push(node1.right);
    }

    if (node2 === null) {
      val2 = null;
    } else {
      val2 = node2.val;
      queue2.push(node2.left);
      queue2.push(node2.right);
    }

    if (val1 !== val2) {
      return false;
    }
  }

  return queue1.length === queue2.length;
};
