/* file_write_stream.js */

//Implementing a "Writable" stream to allow streaming writing to a file

var fs = require('fs');

var grains = ["rice", "beans", "chickpeas"];

var options = {
  'encoding': 'utf8',
  'flag': 'w'
};

//creating a writable stream
var fileWriteStream = fs.createWriteStream("/tmp/grains.txt", options);

//event listener
fileWriteStream.on("close", function(){
  console.log("File Closed");
});

//write to the stream
while (grains.length){
  var data = grains.pop() + " ";
  fileWriteStream.write(data);
  console.log("Wrote: %s", data);
}

fileWriteStream.end();