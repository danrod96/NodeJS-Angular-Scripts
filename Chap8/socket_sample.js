/* socket_sample.js */

/* Sample NodeJS script to illustrate the functionality of the Socket object */

/* Implementation of the Socket object on a client */

//include the 'net' module for using the socket object
var net = require('net');

//method to create a socket
//options is an object that contains the host and port to connect to
//last parameter is a callback to a function when the connection is established
var client = net.connect({port: 80, host: 'cyansolutions.com'}, function(){
  console.log('Client Connected!');
  client.write("Some data\r\n");
});

//Listens to the 'data' event, reads data. This is an event handler
client.on('data', function(data){
  console.log(data.toString());
  client.end();
});

//Listens to the 'end' event, prints a msg.
client.on('end', function(){
  console.log("Client Disconnected");
});