/* file_write_async.js */

//an example of how to write to files in async mode

var fs = require('fs');

var fruitBowl = ['apple', 'orange', 'banana', 'grapes'];

function writeFruit(fd){
  if (fruitBowl.length){
    var fruit = fruitBowl.pop() + " ";

    fs.write(fd, fruit, null, null, function(err, bytes){
      if (err){
        console.log("File Write Failed.");
      } else {
        console.log("Wrote: %s %d bytes", fruit, bytes);
        writeFruit(fd);
      }
    });
  } else {
    fs.close(fd, function(err){
      if (err){
        console.log("Error closing file");
      }
    });
  }
}

fs.open("/tmp/fruit.txt", "w", function(err, fd){
    writeFruit(fd);
});