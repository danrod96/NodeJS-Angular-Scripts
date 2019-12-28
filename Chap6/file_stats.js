/* file_stats.js */

//This NodeJS script illustrates the use of the fs.stat() call, it returs a Stats object, it has
//attribs and methods for querying file information

var fs = require('fs');

fs.stat('/dev/null', function(err, stats){
  if (!err){
    console.log('stats: ' + JSON.stringify(stats, null, ' '));
    console.log(stats.isFile() ? "It is a file" : "It is not a file");
    console.log(stats.isDirectory() ? "It is a directory" : "It is not a directory");
    console.log(stats.isSocket() ? "It is a socket" : "It is not a socket");
    stats.isDirectory();
    stats.isBlockDevice();
    stats.isCharacterDevice();
    stats.isFIFO();
    stats.isSocket();
    console.log(stats.mode);
    console.log(stats.size);
  }
});