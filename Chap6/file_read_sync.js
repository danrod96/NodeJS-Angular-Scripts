/* file_read_sync.js */
//example on syncronous file reading

var fs = require('fs');

fs.exists("../config.txt", function(exists){
  console.log(exists ? "Path Exists" : "Path Does Not Exist");
});


//open file in sync mode
fd = fs.openSync("../config.txt", "r");

var info = "";

do {
  var buf = new Buffer.alloc(5);

  //fill buffer with zero's
  buf.fill();

  //fd: file descriptor
  //buffer: block of memory where the info from the read file will be stored
  //null: index in the buffer to begin writing data, should be null
  //5: number of bytes to read from the fileo
  //this method returns the number of bytes read
  var bytes = fs.readSync(fd, buf, null, 5);

  console.log("read %d bytes", bytes);

  //convert from buffer to String, and concat it
  info += buf.toString();
} while (bytes > 0);

fs.closeSync(fd);

console.log("info: " + info);

