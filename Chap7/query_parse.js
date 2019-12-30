/* query_parse.js */

var qstring = require('querystring');

//The querystring.parse() method parses a URL query string (str) into a collection of key and value pairs.
//it returns an object
var params = qstring.parse("name=Brad&color=red&");

//object properties are the query params
console.log(params.name);
console.log(params.color);