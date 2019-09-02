/* file_write_sync.js */

//to write to a file synchronously, first open t using openSync() to get a file descriptor, and the
//use fs.writeSync() to write data to file.

var fs = require('fs');

var veggieTray = ['carrots', 'celery', 'olives'];

//open the file and get the file descriptor
fd = fs.openSync("/tmp/veggie.txt", "w");

while (veggieTray.length){
  veggie = veggieTray.pop() + " ";

  //first parameter: file descriptor
  //second parameter: data to write to the file
  //third parameter: offset, index in the data to begin reading from
  //fourth parameter: number of bytes to write to the fil
  //fifth parameter: position in the file to begin writing
  var bytes = fs.writeSync(fd, veggie, null, null)
  console.log("Wrote %s , %d bytes", veggie, bytes);
}

fs.closeSync(fd);