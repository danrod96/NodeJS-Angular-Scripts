/* creating a wrapper function to provide closure for variables 
 * needed in the asyncronous callback */
 function logCar(logMsg, callback){
  process.nextTick(function(){
    callback(logMsg);
  });
 }

 var cars = ["Ferrari", "Porsche", "Bugatti"];

 for (var idx in cars){
  var message = "Saw a " + cars[idx];

  logCar(message, function(){
    console.log("Normal callback: " + message)
  });
 }

  for (var idx in cars){
  var message = "Saw a " + cars[idx];

  (function(msg){
    logCar(message, function(){
      console.log("Closure callback: " + msg)
    });
  })(message);
 }