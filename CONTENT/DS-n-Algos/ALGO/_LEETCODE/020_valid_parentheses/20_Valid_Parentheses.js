/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  let stack = [];
  let index = 0;
  while (index < s.length) {
    let c = s[index];

    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else {
      let oldC = stack.pop();

      if (oldC === "(" && c !== ")") {
        return false;
      } else if (oldC === "[" && c !== "]") {
        return false;
      } else if (oldC === "{" && c !== "}") {
        return false;
      } else if (oldC === undefined) {
        return false;
      }
    }

    index++;
  }

  return stack.length === 0;
};

// second attempt

let isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let chr = s[i];

    if (chr === "(" || chr === "{" || chr === "[") {
      stack.push(chr);
    } else if (chr === ")" || chr === "}" || chr === "]") {
      let top = stack.pop();
      if (
        !top ||
        (top === "(" && chr !== ")") ||
        (top === "{" && chr !== "}") ||
        (top === "[" && chr !== "]")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
