/* http_server_static.js */

//Implementing a basic static file webserver

//loading the modules required for the webserver
var fs = require('fs');
var http = require('http');
var url = require('url');

var ROOT_DIR = "html/";

//start the http server (creates a Server object) and listens to the port 8080, defines the event handler as well
//the callback is the request handler
//when creating the server, emits a few events.
//the callback accepts these two parameters:
//req: IncomingMessage object, which is the client request
//res: ServerResponse object, used to formulate and send the response
http.createServer(function(req, res){
  //parse the URL
  var urlObj = url.parse(req.url, true, false);

  //open the file locally
  //the readFile callback will write the contents of the file to the client
  fs.readFile(ROOT_DIR + urlObj.pathname, function(err, data){
    //html file not found
    if (err){
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }

    res.writeHead(200);
    res.end(data);
  });
  //once the server is created, begin listening to it by calling the listen() method.
}).listen(8080);