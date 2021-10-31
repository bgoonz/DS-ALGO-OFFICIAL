/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// use hashset idea, O(N)
let intersection = function (nums1, nums2) {
  // Note ES5 doesn't have set
  let set1 = new Set();
  let interSet = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }

  for (let j = 0; j < nums2.length; j++) {
    if (set1.has(nums2[j])) {
      interSet.add(nums2[j]);
    }
  }

  let result = [];
  interSet.forEach(function (item) {
    result.push(item);
  });

  return result;
};

// solution 2: sort first. O(nlogn)
let intersection = function (nums1, nums2) {
  // Note ES5 doesn't have set
  let interSet = new Set();
  nums1.sort(comparator);
  nums2.sort(comparator);
  let i = 0;
  let j = 0;

  while (i < nums1.length) {
    if (j === nums2.length) break;
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      interSet.add(nums1[i]);
      i++;
      j++;
    }
  }

  let result = [];
  interSet.forEach(function (item) {
    result.push(item);
  });

  return result;
};

let comparator = function (a, b) {
  return a - b;
};
