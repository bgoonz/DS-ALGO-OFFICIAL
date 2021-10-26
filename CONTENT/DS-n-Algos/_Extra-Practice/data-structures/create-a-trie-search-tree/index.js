const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
const Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};
const Trie = () => {
  // Only change code below this line
  // Only change code above this line
};

// TODO
