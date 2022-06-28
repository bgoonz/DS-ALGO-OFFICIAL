const allUnique = (array) => {
  let valuesSoFar = [];

  for (let value of array) {
    if (valuesSoFar.indexOf(value) !== -1) {
      return false;
    }
    valuesSoFar.push(value);
  }

  return true;
};

module.exports = allUnique;
