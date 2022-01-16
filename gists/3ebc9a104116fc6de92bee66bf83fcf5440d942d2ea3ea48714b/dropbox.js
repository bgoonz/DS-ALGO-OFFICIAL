var request = require('request');

var URL = 'https://content.dropboxapi.com/2/files/upload';
var API_KEY = 'your_api_key_goes_in_here';

exports.upload = function(upload, cb) {
    var options = {
        url: URL,
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + API_KEY,
            'Content-Type': 'application/octet-stream',
            'Content-Length': upload.deliveryUploadSize,
            'Dropbox-API-Arg': JSON.stringify({
                path: '/' + upload.deliveryUploadFilename,
                mode: 'add',
                autorename: true,
                mute: false
            })
        },
        body: new Buffer(stripBase64Data(upload.deliveryUpload), 'base64')
    };
    request(options, cb);
};

function stripBase64Data(data) {
    var start = data.indexOf(',');
    return data.substr(start);
}
