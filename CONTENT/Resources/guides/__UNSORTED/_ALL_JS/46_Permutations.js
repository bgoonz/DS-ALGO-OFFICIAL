// Leetcode 46
// Language: Javascript
// Problem: https://leetcode.com/problems/permutations/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let permute = function (nums) {
  let result = [];
  generatePermute(nums, [], result);

  return result;
};

let generatePermute = function (nums, currentResult, finalResult) {
  if (nums.length === 0) {
    finalResult.push(currentResult.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    currentResult.push(num);
    let newNums = nums.slice(0, i).concat(nums.slice(i + 1));
    generatePermute(newNums, currentResult, finalResult);
    currentResult.pop();
  }
};

// can be optimized by using an array to keep track of visited elements in the array which ultimately cut down the time slicing array
// consider array is of size n -> n^2 vs n!

let permute = function (nums) {
  let result = [];
  let visited = [];

  generate(nums, 0, visited, [], result);

  return result;
};

let generate = function (nums, index, visited, output, result) {
  if (nums.length === output.length) {
    result.push(output.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      output.push(nums[i]);
      generate(nums, index + 1, visited, output, result);
      output.pop();
      visited[i] = false;
    }
  }
};

// Another clear solution
let permute = function (nums) {
  return permuteAux(nums, []);
};

let permuteAux = function (nums, partialNums) {
  if (nums === null || nums.length === 0) {
    return [partialNums];
  }
  let listArrays = [];
  for (let i = 0; i < nums.length; i++) {
    let withoutI = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
    let partial = partialNums.concat([nums[i]]);
    let sol = permuteAux(withoutI, partial);
    if (sol.legnth !== 0) {
      listArrays = listArrays.concat(sol);
    }
  }
  return listArrays;
};
