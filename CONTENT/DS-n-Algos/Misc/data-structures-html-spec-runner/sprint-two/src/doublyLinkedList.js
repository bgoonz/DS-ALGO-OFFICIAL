var DoublyLinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    if (this.tail === null) {
      this.tail = Node(value);
      this.head = this.tail;
    } else {
      this.tail.next = Node(value);
      this.tail.next.previous = this.tail;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function () {
    var headVal = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    return headVal;
  };

  list.contains = function (target) {
    if (this.head.value === target) {
      return true;
    } else {
      var current = this.head.next;
      while (current) {
        if (current.value === target) {
          return true;
        }
        current = current.next;
      }
    }
    return false;
  };

  list.addToHead = function () {};

  list.removeTail = function () {};

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
