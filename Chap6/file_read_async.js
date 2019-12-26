/* file_read_async.js */

//How to read file in async mode

var fs = require('fs');

function readFruit(fd, fruits){
  var buf = new Buffer(5);

  buf.fill();

  //fd: file descriptor
  //buf: block of memory where the info from the read file will be stored
  //null: index in the buffer to begin writing data, should be null
  //5: number of bytes to read from the file
  //null: position in the file to begin reading file
  fs.read(fd, buf, null, 5, null, function(err, bytes,data){
    if (bytes > 0){
      console.log("read %d bytes", bytes);
      //concat data read from file
      fruits += data;
      //call to readFruit() again, nested calls, this ensures the async call completes before another
      //executes
      readFruit(fd, fruits);
    } else {
      fs.close(fd, function(err){
        if (err){
          console.log("Error closing file");
        }
      });
      console.log("Fruits read: %s", fruits);
    }
  });
}

//open the file, and then do a call to readFruit()
fs.open("../fruits.txt", "r", function(err, fd){
  readFruit(fd, "");
});