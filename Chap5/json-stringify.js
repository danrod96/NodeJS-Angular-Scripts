/* Use the JSON method to parse a JS Object and generate a JSON string */

var accountObj = {
  name: "Baggins",
  number: 10342,
  location: "Bergamo"
};

var accountStr = JSON.stringify(accountObj);

console.log(accountStr);