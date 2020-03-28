/* socket_sample_server.js */

//The following code shows the basics of implementing the Server object

var net = require('net');

//creates a Server Object, this method returns a Socket object when the server
//receives a connection
var server = net.createServer(function(client){
  console.log('Client Connected');

  //event handler for handling the data sent from the client
  client.on('data', function(data){
    console.log('Client sent: ' + data.toString());
  });

  //event handler for dealing with the client closure
  client.on('end', function(){
    console.log('Client Disconnected');
  });

  client.write('Hello');
});

//Opens a port on the server and begins listening for connections
server.listen(8107, function(){
  console.log("Server listening for connections");
});