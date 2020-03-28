/* socket_server.js */

var net = require('net');

//create the server socket by calling the createServer() method
//the callback handler will have the event handlers
var server = net.createServer(function(client){
  console.log('Client connection: ');
  console.log('   local = %s:%s', client.localAddress, client.localPort);
  console.log('   remote = %s:%s', client.remoteAddress, client.remotePort);

  //set the connection behaviour
  client.setTimeout(500);
  client.setEncoding('utf8');

  //'data' Event Handler
  client.on('data', function(data){
    console.log('Received data from client on port %d: %s', client.remotePort, data.toString());
    console.log(' Bytes Received: ' + client.bytesRead);
    writeData(client, 'Sending: ' + data.toString());
    console.log(' Bytes sent: ' + client.bytesWritten);
  });

  //'end' event handler
  client.on('end', function(){
    console.log('Client Disconnected');

    //Returns the number of connections currently connected to the server
    server.getConnections(function(err, count){
      console.log('Remaining Connections: ' + count);
    });
  });

  //'error' event handler
  client.on('error', function(err){
    console.log('Socket Error: ', JSON.stringify(err));
  });

  //'timeout' event handler
  client.on('timeout', function(){
    client.log('Socket TImed Out');
  });
});

//call listen() to begin listening to the port
server.listen(8107, function(){
  console.log('Server listening: ' + JSON.stringify(server.address()));

  server.on('close', function(){
    console.log('Server Terminated');
  });

  server.on('error', function(err){
    console.log('Server Error: ', JSON.stringify(err));
  })
});

function writeData(socket, data){
  var success = !socket.write(data);

  if (!success){
    (function(socket, data){
      socket.once('drain', function(){
        writeData(socket, data);
      });
    })(socket, data);
  }
}