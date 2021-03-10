function convertToRoman(num) {
    var romans = [
        ["I", "V"], // 10^0
        ["X", "L"], // 10^1
        ["C", "D"], // 10^2
        ["M"] // 10^3
      ],
      digits = num
        .toString()
        .split("")
        .reverse()
        .map(function(item, index) {
          return parseInt(item);
        }),
      numeral = "";
  
    // Loop through each digit, starting with the ones place
    for (var i = 0; i < digits.length; i++) {
      // Make a Roman numeral that ignores 5-multiples and shortening rules
      numeral = romans[i][0].repeat(digits[i]) + numeral;
      // Check for a Roman numeral 5-multiple version
      if (romans[i][1]) {
        numeral = numeral
          // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
          .replace(romans[i][0].repeat(5), romans[i][1])
          // Shorten occurrences of 9 * 10^i
          .replace(
            romans[i][1] + romans[i][0].repeat(4),
            romans[i][0] + romans[i + 1][0]
          )
          // Shorten occurrences of 4 * 10^i
          .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
      }
    }
  
    return numeral;
  }
  
  console.log(convertToRoman(5));