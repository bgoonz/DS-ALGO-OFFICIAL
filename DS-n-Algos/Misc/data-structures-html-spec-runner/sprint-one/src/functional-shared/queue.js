var Queue = function() {
  var someInstance = {
    storage: {},
    length: 0,
  };
  
  _.extend(someInstance, queueMethods);

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
    var cnt = 0;
    this.length && this.length--;
    for (var key in this.storage) {
      this.storage[cnt] = this.storage[key];
      delete this.storage[key];
      cnt++;
    }
    return first;
  },

  size: function() {
    return this.length;
  }
};


