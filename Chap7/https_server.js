/* https_server.js */

var fs = require('fs');

var https = require('https');

//create an https server
var options = {
  key: fs.readFileSync('test/server.pem'),
  cert: fs.readFileSync('test/server.crt')
};

https.createServer(options, function(req, res){
  res.writeHead(200);
  res.end("Hello SSL World\n");
}).listen(8080);