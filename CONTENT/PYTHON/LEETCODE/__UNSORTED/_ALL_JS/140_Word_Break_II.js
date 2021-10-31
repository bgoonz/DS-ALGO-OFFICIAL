// http://fisherlei.blogspot.com/2013/11/leetcode-wordbreak-ii-solution.html
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
let wordBreak = function (s, wordDict) {
  let result = [];
  let solutions = [];
  let len = s.length;
  let possible = [];

  for (let i = 0; i <= s.length; i++) {
    possible.push(true);
  }

  getAllSolutions(0, s, wordDict, result, solutions, possible);
  return solutions;
};

function getAllSolutions(start, s, wordDict, result, solutions, possible) {
  if (start === s.length) {
    solutions.push(result.join(" ")); // remove the last space
    return;
  }

  // loop through string from i to s.length
  for (let i = start; i < s.length; i++) {
    let piece = s.substring(start, i + 1);

    // possible is to mark step whether i+1 to s.length have any possible words
    if (wordDict.has(piece) && possible[i + 1]) {
      // eliminate unnecessary search
      result.push(piece);
      let beforeChange = solutions.length;
      getAllSolutions(i + 1, s, wordDict, result, solutions, possible);
      if (solutions.length === beforeChange) {
        possible[i + 1] = false;
      }
      result.pop();
    }
  }
}

let dict = new Set();
dict.add("leet");
dict.add("code");
dict.add("cod");
dict.add("de");

wordBreak("leetcode", dict);
