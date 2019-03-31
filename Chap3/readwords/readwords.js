var censor = require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("bad, and mad insults here"));
censor.addCensoredWord("glow");
console.log(censor.getCensoredWords());
console.log(censor.censor("bad, and money insults here, glow"));
