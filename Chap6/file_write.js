/* file_write.js */

//Shows how to implement a simple async writeFile() request

//load the fs module for file system operation
var fs = require('fs');

//JSON object
var config = {
  maxFiles: 20,
  maxConnections: 15,
  rootPath: "/webroot"
};

//convert the JSON object into a string
var configTxt = JSON.stringify(config);

//write() options
var options = {encoding: 'utf8', flag: 'w'};

//first param: path to file
//second parameter: object that can contain encoding, mode and flag options
//third parameter: callback function (for async write calls):
fs.writeFile('/tmp/config.txt', configTxt, options, function(err){
  if (err){
    console.log("COnfig Write Failed.");
  } else {
    console.log("Config Saved.")
  }
});