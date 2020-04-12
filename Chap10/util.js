/* util.js */

//examples on how to use the util module for a few tasks
util = require('util');

//using the format() method for formatting strings
console.log(util.format("%s = %s", 'Util1', 'Util2'));
console.log(util.format(1, 2, 3));

//checking object types
console.log(util.isArray([1, 2, 3]));

//sync writing to output streams
util.debug("This is a debug string");
util.error(500, "Error issued");
util.log('Some Message');

//Using the inspect() method for control the output of an object
var obj = { first:'Brad', last:'Pitt' };

obj.inspect = function(depth){
  return '{ name: ' + this.first + ' ' + this.last + ' }';
};

console.log(util.inspect(obj));