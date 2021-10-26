let called = 0;
const hash = (string) => {
  called++;
  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
const HashTable = function () {
  this.collection = {};
  // Only change code below this line

  // Only change code above this line
};

// TODO
