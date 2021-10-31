/**
 * @param {string} s
 * @return {number}
 */
let minCut = function (s) {
  if (!s) return 0;
  let length = s.length;
  let isPal = [];
  for (let i = length - 1; i >= 0; i--) {
    isPal[i] = [];
    for (let j = i; j < length; j++) {
      if ((j - i <= 2 || isPal[i + 1][j - 1]) && s[i] == s[j])
        isPal[i][j] = true;
    }
  }

  let cut = [-1];
  for (i = 1; i <= length; i++) {
    cut[i] = i;
    for (j = i - 1; j >= 0; j--) {
      if (isPal[j][i - 1]) {
        cut[i] = Math.min(cut[i], cut[j] + 1);
      }
    }
  }
  return cut[length];
};

// not working Time exceeds limits.
let minCut = function (s) {
  let result = [];
  let min = { min: Math.pow(2, 31) - 1 };
  if (!s) return min;
  let x = helper(s, 0, result, min);
  return x.min;
};

let helper = function (s, start, result, min) {
  if (start >= s.length) {
    if (result.length - 1 < min.min) {
      min.min = result.length - 1;
    }
  }

  for (let i = start; i < s.length; i++) {
    let newStr = s.substring(start, i + 1);
    if (isPalindrome(newStr)) {
      result.push(newStr);
      helper(s, i + 1, result, min);
      result.pop();
    }
  }

  return min;
};

let isPalindrome = function (s) {
  if (!s || s.length === 1) return true;
  let length = s.length;
  for (let i = 0; i < length; i++) {
    if (s[i] !== s[length - i - 1]) return false;
  }

  return true;
};
