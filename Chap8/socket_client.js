/* socket_client.js */

//NodeJS that shows the full implementation of a basic TCP socket server

//load the 'net' module
var net = require('net');

function getConnection(connName){
  //method to create a socket
  //options is an object that contains the host and port to connect to
  //last parameter is a callback to a function when the connection is established
  var client = net.connect({port: 8107, host:'localhost'}, function(){
    console.log(connName + ' Connected ');
    console.log('     local = %s:%s', this.localAddress, this.localPort);
    console.log('     remote = %s:%s', this.remoteAddress, this.remotePort);

    //set the connection behavior: timeout and encoding
    this.setTimeout(500);
    this.setEncoding('utf8');

    //Event handler for the data event
    this.on('data', function(data){
      console.log(connName + " From Server: " + data.toString());
      this.end();
    });

    this.on('end', function(){
      console.log(connName + ' Client Disconnected')
    });

    this.on('error', function(err){
      console.log('Socket Error: ', JSON.stringify(err));
    });

    //Event handler for the timeout event
    this.on('timeout', function(){
      console.log('Socket Timeout');
    });

    this.on('close', function(){
      console.log('Socket Closed');
    });
  });

  return client;
}

function writeData(socket, data){
  var success = socket.write(data);

  if (!success){
    (function(socket, data){
      socket.once('drain', function(){
        writeData('socket', data);
      });
    })(socket, data);
  }
}

//opens three conections
var Test1 = getConnection("Test1");
var Test2 = getConnection("Test2");
var Test3 = getConnection("Test3");

writeData(Test1, "Test 1 Connection");
writeData(Test2, "Test 2 Connection");
writeData(Test3, "Test 3 Connection");