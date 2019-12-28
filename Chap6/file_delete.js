/* file_delete.js */

var fs = require('fs');

fs.writeFile("/tmp/test.txt", "Learn NodeJS by examples", function(error){
  if (error) throw error;
  console.log("File created OK!");
});

fs.unlink("/tmp/test.txt", function(err){
  console.log(err ? "File Deletion Failed" : "File Deleted");
});