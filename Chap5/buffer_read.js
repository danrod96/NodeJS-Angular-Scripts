/* buffer_read.js */

//defines a buffer with UTF8 encoded characters
bufUTF8 = new Buffer("Some UTF8 Text \u00b6 \u30c6 \u20ac", "utf8");

//uses toString() without params to read all the buffer
console.log(bufUTF8.toString());

//read part of the buffer
console.log(bufUTF8.toString('utf8', 5, 9));

//creates a StringDecoder with UTF8 encoding and uses it to write
//the contents of the buffer out to the console
var StringDecoder = require('string_decoder').StringDecoder;

var decoder = new StringDecoder('utf8');

console.log(decoder.write(bufUTF8));

//gets the value of the buffer at byte 18, in binary format
console.log(bufUTF8[18].toString(2));

//gets the value of the buffer at byte 18, in decimal format
console.log(bufUTF8[0].toString(10));


//reads a 32-bit integer, starting from byte 0./
console.log(bufUTF8.readUInt32BE(0).toString(10));
