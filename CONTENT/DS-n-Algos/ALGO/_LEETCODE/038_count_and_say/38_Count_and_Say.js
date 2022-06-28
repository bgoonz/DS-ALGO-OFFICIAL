/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function (n) {
  if (n === null || n.length === 0) {
    return "";
  }

  let cur = "1";
  let num = 1;

  while (n > 1) {
    let r = "";

    for (let i = 0; i < cur.length; i++) {
      if (i < cur.length - 1 && cur[i] === cur[i + 1]) {
        num++;
      } else {
        r += num + "" + cur[i];
        num = 1;
      }
    }

    cur = r;
    n--;
  }
  return cur;
};

//  let countAndSay = function(n) {
//      let str = '1';

//     for( let i = 1; i < n; i++) {
//          let newStr = '';
//          let count = 1;

//         for( let j = 1; j < str.length; j++) {
//             if(str[j] === str[j - 1]) {
//                 count++;
//             } else {
//                 newStr += count + str[j - 1];
//                 count = 1;
//             }
//         }

//         newStr += count + str[j - 1];
//         str = newStr;
//     }

//     return str;
// };
