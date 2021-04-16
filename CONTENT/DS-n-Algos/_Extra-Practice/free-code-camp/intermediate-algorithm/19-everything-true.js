
function truthCheck(collection, pre) {
    var verdict = collection.map(function(obj){
      if (obj[pre]) {
          return true;
      } else {
          return false;
      }
    });
    if (verdict.indexOf(false) == -1) {
        return true;
    } else {
        return false;
    }
}

console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));
