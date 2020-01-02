/* http_client_get.js */

//A basic web client making a GET request to the dynamic server

var http = require('http');

//options for the request
var options = {
  hostname: 'localhost',
  port: '8080',
};

function handleResponse(response){
  var serverData = "";

  //event handler
  response.on('data', function(chunk){
    serverData += chunk;
  });

  //event handler
  response.on('end', function(){
    console.log("Response Status: " + response.statusCode);
    console.log("Response Headers: " + JSON.stringify(response.headers));
    console.log(serverData);
  });
}

//send a request to the server, don't forget to call end() to finalize the response and flush
//the writable stream
//callback argument is a response object, then call the custom handler
http.request(options, function(response){
  handleResponse(response);
}).end();