export const binaryToDecimal = (binaryString) => {
  let decimalNumber = 0
  const binaryDigits = binaryString.split('').reverse() // Splits the binary number into reversed single digits
  binaryDigits.forEach((binaryDigit, index) => {
    decimalNumber += binaryDigit * 2 ** index // Summation of all the decimal converted digits
  })
  return decimalNumber
}

// > binaryToDecimal('111001')
// 57

// > binaryToDecimal('101')
// 5
