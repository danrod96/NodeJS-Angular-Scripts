/* stream_duplex.js */

//A Duplex stream is a stream that combines Readable and Writable functionality.

//To implement the Duplex stream object, the object needs to inherit the functionality for
//Duplex streams

//include the 'stream object'
var stream = require('stream');

var util = require('util');

//inherits the functionality for the Duplex streams, the Duplexer class will inherit that
util.inherits(Duplexer, stream.Duplex);

//creating the new Duplexer class
function Duplexer(opt){
  //create an instance of the object call
  stream.Duplex.call(this, opt);
  //data will have the items written by the "write" method
  this.data = [];
}

//Implementing the mandatory read method
Duplexer.prototype._read = function readItem(size){
  //The shift method removes the first element from an array and returns that removed element. This method changes the length of the array
  //In this case, gets the first item from the read stream (buffer)
  var chunk = this.data.shift();

  //if the item is equal to "stop", pushes 'null' to the calling function
  if (chunk == "stop"){
    this.push(null);
  } else {
    if (chunk){
      //if there is data, pushes it to the calling function
      this.push(chunk);
    } else {
      //sets a timeout to call '_read' again
      setTimeout(readItem.bind(this), 500, size);
    }
  }
};

//Implementing the mandatory write method
//this write function stores data in an array in the object
Duplexer.prototype._write = function(data, encoding, callback){
  this.data.push(data);
  callback();
};

//instance of the Duplexer class
var d = new Duplexer();

//attach 'data' event to the inline function
//chunk is an item read for the stream
d.on('data', function(chunk){
  console.log('read', chunk.toString());
});

//attach 'end' even to the inline function
d.on('end', function(){
  console.log('Message Complete');
});

d.write("I think, ");
d.write("therefore ");
d.write("I am. ");
d.write("Rene Descartes");
d.write("stop");