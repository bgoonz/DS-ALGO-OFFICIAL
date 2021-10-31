/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
let compareVersion = function (version1, version2) {
  let versionOne = version1.split(".");
  let versionTwo = version2.split(".");
  if (versionOne.length <= versionTwo.length) {
    for (let i = versionOne.length; i < versionTwo.length; i++) {
      versionOne[i] = "0";
    }
  }
  if (versionTwo.length < versionOne.length) {
    for (let i = versionTwo.length; i < versionOne.length; i++) {
      versionTwo[i] = "0";
    }
  }

  for (let i = 0; i < versionOne.length; i++) {
    let versionOneInt = parseInt(versionOne[i]);
    let versionTwoInt = parseInt(versionTwo[i]);
    if (versionOneInt < versionTwoInt) return -1;
    if (versionOneInt > versionTwoInt) return 1;
  }
  return 0;
};
