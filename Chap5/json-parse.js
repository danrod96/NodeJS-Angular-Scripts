/* Use JSON.parse to convert a JSON-formatted string into a JS Object */

var accountStr = '{"name":"Jedi", "members":["Yoda", "Obi", "Wan"], "number":"2016-12"}';

var accountObj = JSON.parse(accountStr);

console.log(accountObj.number);

console.log(accountObj.members);