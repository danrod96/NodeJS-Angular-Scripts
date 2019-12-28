/* file_mkdir.js */

//shows how to create directories async
var fs = require('fs');

//when using the async method, you could chain together the creation of dir structure

fs.mkdir("./data", function(err){
  fs.mkdir("./data/folderA", function(err){
    fs.mkdir("./data/folderA/folderB", function(err){
      if (err) throw err;
      console.log("Directories created");
    });
  });
});