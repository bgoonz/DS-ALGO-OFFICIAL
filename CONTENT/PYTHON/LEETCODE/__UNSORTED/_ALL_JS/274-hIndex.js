/**
 * @param {number[]} citations
 * @return {number}
 */
// sort first.
let hIndex = function (citations) {
  citations.sort(function (a, b) {
    return a - b;
  });

  let result = 0;
  for (let i = 0, length = citations.length; i < length; i++) {
    let min = Math.min(citations[i], length - i);
    result = Math.max(result, min);
  }

  return result;
};
