/* file_read_sync.js */
//example on syncronous file reading

var fs = require('fs');

//open file in sync mode
fd = fs.openSync("../config.txt", "r");

var veggies = "";

do {
  var buf = new Buffer(5);

  buf.fill();

  //fd: file descriptor
  //buffer: block of memory where the info from the read file will be stored
  //null: index in the buffer to begin writing data, should be null
  //5: number of bytes to read from the file
  var bytes = fs.readSync(fd, buf, null, 5);

  console.log("read %d bytes", bytes);

  //convert from buffer to String, and concat it
  veggies += buf.toString();
} while (bytes > 0);

fs.closeSync(fd);

console.log("Veggies: " + veggies);

