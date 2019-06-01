/* Creating a custom EventEmitter object and implementing three 
 * listeners that are triggered when the balanceChanged event is triggered */

var events = require('events');

//creating the Account object, extending the EventEmitter class
function Account(){
  this.balance = 0;
  events.EventEmitter.call(this);

  //deposit method, emits the "balanceChanged" event
  this.deposit = function(amount){
    this.balance += amount;
    this.emit('balanceChanged');
  };

  //withdraw method, emits the "balanceChanged" event
  this.withdraw = function(amount){
    this.balance -= amount;
    this.emit('balanceChanged');
  };
}

Account.prototype.__proto__ = events.EventEmitter.prototype;

//event handler
function displayBalance(){
  console.log("Account balance: %d", this.balance);
}

//event handler
function checkOverdraw(){
  if (this.balance < 0){
    console.log("Account overdrawn!!!");
  }
}

//another event handler
function checkGoal(acc, goal){
  if (acc.balance > goal){
    console.log("Goal achieved!!!");
  }
}

var account = new Account();

//attaching callback functions to the Account object instance "balanceChanged" event
account.on("balanceChanged", displayBalance);
account.on("balanceChanged", checkOverdraw);
account.on("balanceChanged", function(){
  checkGoal(this, 1000);
});

//everytime these methods are called, the functions attached above are executed.
account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);

var listeners = account.listeners("balanceChanged");
console.log(listeners);