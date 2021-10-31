/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrder = function (root) {
  if (!root) return [];
  let preLevel = [root],
    currLevel = [root];
  let result = [[root.val]];
  while (true) {
    if (currLevel.length === 0) break;
    let val = [];
    currLevel = [];
    for (let i = 0; i < preLevel.length; i++) {
      if (preLevel[i].left) {
        currLevel.push(preLevel[i].left);
        val.push(preLevel[i].left.val);
      }
      if (preLevel[i].right) {
        currLevel.push(preLevel[i].right);
        val.push(preLevel[i].right.val);
      }
    }
    preLevel = [];
    preLevel = currLevel;
    if (val.length > 0) result.push(val);
  }

  return result;
};

// second try
let levelOrder = function (root) {
  let results = [];
  if (!root) return results;
  let prevLevel = [root];
  let currLevel = [];
  let result = [];

  while (prevLevel.length > 0) {
    while (prevLevel.length > 0) {
      let node = prevLevel.shift();
      result.push(node.val);
      if (node.left) {
        currLevel.push(node.left);
      }
      if (node.right) {
        currLevel.push(node.right);
      }
    }
    results.push(result);
    prevLevel = currLevel;
    currLevel = [];
    result = [];
  }

  return results;
};

// third try, recursive. DFS.
let levelOrder = function (root) {
  let results = [];
  helper(results, root, 0);
  return results;
};

let helper = function (results, node, level) {
  if (!node) return results;
  if (level === results.length) {
    results[level] = [];
  }
  results[level].push(node.val);
  helper(results, node.left, level + 1);
  helper(results, node.right, level + 1);
};

// 4th try
let levelOrder = function (root) {
  let results = [];
  let prevLevel = [];
  let currentLevel = [root];

  if (!root) {
    return results;
  }

  while (currentLevel.length > 0) {
    let result = [];
    prevLevel = currentLevel.slice();
    currentLevel = [];

    while (prevLevel.length > 0) {
      let node = prevLevel.shift();
      result.push(node.val);
      if (node.left) {
        currentLevel.push(node.left);
      }
      if (node.right) {
        currentLevel.push(node.right);
      }
    }

    results.push(result);
  }

  return results;
};
