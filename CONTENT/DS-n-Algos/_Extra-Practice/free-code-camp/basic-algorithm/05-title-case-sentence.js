
function titleCase(str) {
  var words = str.split(' ');
  var titleCase = [];
  // .toUpperCase() words[i].charAt(words[i].length - 1 TO words[i].length).toLowerCase()
  for (var i = 0; i < words.length; i++) {
    titleCase.push((words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase()));
  }
  return titleCase.join(' ');
}

console.log(titleCase("sHoRt AnD sToUt"));