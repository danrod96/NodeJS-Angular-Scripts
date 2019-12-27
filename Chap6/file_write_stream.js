/* file_write_stream.js */

//Implementing a "Writable" stream to allow streaming writing to a file
//"Writable" streams can easily be implemented and linked to "Readable" streams using
//the pipe() method, this makes it very easy to write data from a "Readable" stream source
//such as an HTTP request

var fs = require('fs');

var grains = ["rice", "beans", "chickpeas", "black beans", "pinto beans", "lentils"];

//options for the createWriteStream() method
var options = {
  'encoding': 'utf8',
  'flag': 'w'
};

//creating a writable stream
var fileWriteStream = fs.createWriteStream("/tmp/grains.txt", options);

//event listener, listens for the "close" event triggered by the end() method
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