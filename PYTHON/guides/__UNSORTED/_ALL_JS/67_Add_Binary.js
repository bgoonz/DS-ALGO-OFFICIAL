// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".

// Hide Company Tags Facebook
// Hide Tags Math String
// Hide Similar Problems (M) Add Two Numbers (M) Multiply Strings (E) Plus One

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function (a, b) {
  let lenA = a.length;
  let lenB = b.length;
  let ai = 0;
  let bi = 0;
  let sum = "";
  let carry = 0;
  while (ai < lenA || bi < lenB) {
    let valA = ai < lenA ? parseInt(parseInt(a[lenA - 1 - ai])) : 0;
    let valB = bi < lenB ? parseInt(parseInt(b[lenB - 1 - bi])) : 0;
    let val = valA + valB + carry;
    let rem = val % 2;
    carry = val > 1 ? 1 : 0;
    sum = rem + sum;
    ai++;
    bi++;
  }

  return carry > 0 ? carry + sum : sum;
};
