/* fs_open.js */

var fs = require('fs');

fs.open("/tmp/test", "w+", 666, function(err, fd){
  if (!err){
    console.log("File Opened for writing!");
    //fs.close(fd);
  }
});