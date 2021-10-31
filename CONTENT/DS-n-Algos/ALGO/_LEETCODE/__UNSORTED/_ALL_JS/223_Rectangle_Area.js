// Leetcode #223
// Language: Javascript
// Problem: https://leetcode.com/problems/rectangle-area/
// Author: Chihung Yu
/**
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
  let area = (C - A) * (D - B) + (G - E) * (H - F);

  if (A > G || C < E || D < F || B > H) {
    return area;
  }

  let left = Math.max(A, E);
  let top = Math.min(D, H);
  let right = Math.min(C, G);
  let bottom = Math.max(B, F);

  return area - (right - left) * (top - bottom);
};
