var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    length && length--;
    return storage[length];
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
