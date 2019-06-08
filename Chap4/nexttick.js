/* Illustrates the execution order of events when using a blocking I/O call, timers, and nextTick() */
var fs = require("fs");

//blocking I/O call, will be executed first
fs.stat("nexttick.js", function(err, stats){
  if (stats) {
    console.log("nexttick.js exists");
  }
});

//the callback function will be placed on the event queue and popped off once
//for each iteration through the event queue loop afther I/O events have a chance to
//be called
setImmediate(function(){
  console.log("Immediate Timer 1 Executed");
});

setImmediate(function(){
  console.log("Immediate Timer 2 Executed");
});


//the callback function will be placed on the event queue and will be
//executed before the I/O events are fired
process.nextTick(function(){
  console.log("Next Tick 1 is executed");
});

process.nextTick(function(){
  console.log("Next Tick 2 is executed");
});