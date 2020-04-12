/* dns_lookup.js */

//Using the 'dns' module for performing DNS operations

var dns = require('dns');

console.log("Resolving www.cyansolutions.com . . .");
dns.resolve4('www.cyansolutions.com', function(err, addresses){
  console.log('IPv4 addresses: ' + JSON.stringify(addresses, false, ' '));

  addresses.forEach(function(addr){
    dns.reverse(addr, function(err, domains){
      console.log('Reverse for ' + addr + ': ' + JSON.stringify(domains));
    });
  });
});

dns.resolveMx("www.cyansolutions.com", function(err, addresses){
  console.log('MX addresses: ' + JSON.stringify(addresses, false, ' '));
});

dns.resolveTxt("www.cyansolutions.com", function(err, addresses){
  console.log('TXT records: ' + JSON.stringify(addresses, false, ' '));
});