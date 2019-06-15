/* buffer_write.js: This script illustrates the use of Buffers in NodeJS */

//define a buffer of 256 bytes
buff256 = new Buffer(256);

//writes the value '0' to every byte in the buffer.
buff256.fill(0);

//converts the buffer to string
console.log(buff256.toString());

//writes some text at the beginning of the buffer
buff256.write("Add some text");

console.log(buff256.toString());

//add some text, starting at the 9 index
buff256.write("more text", 9, 9);

console.log(buff256.toString());

//adds + at the index 18
buff256[18] = 43;

console.log(buff256.toString());
