/* Creating an anonymous function to add additional parameters 
 * that are not emitted by the event */

 var events = require('events');

 function CarShow(){
  events.EventEmitter.call(this);

  //seeCar method, emits the sawCar EventEmitter event
  //this event emits the make parameter
  this.seeCar = function(make){
    this.emit("sawCar", make);
  };
 }

 CarShow.prototype.__proto__ = events.EventEmitter.prototype;

 var show = new CarShow();

 //callback function, event handler
 function logCar(make){
  console.log("Saw a " + make);
 }

 //callback function, event handler, extra parameter, color
 function logColorCar(make, color){
  console.log("Saw a %s %s", color, make);
 }

 //attaching the event handlers to the event
 show.on("sawCar", logCar);

 //attach the "logColorCar" event handler, but before, a call to an anonymous function is done
 //this call picks a random color and is passed to the call "logColorCar"
 show.on("sawCar", function(make){
  var colors = ['red', 'blue', 'green'];
  var color = colors[Math.floor(Math.random() * 3)];
  logColorCar(make, color);
 });

 show.seeCar("Ferrari");
 show.seeCar("Porshe");
 show.seeCar("Lamborghini");
 show.seeCar("Porshe");