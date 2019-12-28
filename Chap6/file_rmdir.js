/* file_rmdir.js */

//shows how to create directories async
var fs = require('fs');

fs.rmdir("./data/folderA/folderB", function(err){
  fs.rmdir("./data/folderA", function(err){
    if (err) throw err;
    console.log("Directories deleted");
  });
});