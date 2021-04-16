var fs = require('fs'), listmodule = require('./make-modular-module');

listmodule(process.argv[2], process.argv[3], function (err, files) {
    if (err)
        console.log(err);
    files.forEach(function (file) {
        console.log(file);
    })
});