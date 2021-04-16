var fs = require('fs');

var ext = process.argv[3].toString();

var data = fs.readdir(process.argv[2], (err, files) => {
    if (err) throw err;
    for (file in files) {
        if (files[file].includes('.'+ext)) {
            console.log(files[file]);
        }
    }
});