/* file_write_async.js */

//This NodeJS file shows how to do async writing in chunks of data
//You need to be careful when doing multile async write requests on the same file
//because you cannnot guarantee the execution order unless you wait for the first
//write callback before executing the next one.

//This file nests write requests inside the callback functions in order to guarantee that.
var fs = require('fs');

var fruitBowl = ['apple', 'orange', 'banana', 'grapes'];

//first open the file
fs.open("/tmp/fruit.txt", "w", function(err, fd){
  writeFruit(fd);
});

function writeFruit(fd){
  if (fruitBowl.length){
    //The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
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