/**
 * initialize your data structure here
 * @constructor
 */
let TwoSum = function () {
  this.hashmap = new Map();
};

/**
 * Add the number to an internal data structure.
 * @param {number} input
 * @returns {void}
 */
TwoSum.prototype.add = function (input) {
  this.hashmap[input] = this.hashmap[input] || 0;
  this.hashmap[input]++;
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} val
 * @returns {boolean}
 */
TwoSum.prototype.find = function (val) {
  for (let key in this.hashmap) {
    let diff = val - parseInt(key);

    if (diff === parseInt(key)) {
      if (this.hashmap[diff] >= 2) {
        return true;
      }
    } else if (this.hashmap[diff] >= 1) {
      return true;
    }
  }

  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 *  let twoSum = new TwoSum();
 * twoSum.add(number);
 * twoSum.find(value);
 */
