/* Implements a series of update callbacks at various intervals */

/* Interval timers are used to perform work on a regular delayed interval.
 * When the delay time expires, the callback function is executed and is then re-scheduled 
 * to be executed again, and so on. */
var x = 0, y = 0, z = 0;

function displayValues(){
  console.log("X = %d, Y = %d, Z = %d", x, y, z);
}

function updateX(){
  x += 1;
}

function updateY(){
  y += 1;
}

function updateZ(){
  z += 1;
  displayValues();
}

//setInterval creates an intervar timer

//this sets the callback function updateX to be executed every 500 milliseconds
setInterval(updateX, 500);

//updateY to be executed every 1000 milliseconds
setInterval(updateY, 1000);

setInterval(updateZ, 2000);