// import fs from "fs";
// const filteredFiles = [];
//
// export default (dir, ext, callback) => {
//   fs.readdir(dir, (err, files) => {
//     if (err) return callback(err);
//     for (file in files) {
//       if (files[file].includes(`.${ext}`)) {
//         filteredFiles.push(files[file]);
//       }
//     }
//     callback(null, filteredFiles);
//   });
// };
// import fs from "fs";
let fs = require("fs");
const filteredFiles = [];
function consoleLogger(results) {
  console.log("hi");
  return filteredFiles;
}

function search4Extension(dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    for (file in files) {
      if (files[file].includes(`.`)) {
        filteredFiles.push(files[file]);
      }
    }
    callback(null, filteredFiles);
  });
}
search4Extension("./../../", "js", consoleLogger);
