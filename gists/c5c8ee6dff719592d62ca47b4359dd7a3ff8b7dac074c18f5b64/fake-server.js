var https = require('https');
var fs = require('fs');

var sslOptions = {
    key: fs.readFileSync('localhost.key'),
    cert: fs.readFileSync('localhost.crt')
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var code = process.env.CODE || 200;
var timeout = process.env.TIMEOUT || 0;

https.createServer(sslOptions ,function (req, res) {
  res.writeHead(code, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'});

  setTimeout(function() {
      res.end('BAM!');
  }, timeout);
}).listen(10000, function() {
    console.log('Server running');
});
