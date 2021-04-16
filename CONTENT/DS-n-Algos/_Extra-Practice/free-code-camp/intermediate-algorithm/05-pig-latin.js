
function translatePigLatin(str) {
    var first = str[0];
    var vowels = ['a','e','i','o','u','y']; //ignores that 'y' is only sometimes a vowel...
    if (vowels.indexOf(first) == -1){ //if the first letter is not a vowel
        var findVowel = [];
        for (var i = 0; i<vowels.length; i++) { //get first consonant or consonant cluster
            if (str.indexOf(vowels[i]) !== -1) {
                findVowel.push(str.indexOf(vowels[i]));
            }
        }
        var firstVowelIndex = findVowel.sort()[0];
        return str.substring(firstVowelIndex)+str.substring(0, firstVowelIndex)+'ay';
    }
  return str+'way';
}

console.log(translatePigLatin("glove"));