/*Simple Function to flatten an array into a single layer */
const flatten = (array) =>
  array.reduce((accum, ele) => accum.concat(Array.isArray(ele) ? flatten(ele) : ele), []);
