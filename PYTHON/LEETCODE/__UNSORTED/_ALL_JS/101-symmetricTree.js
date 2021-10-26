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
// recursive
let isSymmetric = function (root) {
  if (!root) return true;
  return isSymmetricHelper(root.left, root.right);
};

let isSymmetricHelper = function (left, right) {
  if (!left || !right) return left === right;
  if (left.val !== right.val) return false;
  return (
    isSymmetricHelper(left.left, right.right) &&
    isSymmetricHelper(left.right, right.left)
  );
};

// second try, not good.
let helper = function (left, right) {
  if (!left || !right) {
    if (!left && !right) return true;
    return false;
  }
  if (
    left.val === right.val &&
    helper(left.left, right.right) &&
    helper(left.right, right.left)
  ) {
    return true;
  }
  return false;
};

// third try
let helper = function (left, right) {
  if (!left && !right) {
    return true;
  } else if (!left || !right) {
    return false;
  } else {
    if (left.val === right.val) {
      return (
        isSymmetricHelper(left.left, right.right) &&
        isSymmetricHelper(left.right, right.left)
      );
    } else {
      return false;
    }
  }
};

// iterative
let isSymmetric = function (root) {
  if (!root) return true;
  let treeStack = [];
  if (root.left) {
    if (!root.right) return false;
    treeStack.push(root.left);
    treeStack.push(root.right);
  } else if (root.right) {
    return false;
  }

  while (treeStack.length > 0) {
    if (treeStack.length % 2 !== 0) return false;
    let right = treeStack.pop();
    let left = treeStack.pop();
    if (right.val !== left.val) return false;
    if (left.left) {
      if (!right.right) return false;
      treeStack.push(left.left, right.right);
    } else if (right.right) return false;

    if (right.left) {
      if (!left.right) return false;
      treeStack.push(right.left, left.right);
    } else if (left.right) return false;
  }

  return true;
};

// a second try
let isSymmetric = function (root) {
  if (!root) return true;
  let stack = [];
  if (root.left && root.right) {
    stack.push(root.left);
    stack.push(root.right);
  } else if (!root.left && !root.right) {
    return true;
  } else {
    return false;
  }

  while (stack.length > 0) {
    if (stack.length % 2 !== 0) return false;
    let left = stack.pop();
    let right = stack.pop();
    if (left.val !== right.val) return false;
    if (left.left && right.right) {
      stack.push(left.left, right.right);
    } else if ((!left.left && right.right) || (left.left && !right.right)) {
      return false;
    }
    if (right.left && left.right) {
      stack.push(right.left, left.right);
    } else if ((!right.left && left.right) || (right.left && !left.right)) {
      return false;
    }
  }

  return true;
};
