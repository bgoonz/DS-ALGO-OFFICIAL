/**
 * Key: find the left most x, right most x, top most y, top most y,
 * that is the overlap rectangle.
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
let computeArea = function (A, B, C, D, E, F, G, H) {
  let areaA = (C - A) * (D - B);
  let areaB = (G - E) * (H - F);

  let left = Math.max(A, E);
  let right = Math.min(C, G);
  let top = Math.min(D, H);
  let bottom = Math.max(B, F);

  let overlapArea = 0;
  if (right > left && top > bottom) {
    overlapArea = (right - left) * (top - bottom);
  }

  return areaA + areaB - overlapArea;
};
