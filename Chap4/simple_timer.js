
function simpleTimeout(consoleTimer){
  console.timeEnd(consoleTimer)
}

console.time("twoSecond");

//setting a timeout Timer, timeout timers are used to delay work for a specific amount of time.
//when the time expires (this case, 2000 miliseconds),  the callback is executed (simpleTimeout)
//and the timer goes away.
setTimeout(simpleTimeout, 2000, "twoSecond");

console.time("oneSecond");

//simpleTimeout will be executed after 1 second
//prints the number of milliseconds since the timeout was scheduled
setTimeout(simpleTimeout, 1000, "oneSecond");

console.time("fiveSecond");

setTimeout(simpleTimeout, 5000, "fiveSecond");

console.time("50Millisecond");

setTimeout(simpleTimeout, 50, "50Millisecond");

//the setTimeout() function returs a timer object ID, and you can pass this ID to
//clearTimeout(ID) at any time before delayMilliseconds if you want to cancel the timeout function
myTimeout = setTimeout(simpleTimeout, 1000000, "1000000 miliseconds");

clearTimeout(myTimeout);

