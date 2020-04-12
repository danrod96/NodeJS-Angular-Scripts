/* os_info.js */

//Calling methods on the os module

//The OS module provides an useful set of functions that allow you to get information
//from the operating system

var os = require('os');

console.log("tmpdir: \t" + os.tmpdir());
console.log("Endianness: \t" + os.endianness());
console.log("Hostname: \t" + os.hostname());
console.log("Type: \t" + os.type());
console.log("Platform: \t" + os.type());
console.log("Arch: \t" + os.arch());
console.log("Release: \t" + os.release());
console.log("Uptime: \t" + os.uptime());
console.log("Load AVG: \t" + os.loadavg());
console.log("Total Mem: \t" + os.totalmem());
console.log("Free Mem: \t" + os.freemem());
console.log("EOL: \t" + os.EOL);
console.log("CPUs: \t" + JSON.stringify(os.cpus()));
console.log("Network Interfaces: \t" + JSON.stringify(os.networkInterfaces()));