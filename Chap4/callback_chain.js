/* implements a very basic example of callback chaining */

function logCar(car, callback){
  console.log("Saw a %s", car);

  //as long as there are items inside the array.
  if (cars.length){
    //schedules the callback() to be run on the next cycle of the event loop.
    process.nextTick(function(){
      callback();
    });
  }
}

//a list of items is passed into the function logCars()
function logCars(cars){
  console.log(cars);

  var car = cars.pop();

  //the async function logCar() is called
  logCar(car, function(){
    //the logCars() function is used as the callback when logCar() completes
    logCars(cars);
  }); 
}

var cars = ["Ferrari", "Porsche", "Bugatti", "Lamborghini", "Aston Martin"];

logCars(cars);