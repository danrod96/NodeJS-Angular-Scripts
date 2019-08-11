/* stream_piped.js: This NodeJS script implements a Readable Stream and a Writable stream
 * and chains them together */

var stream = require('stream');

var util = require('util');

//The Answers class inherits from Readable
util.inherits(Reader, stream.Readable);

//inherit the functionality for writable streams
util.inherits(Writer, stream.Writable);

//Creating the class Reader
function Reader(opt){
  stream.Readable.call(this, opt);
  this._index = 1;
}

//implementing the _read method
Reader.prototype._read = function(size){
  var i = this._index++;

  if (i > 10){
    this.push(null);
  } else {
    this.push("Item " + i.toString());
  }
};

//creating new class Writer
function Writer(opt){
  stream.Writable.call(this, opt);
  this._index = 1;
}

Writer.prototype._write = function(data, encoding, callback){
  //writes to the output stream directly
  //the data input from this method is going to the console
  console.log(data.toString());
  callback();
}

var r = new Reader();
var w = new Writer();

//inputs the output from the Reader object directly into the Writer object
r.pipe(w);