/* http_server_get.js */

//Implements a basic GET dynamic webserver
var http = require('http');

var messages = [
  'Hello World',
  'This is a basic Node.js server',
  'Good Luck!'
];

//the callback is the request handler
//when creating the server, emits a few events.
//the callback accepts these two parameters:
//req: IncomingMessage object, which is the client request
//res: ServerResponse object, used to formulate and send the response
http.createServer(function(req, res){
  //set Request Header
  res.setHeader("Content-Type", "text/html");
  //sends a 200 response status code
  res.writeHead(200);
  //Write a chunk of data out to the response Writable stream
  res.write("<html><head><title>Simple HTTP Server</title></head>");
  res.write("<body>");

  for (var idx in messages){
    res.write("\n<h1>" + messages[idx] + "</h1>");
  }

  res.end("\n</body></html>");
}).listen(8080);