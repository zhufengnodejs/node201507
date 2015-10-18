var fs = require('fs');
//同步写入内容
fs.writeFileSync('test.txt',new Buffer('buffer'));
//追加内容
fs.appendFile('test.txt',new Buffer('file'));

