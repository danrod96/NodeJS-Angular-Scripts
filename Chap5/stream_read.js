/* stream_read.js: Implementing a Readable stream object */

var stream = require('stream');

//to implement a custom Readable stream object, we need to inherit the functionality
//for Readable streams. The simplest way to do this is to use the util module's inherit method

//The Answers class inherits from Readable
var util = require('util');
util.inherits(Answers, stream.Readable);

//Creating the class Answers
function Answers(opt){
  //create an instance of the object call
  stream.Readable.call(this, opt);
  this.quotes = ["yes", "no", "maybe", "no way", "perhaps", "for sure"];
  this._index = 0;
}

//implements the Answers.prototype._read() to handle pushing data out
Answers.prototype._read = function(){
  if (this._index > this.quotes.length){
    //no more data to send
    this.push(null);
  } else {
    this.push(this.quotes[this._index]);
    this._index += 1;
  }
};

var r = new Answers();

//read the first item of the stream
console.log("Direct read: " + r.read().toString());

//this data event handler reads the rest of items
r.on('data', function(data){
  console.log("Callback read:" + data.toString());
});

r.on('end', function(data){
  console.log("No more answers.");
});