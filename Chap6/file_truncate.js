/* file_truncate.js */

var fs = require('fs');

fs.writeFile("/tmp/test.txt", "Learn NodeJS by examples", function(error){
  if (error) throw error;
  console.log("File created OK!");
});

fs.truncate("/tmp/test.txt", 4, function(err){
  console.log(err ? "File Truncate Failed" : "File Truncated");
});
