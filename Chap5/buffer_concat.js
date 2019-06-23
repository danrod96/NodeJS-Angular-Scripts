/* buffer_concat.js */

var solaris = new Buffer("Use Solaris");

var aix = new Buffer("Use AIX");

var question = new Buffer("What UNIX flavour should I use? ");

console.log(Buffer.concat([question, solaris]).toString());

console.log(Buffer.concat([question, aix]).toString());