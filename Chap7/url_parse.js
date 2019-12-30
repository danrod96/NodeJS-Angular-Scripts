/* url_parse.js */

//NodeJS script to illustrate the use of the "url" module, which provides functionality
//to convert a URL string into an object

var url = require('url');

//url
var urlStr = "https://www.skyscrapercity.com/forumdisplay.php?f=1888";

//convert URL string into an URL object
var urlObj = url.parse(urlStr, true, false);

console.log("URL information:");

//properties of the URL object returned by url.parse()
console.log("Protocol: " + urlObj.protocol);
console.log("Host: " + urlObj.host);
console.log("Port: " + urlObj.port);
console.log("Path: " + urlObj.path);