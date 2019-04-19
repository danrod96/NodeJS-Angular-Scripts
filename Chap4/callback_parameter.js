/* Creating an anonymous function to add additional parameters 
 * that are not emitted by the event */

 var events = require('events');

 function CarShow(){
  events.EventEmitter.call(this);

  this.seeCar = function(make){
    this.emit("sawCar", make);
  };
 }

 CarShow.prototype.__proto__ = events.EventEmitter.prototype;

 var show = new CarShow();

 function logCar(make){
  console.log("Saw a " + make);
 }

 function logColorCar(make, color){
  console.log("Saw a %s %s", color, make);
 }

 show.on("sawCar", logCar);
 show.on("sawCar", function(make){
  var colors = ['red', 'blue', 'green'];
  var color = colors[Math.floor(Math.random() * 3)];
  logColorCar(make, color);
 });

 show.seeCar("Ferrari");
 show.seeCar("Porshe");
 show.seeCar("Lamborghini");
 show.seeCar("Porshe");