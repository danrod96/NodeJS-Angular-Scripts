/* file_readdir.js */

//Illustrates the use of readdir() for listing files inside a directory

var fs = require('fs');

var Path = require('path');

function WalkDirs(dirPath){
  console.log(dirPath);

  //initial call to readdir
  fs.readdir(dirPath, function(err, entries){
    //parse through the entries
    for (var idx in entries){
      //build full path of the file/directory
      var fullPath = Path.join(dirPath, entries[idx]);

      //nested callback chain
      (function(fullPath){
        fs.stat(fullPath, function(err, stats){
          if (stats && stats.isFile()){
            console.log(fullPath);
          } else if (stats && stats.isDirectory()){
            //nested call if it is another directory
            WalkDirs(fullPath);
          }
        });
      })(fullPath);
    }
  });
}

WalkDirs("/etc");