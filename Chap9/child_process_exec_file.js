/* child_process_exec_file.js */

//executing an executable file in another process
var childProcess = require('child_process');

var options = {maxBuffer:100*1024, encoding: 'utf8', timeout:5000};

//call to method for running a command on a children process, very similar to exec()
var child = childProcess.execFile('ping', ['-c', '1', 'google.com'], options, function(error, stdout, stderr){
  if (error){
    console.log(error.stack);
    console.log('Error Code: ' + error.code);
    console.log('Error Signal: ' + error.signal);    
  }

  console.log('Results \n' + stdout);

  if (stderr.length){
    console.log('Errors: ' + stderr);
  }
});

child.on('exit', function(code){
  console.log('Completed with code: ' + code);
});