/**
 * Sums values in the array by function "reduce"
 * @param {Array} array Array of numbers
 * @returns {number} Sum of the numbers
 */
const sumReduce = array => array.reduce((curr, prev) => curr + prev);

console.log(sumReduce([1, 2, 3, 4])); // 10
