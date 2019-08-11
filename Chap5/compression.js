/* compression.js */

var zlib = require('zlib');

const input = '.................................';

zlib.deflate(input, (err, buffer) => {
  if (!err) {
    console.log(buffer.toString('base64'));
  } else {
    // handle error
  }
})