/* http_client_static.js */

//shows a basic implementation of an HTTP client
var http = require('http');

//options for the request
var options = {
  hostname: 'localhost',
  port: '8080',
  path: '/test.html'
};

function handleResponse(response) {
  var serverData = '';

  //event handler triggered when data is being read
  response.on('data', function(chunk){
    serverData += chunk;
  });

  //event handler when connection is finished.
  response.on('end', function(err){
    console.log(serverData);
  })
}

//sends a GET request, the callback function will call a handler function, passing the response
//object as argument
http.request(options, function(response){
  handleResponse(response);
}).end();