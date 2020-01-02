/* http_server_post.js */

//Implementing a basic HTTP server that handles HTTP POST requests

var http = require('http');

//the callback is the request handler
//when creating the server, emits a few events.
//the callback accepts these two parameters:
//req: IncomingMessage object, which is the client request
//res: ServerResponse object, used to formulate and send the response
http.createServer(function(req, res){
  var jsonData = "";

  req.on("data", function(chunk){
    jsonData += chunk;
  });

  req.on("end", function(){
    //convert JSON string into an object
    var reqObj = JSON.parse(jsonData);

    var resObj = {
      message: "Hello " + reqObj.name,
      question: "Are you a good " + reqObj.occupation + " ?"
    };

    res.writeHead(200);
    res.end(JSON.stringify(resObj));
  });
}).listen(8080);