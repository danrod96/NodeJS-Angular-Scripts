/* buffer_slice.js: Examples of slicing buffer */

var numbers = new Buffer("123456789");

console.log(numbers.toString());

//this returns a Buffer object that points to the byte 3 of numbers
//this is like a pointer in C
var slice = numbers.slice(3, 6);

console.log(slice.toString());

slice[0] = "#".charCodeAt(0);

slice[slice.length - 1] = "#".charCodeAt(0);

console.log(slice.toString());
console.log(numbers.toString());
