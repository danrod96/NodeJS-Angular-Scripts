/* process_stdin.js */

//the process module is a global object that can be accessed from the NodeJS app
//without the need to use 'require'
//this module gives access to the running process and the hardware architecture

//the process module provides access to the standard I/O pipes for stdin, stdout and stderr
//this reads from the console
process.stdin.on('data', function(data){
  console.log("Console Input: " + data);
});