var Queue = function() {
  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var first = this.storage[0];
  delete this.storage[0];
  
  this.length && this.length--;
  
  var cnt = 0;
  for (var k in this.storage) {
    this.storage[cnt] = this.storage[k];
    delete this.storage[k];
    cnt++;
  }
  
  return first;
};

Queue.prototype.size = function() {
  return this.length;
};
