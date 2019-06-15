/* buffer_copy.js: Many examples to copy data from one Buffer object to another */

var alphabet = new Buffer("abcdefghiklmnopqrstuvwxyz");

console.log(alphabet.toString());

//copy full Buffer, of size 26 bytes
var blank = new Buffer(26);

//fill it with 0's
blank.fill();

console.log("Blank: " + blank.toString());

//copy the contents of the alphabet buffer into the blank buffer
alphabet.copy(blank);

console.log("Blank: " + blank.toString());

//copy part of the buffer
var dashes = new Buffer(26);

dashes.fill('-');

console.log("Dashes: " + dashes.toString());

//start from byte 10 on dashes, copy from alphabet, byte 10 to 15 
alphabet.copy(dashes, 10, 10, 15);

console.log("Dashes: " + dashes.toString());

//copy to and from direct indexes of buffers
var dots = new Buffer('----------------------------------------');

dots.fill('.')

console.log("Dots: " + dots.toString());

for (var i = 0; i < dots.length; i++){
  if (i % 2) {
    dots[i] = alphabet[i];
  }
}

console.log("Dots: " + dots.toString());