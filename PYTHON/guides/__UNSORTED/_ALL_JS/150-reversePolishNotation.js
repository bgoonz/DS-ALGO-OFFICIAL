/**
 * @param {string[]} tokens
 * @return {number}
 */
// seems like it is not a good solution
let evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (!isNaN(token)) {
      stack.push(token);
    } else {
      let num1 = stack.pop();
      let num2 = stack.pop();
      let result = getResult(num2, num1, token);
      stack.push(result);
    }
  }

  return Math.floor(parseInt(stack[stack.length - 1]));
};

let getResult = function (num1, num2, operator) {
  let a = parseInt(num1);
  let b = parseInt(num2);
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "/") return a / b;
  if (operator === "*") return a * b;
};
