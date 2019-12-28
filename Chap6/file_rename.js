/* file_rename.js */

//shows how to rename files

var fs = require('fs');

fs.writeFile("/tmp/test.txt", "Learn NodeJS by examples", function(error){
  if (error) throw error;
  console.log("File created OK!");
});

fs.rename("/tmp/test.txt", "/tmp/testnew.txt", function(err){
  console.log(err ? "Rename failed" : "File renamed");
});