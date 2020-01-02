/* http_client_post.js */

//A basic HTTP client that sends JSON data to the server using POST and then handles the JSON 
//response

var http = require('http');

var options = {
  host: 'localhost',
  path: '/',
  port: '8080',
  method: 'POST'
};

function readJSONResponse(response){
  var responseData = "";

  response.on("data", function(chunk){
    responseData += chunk;
  });

  response.on("end", function(chunk){
    var dataObj = JSON.parse(responseData);

    console.log("Message: " + dataObj.message);
    console.log("Question: " + dataObj.question);
  });
}

//do a request
var req = http.request(options, readJSONResponse);
req.write('{"name":"Bimbo", "occupation":"waiter"}');
req.end();