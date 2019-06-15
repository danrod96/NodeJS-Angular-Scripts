/* buffer_length.js */

bufUTF8 = new Buffer("UTF8 text \u00b6");

var str = "UTF8 text \u00b6";

//get the length of the buffer (string), returns 11
console.log(str.length);

//get the byte length of the buffer, returns 12, because of the last character taking two bytes
console.log(Buffer.byteLength("UTF8 text \u00b6", "utf8"));

//this returns 12 too
console.log(bufUTF8.length);


