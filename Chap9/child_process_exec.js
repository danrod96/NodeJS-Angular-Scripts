/* child_process_exec.js */

//shows an example of executing a system command using the exec() function
//the simplest way to add work to another process from a NodeJS process is to execute a system
//command in a subshell

//the exec() method belongs to the child_process module, which is used for creating child
//processes and execute work on them.

//creates a childProcess object, which is a representation of a child process
var childProcess = require('child_process');

//options for the exec() method
var options = {maxBuffer:100*1024, encoding:'utf8', timeout:5000};

//execute the "ls -l" command on the children, options for the settings to use for the
//execution, callback funcion has the error info or output of  the command
var child = childProcess.exec("ls -l", options, function(error, stdout, stderr){
  if (error){
    console.log(error.stack);
    console.log('Error Code: ' + error.code);
    console.log('Error Signal: ' + error.signal);
  }

  console.log('Results: \n' + stdout);

  if (stderr.length){
    console.log('Errors: ' + stderr);
  }
});

child.on('exit', function(code){
  console.log('Completed with code: ' + code);
});