/* url_resolve.js */

//shows how to use the resolve() method, for making adjustments to the URL

var url = require('url');

//original URL
var originalUrl = "https://www.skyscrapercity.com/forumdisplay.php?f=1888";

//new Path/Resource
var newResource = "/wps/portal/Colombia/transacciones-personas/rastreo-envios";

//change Path of the URL to the new newResource location
console.log(url.resolve(originalUrl, newResource));