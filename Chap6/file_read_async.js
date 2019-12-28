/* file_read_async.js */

//How to read file in async mode
//The async method of file reading puts the read request on the event queue and
//then returns control back to the calling code. The actual read does not take place until the 
//event loop picks up the read request and executes it. You cannot guarantee the execution order

//This script uses nested calls in order to make sure the read calls are called in order

var fs = require('fs');

//check if the file exists
fs.exists("../fruits.txt", function(exists){
  console.log(exists ? "Path Exists" : "Path does not Exist");
});

//open the file, and then do a call to readFruit()
fs.open("../fruits.txt", "r", function(err, fd){
  readFruit(fd, "");
});

function readFruit(fd, fruits){
  //creates a buffer to hold the read data
  var buf = new Buffer.alloc(5);

  buf.fill();

  //fd: file descriptor
  //buf: block of memory where the info from the read file will be stored
  //null: index in the buffer to begin writing data, should be null
  //5: number of bytes to read from the file
  //null: position in the file to begin reading file
  fs.read(fd, buf, null, 5, null, function(err, bytes, data){
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