/* client_request.js */

var https = require('https');

var options = {
  hostname: 'flaviocopes.com',
  path: '/',
  port: '443',
  method: 'GET'
};

var req = https.request(options, function(response){
  var str = '';

  response.on('data', function(chunk){
    str += chunk;
  });

  response.on('end', function(){
    console.log(str);
  });
});

req.end();