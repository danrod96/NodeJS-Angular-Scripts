/* zlib_buffers.js: Compressing/Decompressing buffers using the zlib module */

var zlib = require('zlib');

var input = ".....................text.....................";

zlib.deflate(input, function(err, buffer){
  if (!err){
    //compression
    console.log("Compressing");
    //string needs to be transformed to base64, otherwise it's garbage
    console.log("deflate (%s): ", buffer.length, buffer.toString('base64'));

    zlib.inflate(buffer, function(err, buffer){
      if (!err){
        console.log("Decompressing");
        console.log("inflate (%s): ", buffer.length, buffer.toString());
      }
    });

    //decompression
    zlib.unzip(buffer, function(err, buffer){
      if (!err){
        console.log("unzip deflate (%s): ", buffer.length, buffer.toString());
      }
    });
  }
});