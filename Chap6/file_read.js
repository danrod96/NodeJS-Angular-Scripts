/* file_read.js */

//Implementing a simple async readFile()
//This NodeJS script shows how to implement a simple async readFile() call to read a JSON
//object

var fs = require('fs');

//read options
var options = {encoding: 'utf8', flag: 'r'};

//readFile() async call
fs.readFile("../config.txt", options, function(err, data){
  if (err){
    console.log("Failed to open Config File.");
  } else {
    console.log("Config Loaded.");

    //parse JSON object
    var config = JSON.parse(data);

    console.log("Max Files: " + config.maxFiles);
    console.log("Max Connections: " + config.maxConnections);
    console.log("Root Path: " + config.rootPath);
    console.log("Hostname: " + config.hostname);
  }
});