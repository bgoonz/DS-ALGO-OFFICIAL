/**
 * Key: first convert str to an array
 * Two maps: 1) first map maps pattern to the string array,
 * 2) second map maps the string to pattern
 * If just use one map to map the pattern and string, different pattern[i]
 * can have same string from the string array.
 *
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
let wordPattern = function (pattern, str) {
  let strArray = str.split(" ");
  if (pattern.length !== strArray.length) return false;
  let patternToStr = {};
  let strToPattern = {};
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] in patternToStr) {
      if (patternToStr[pattern[i]] !== strArray[i]) {
        return false;
      }
    } else if (strArray[i] in strToPattern) {
      if (strToPattern[strArray[i]] !== pattern[i]) {
        return false;
      }
    } else {
      patternToStr[pattern[i]] = strArray[i];
      strToPattern[strArray[i]] = pattern[i];
    }
  }

  return true;
};

// same as first solution, just a bit concise, 80ms
let wordPattern = function (pattern, str) {
  let strArray = str.split(" ");
  if (pattern.length !== strArray.length) return false;
  let patternToStr = {};
  let strToPattern = {};
  for (let i = 0; i < pattern.length; i++) {
    if (patternToStr[pattern[i]] && patternToStr[pattern[i]] !== strArray[i]) {
      return false;
    } else if (
      strToPattern[strArray[i]] &&
      strToPattern[strArray[i]] !== pattern[i]
    ) {
      return false;
    } else {
      patternToStr[pattern[i]] = strArray[i];
      strToPattern[strArray[i]] = pattern[i];
    }
  }

  return true;
};
