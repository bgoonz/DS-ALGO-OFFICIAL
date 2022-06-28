/**
 * Solution: backtracking, DFS
 *
 * @param {string} s
 * @return {string[][]}
 */
let partition = function (s) {
  let result = [];
  let results = [];
  if (!s) return results;
  helper(s, 0, result, results);
  return results;
};

let helper = function (s, start, result, results) {
  if (start >= s.length) {
    results.push(result.slice());
    result = [];
  }

  for (let i = start; i < s.length; i++) {
    let newStr = s.substring(start, i + 1);
    if (isPalindrome(newStr)) {
      result.push(newStr);
      helper(s, i + 1, result, results);
      result.pop();
    }
  }
};

let isPalindrome = function (s) {
  if (!s || s.length === 1) return true;
  let length = s.length;
  for (let i = 0; i < length; i++) {
    if (s[i] !== s[length - i - 1]) return false;
  }

  return true;
};

// testing cases
//  let s = 'aab';
// console.log(partition(s));

// second method, use a dp matrix. (isPal)
// Same O(n^2), but faster
let partition = function (s) {
  let result = [];
  let results = [];
  if (!s) return results;
  let length = s.length;
  let isPal = [];
  for (let i = length - 1; i >= 0; i--) {
    isPal[i] = [];
    for (let j = i; j < length; j++) {
      if ((j - i <= 2 || isPal[i + 1][j - 1]) && s[i] == s[j])
        isPal[i][j] = true;
    }
  }

  helper(s, 0, result, results, isPal);
  return results;
};

let helper = function (s, start, result, results, isPal) {
  if (start >= s.length) {
    results.push(result.slice());
    return;
  }

  for (let i = start; i < s.length; i++) {
    if (isPal[start][i]) {
      result.push(s.substring(start, i + 1));
      helper(s, i + 1, result, results, isPal);
      result.pop();
    }
  }
};
