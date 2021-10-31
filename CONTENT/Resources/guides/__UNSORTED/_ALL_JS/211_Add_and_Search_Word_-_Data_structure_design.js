// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

// For example:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z.

// click to show hint.

// Hide Company Tags Facebook
// Hide Tags Backtracking Trie Design
// Hide Similar Problems (M) Implement Trie (Prefix Tree)

function TrieNode(chr) {
  this.val = chr;
  this.isWord = false;
  this.children = [];
}

/**
 * @constructor
 */
let WordDictionary = function () {
  this.root = new TrieNode(null, false);
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    let chr = word[i];
    node.children[chr] = node.children[chr] || new TrieNode(chr);
    node = node.children[chr];
  }

  node.isWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function (word) {
  let node = this.root;

  function dfs(node, word, i) {
    if (i === word.length) {
      return node.isWord;
    }

    let chr = word[i];

    if (chr === ".") {
      for (let key in node.children) {
        if (dfs(node.children[key], word, i + 1)) {
          return true;
        }
      }
    } else if (node.children[chr]) {
      return dfs(node.children[chr], word, i + 1);
    }

    return false;
  }

  return dfs(node, word, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 *  let wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */
