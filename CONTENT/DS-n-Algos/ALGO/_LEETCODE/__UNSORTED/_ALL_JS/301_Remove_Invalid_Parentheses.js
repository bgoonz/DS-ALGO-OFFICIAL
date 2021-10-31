// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

// Note: The input string may contain letters other than the parentheses ( and ).

// Examples:
// "()())()" -> ["()()()", "(())()"]
// "(a)())()" -> ["(a)()()", "(a())()"]
// ")(" -> [""]
// Credits:
// Special thanks to @hpplayer for adding this problem and creating all test cases.

// Hide Company Tags Facebook
// Hide Tags Depth-first Search Breadth-first Search
// Hide Similar Problems (E) Valid Parentheses

/**
 * @param {string} s
 * @return {string[]}
 */

function isValid(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else if (s[i] === ")") {
      count--;
    }

    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

let removeInvalidParentheses = function (s) {
  let queue = [];
  queue.push(s);
  let visited = {};
  let res = [];
  let found = false;

  // breadth first search since we are looking for the minimum changes
  while (queue.length > 0) {
    s = queue.shift();

    // things stored in the queue represent the same level (same number of changes)
    // once we found a valid one, we should not look further into the next level (by setting found to true)
    if (isValid(s)) {
      res.push(s);
      found = true;
    }

    if (found) {
      continue;
    }

    // if nothing found, then loop through the entire string and remove one of the parenthesis.
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== "(" && s[i] !== ")") {
        continue;
      }

      let newS = s.substring(0, i) + s.substring(i + 1);

      if (!visited[newS]) {
        visited[newS] = true;
        queue.push(newS);
      }
    }
  }

  return res;
};
