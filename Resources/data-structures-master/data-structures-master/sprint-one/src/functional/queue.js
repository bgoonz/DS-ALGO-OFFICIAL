let Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[first];
    delete storage[first];
    var num = 0;
    for (var q in storage) {
      storage[num] = storage[q];
      delete storage[q];
      num++;
    }
    last && last--;
    return dequeued;
  };

  someInstance.size = function() {
    return last;
  };

  return someInstance;
};
