
function destroyer(arr) {
  // Remove all the values
  var argsArray = Array.from(arguments);
  return argsArray[0].filter(
    function (val) {
      for (var i = 1; i < argsArray.length; i++) {
        return argsArray.indexOf(val) == -1;
      } return true;
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
