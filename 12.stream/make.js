var fs = require('fs');
var b = new Buffer(65*1024);
b.fill('1');
fs.writeFile('65.txt',b);