var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.length = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },

  dequeue: function() {
    var first = this.storage[0];
    delete this.storage[0];
    this.length && this.length--;
    var cnt = 0;
    for (var key in this.storage) {
      this.storage[cnt] = this.storage[key];
      cnt++;
      delete this.storage[key];
    }
    return first;
  },

  size: function() {
    return this.length;
  }
};
