var censor = require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("Insert insults here"));
censor.addCensoredWord("custom insult");
console.log(censor.getCensoredWords());
console.log(censor.censor("Custom insults here"));
