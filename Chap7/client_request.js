/* client_request.js */

var https = require('https');

//options for the HTTP request
var options = {
  hostname: 'flaviocopes.com',
  path: '/',
  port: '443',
  method: 'GET'
};

//the ClientRequest object is created internally when calling https.request()
//this ojbject represents the request while it is in progress.
//the callback function is called after the request is sent to the server
//"response" param is an IncomingMessage object
var req = https.request(options, function(response){
  var str = '';

  //event handler when response is getting data
  response.on('data', function(chunk){
    str += chunk;
  });

  //event handler when it is the end of the transfer
  response.on('end', function(){
    console.log(str);
  });
});

//end the request
req.end();