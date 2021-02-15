function countingSort(arr, max) {
  const res = [];
  const counters = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    counters[arr[i]]++;
  }
  for (let j = 0; j < counters.length; j++) {
    while (counters[j] > 0) {
      res.push(j);
      counters[j]--;
    }
  }
  return res;
}

module.exports = {
  countingSort
};
