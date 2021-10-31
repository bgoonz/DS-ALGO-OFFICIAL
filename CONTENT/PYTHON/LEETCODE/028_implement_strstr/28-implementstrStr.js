/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function (haystack, needle) {
  let hIndex = 0;
  while (haystack.length - hIndex >= needle.length) {
    let nIndex = 0;
    if (haystack[hIndex] === needle[nIndex]) {
      while (nIndex < needle.length) {
        if (haystack[hIndex + nIndex] !== needle[nIndex]) break;
        nIndex++;
      }
    }
    if (nIndex === needle.length) break;
    else hIndex++;
  }

  if (haystack.length - hIndex < needle.length) return -1;
  return hIndex;
};

// a better solution? KMP?
