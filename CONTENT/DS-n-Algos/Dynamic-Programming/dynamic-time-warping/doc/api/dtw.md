# DTW API

<style>
r { color: Red }
o { color: Orange }
g { color: Green }
</style>

## - <r> DTW([options])

Initializes a new instance of the `DTW`. If no options are provided the squared euclidean distance function is used.
**Parameters**
**[options]**: _DTWOptions_, The options to initialize the dynamic time warping instance with.

## - <r> class DTWOptions

**Members**
**distanceMetric**: _string_, The distance metric to use: `'manhattan' | 'euclidean' | 'squaredEuclidean'`.
**distanceFunction**: _function_, The distance function to use. The function should accept two numeric arguments and return the numeric distance. e.g. function (a, b) { return a + b; }

## - <r> class DTW

**Methods**

## - <r> DTW.compute(firstSequence, secondSequence, \[window])

Computes the optimal match between two provided sequences.
**Parameters**
**firstSequence**: _number[]_, The first sequence.
**secondSequence**: _number[]_, The second sequence.
**[window]**: _number_, The window parameter (for the locality constraint) to use.
**Returns**
_number_, The similarity between the provided temporal sequences.

## - <r> DTW.path()

Retrieves the optimal match between two provided sequences.
**Returns**
_number[]_, The array containing the optimal path points.

---

# DTW.js

---

---

### - <g> 1. The DTW class is created with an optional options parameter.

### - <g> 2. The validateOptions function is used to validate the options parameter.

### - <g> 3. The retrieveDistanceFunction function is used to retrieve the distance function to use.

### - <g> 4. The computeOptimalPath function is used to compute the optimal path between two sequences.

### - <g> 5. The retrieveOptimalPath function is used to retrieve the optimal path between two sequences.

```js
const debug = require("debug")("dtw");
const validate = require("./validate");
const matrix = require("./matrix");
const comparison = require("./comparison");
function validateOptions(options) {
  if (typeof options !== "object") {
    throw new TypeError("Invalid options type: expected an object");
  } else if (
    typeof options.distanceMetric !== "string" &&
    typeof options.distanceFunction !== "function"
  ) {
    throw new TypeError(
      "Invalid distance types: expected a string distance type or a distance function"
    );
  } else if (
    typeof options.distanceMetric === "string" &&
    typeof options.distanceFunction === "function"
  ) {
    throw new Error(
      "Invalid parameters: provide either a distance metric or function but not both"
    );
  }
  if (typeof options.distanceMetric === "string") {
    const normalizedDistanceMetric = options.distanceMetric.toLowerCase();
    if (
      normalizedDistanceMetric !== "manhattan" &&
      normalizedDistanceMetric !== "euclidean" &&
      normalizedDistanceMetric !== "squaredeuclidean"
    ) {
      throw new Error(
        `Invalid parameter value: Unknown distance metric '${options.distanceMetric}'`
      );
    }
  }
}
function retrieveDistanceFunction(distanceMetric) {
  const normalizedDistanceMetric = distanceMetric.toLowerCase();
  let distanceFunction = null;
  if (normalizedDistanceMetric === "manhattan") {
    distanceFunction = require("./distanceFunctions/manhattan").distance;
  } else if (normalizedDistanceMetric === "euclidean") {
    distanceFunction = require("./distanceFunctions/euclidean").distance;
  } else if (normalizedDistanceMetric === "squaredeuclidean") {
    distanceFunction = require("./distanceFunctions/squaredEuclidean").distance;
  }
  return distanceFunction;
}
/**
 * Create a DTWOptions object
 * @class DTWOptions
 * @member {string} distanceMetric The distance metric to use: `'manhattan' | 'euclidean' | 'squaredEuclidean'`.
 * @member {function} distanceFunction The distance function to use. The function should accept two numeric arguments and return the numeric distance. e.g. function (a, b) { return a + b; }
 */
/**
 * Create a DTW object
 * @class DTW
 */
/**
 * Initializes a new instance of the `DTW`. If no options are provided the squared euclidean distance function is used.
 * @function DTW
 * @param {DTWOptions} [options] The options to initialize the dynamic time warping instance with.
 */
/**
 * Computes the optimal match between two provided sequences.
 * @method compute
 * @param {number[]} firstSequence The first sequence.
 * @param {number[]} secondSequence The second sequence.
 * @param {number} [window] The window parameter (for the locality constraint) to use.
 * @returns {number} The similarity between the provided temporal sequences.
 */
/**
 * Retrieves the optimal match between two provided sequences.
 * @method path
 * @returns {number[]} The array containing the optimal path points.
 */
const DTW = function (options) {
  const state = {
    distanceCostMatrix: null,
  };
  if (typeof options === "undefined") {
    state.distance = require("./distanceFunctions/squaredEuclidean").distance;
  } else {
    validateOptions(options);
    if (typeof options.distanceMetric === "string") {
      state.distance = retrieveDistanceFunction(options.distanceMetric);
    } else if (typeof options.distanceFunction === "function") {
      state.distance = options.distanceFunction;
    }
  }
  this.compute = (firstSequence, secondSequence, window) => {
    let cost = Number.POSITIVE_INFINITY;
    if (typeof window === "undefined") {
      cost = computeOptimalPath(firstSequence, secondSequence, state);
    } else if (typeof window === "number") {
      cost = computeOptimalPathWithWindow(
        firstSequence,
        secondSequence,
        window,
        state
      );
    } else {
      throw new TypeError("Invalid window parameter type: expected a number");
    }
    return cost;
  };
  this.path = () => {
    let path = null;
    if (state.distanceCostMatrix instanceof Array) {
      path = retrieveOptimalPath(state);
    }
    return path;
  };
};
function validateComputeParameters(s, t) {
  validate.sequence(s, "firstSequence");
  validate.sequence(t, "secondSequence");
}
function computeOptimalPath(s, t, state) {
  debug("> computeOptimalPath");
  validateComputeParameters(s, t);
  const start = new Date().getTime();
  state.m = s.length;
  state.n = t.length;
  const distanceCostMatrix = matrix.create(
    state.m,
    state.n,
    Number.POSITIVE_INFINITY
  );
  distanceCostMatrix[0][0] = state.distance(s[0], t[0]);
  for (var rowIndex = 1; rowIndex < state.m; rowIndex++) {
    var cost = state.distance(s[rowIndex], t[0]);
    distanceCostMatrix[rowIndex][0] =
      cost + distanceCostMatrix[rowIndex - 1][0];
  }
  for (var columnIndex = 1; columnIndex < state.n; columnIndex++) {
    var cost = state.distance(s[0], t[columnIndex]);
    distanceCostMatrix[0][columnIndex] =
      cost + distanceCostMatrix[0][columnIndex - 1];
  }
  for (var rowIndex = 1; rowIndex < state.m; rowIndex++) {
    for (var columnIndex = 1; columnIndex < state.n; columnIndex++) {
      var cost = state.distance(s[rowIndex], t[columnIndex]);
      distanceCostMatrix[rowIndex][columnIndex] =
        cost +
        Math.min(
          distanceCostMatrix[rowIndex - 1][columnIndex], // Insertion
          distanceCostMatrix[rowIndex][columnIndex - 1], // Deletion
          distanceCostMatrix[rowIndex - 1][columnIndex - 1]
        ); // Match
    }
  }
  const end = new Date().getTime();
  const time = end - start;
  debug(`< computeOptimalPath (${time} ms)`);
  state.distanceCostMatrix = distanceCostMatrix;
  state.similarity = distanceCostMatrix[state.m - 1][state.n - 1];
  return state.similarity;
}
function computeOptimalPathWithWindow(s, t, w, state) {
  debug("> computeOptimalPathWithWindow");
  validateComputeParameters(s, t);
  const start = new Date().getTime();
  state.m = s.length;
  state.n = t.length;
  const window = Math.max(w, Math.abs(s.length - t.length));
  let distanceCostMatrix = matrix.create(
    state.m + 1,
    state.n + 1,
    Number.POSITIVE_INFINITY
  );
  distanceCostMatrix[0][0] = 0;
  for (let rowIndex = 1; rowIndex <= state.m; rowIndex++) {
    for (
      let columnIndex = Math.max(1, rowIndex - window);
      columnIndex <= Math.min(state.n, rowIndex + window);
      columnIndex++
    ) {
      const cost = state.distance(s[rowIndex - 1], t[columnIndex - 1]);
      distanceCostMatrix[rowIndex][columnIndex] =
        cost +
        Math.min(
          distanceCostMatrix[rowIndex - 1][columnIndex], // Insertion
          distanceCostMatrix[rowIndex][columnIndex - 1], // Deletion
          distanceCostMatrix[rowIndex - 1][columnIndex - 1]
        ); // Match
    }
  }
  const end = new Date().getTime();
  const time = end - start;
  debug(`< computeOptimalPathWithWindow (${time} ms)`);
  distanceCostMatrix.shift();
  distanceCostMatrix = distanceCostMatrix.map((row) => {
    return row.slice(1, row.length);
  });
  state.distanceCostMatrix = distanceCostMatrix;
  state.similarity = distanceCostMatrix[state.m - 1][state.n - 1];
  return state.similarity;
}
function retrieveOptimalPath(state) {
  debug("> retrieveOptimalPath");
  const start = new Date().getTime();
  let rowIndex = state.m - 1;
  let columnIndex = state.n - 1;
  const path = [[rowIndex, columnIndex]];
  const epsilon = 1e-14;
  while (rowIndex > 0 || columnIndex > 0) {
    if (rowIndex > 0 && columnIndex > 0) {
      const min = Math.min(
        state.distanceCostMatrix[rowIndex - 1][columnIndex], // Insertion
        state.distanceCostMatrix[rowIndex][columnIndex - 1], // Deletion
        state.distanceCostMatrix[rowIndex - 1][columnIndex - 1]
      ); // Match
      if (
        comparison.nearlyEqual(
          min,
          state.distanceCostMatrix[rowIndex - 1][columnIndex - 1],
          epsilon
        )
      ) {
        rowIndex--;
        columnIndex--;
      } else if (
        comparison.nearlyEqual(
          min,
          state.distanceCostMatrix[rowIndex - 1][columnIndex],
          epsilon
        )
      ) {
        rowIndex--;
      } else if (
        comparison.nearlyEqual(
          min,
          state.distanceCostMatrix[rowIndex][columnIndex - 1],
          epsilon
        )
      ) {
        columnIndex--;
      }
    } else if (rowIndex > 0 && columnIndex === 0) {
      rowIndex--;
    } else if (rowIndex === 0 && columnIndex > 0) {
      columnIndex--;
    }
    path.push([rowIndex, columnIndex]);
  }
  const end = new Date().getTime();
  const time = end - start;
  debug(`< retrieveOptimalPath (${time} ms)`);
  return path.reverse();
}
module.exports = DTW;
```
