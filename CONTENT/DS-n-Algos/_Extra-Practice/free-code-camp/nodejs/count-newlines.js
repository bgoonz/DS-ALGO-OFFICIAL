var fs = require('fs');

var file = fs.readFileSync(process.argv[0]);

var arr = file.toString();

console.log(arr.split('\n').length - 1);