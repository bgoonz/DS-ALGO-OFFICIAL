 const allUniqueStr= function(array) {
  let valuesSoFar = Object.create(null); //Creates an object that has the specified prototype or that has null prototype.
  for (let i = 0; i < array.length; ++i) {
    let value = array[i];
    if (value in valuesSoFar) {
      return false;
    }
    valuesSoFar[value] = false;
  }
  return true;
}
module.exports = allUniqueStr;
