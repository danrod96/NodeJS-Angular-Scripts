/* stream_write.js: Implementing a Writable stream object */

//To implement my own custom Writable stream object, I will need to inherit the functionality
//for writable streams, for that I will use the util module's inherit method.
var stream = require('stream');

var util = require('util');

//inherit the functionality for writable streams
util.inherits(Writer, stream.Writable);

//creating new class Writer
function Writer(opt){
  //create an instance of the object call
  stream.Writable.call(this, opt);
  //data will have the items written by the "write" method
  this.data = new Array();
}

//Implementing the _write method that stores the data for the Writable object
//Writable streams provide the "write" method to write data into the stream.
//data contains the data to write into the stream
Writer.prototype._write = function(data, encoding, callback){
  //The push() method adds one or more elements to the end of an array and returns the new length of the array.
  this.data.push(data.toString('utf8'));
  console.log("Adding: " + data);
  callback();
};

//creating an instance of the Writer object
var w = new Writer();

for (var i = 1; i <= 5; i++){
  //method for writing the data chunk to the stream object's data location
  w.write("Item " + i, "utf8");
}

//sends the finish event, but writes "ItemLast" before
w.end("ItemLast");

//we need to print the data property explicitely
console.log(w.data);


