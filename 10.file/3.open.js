/**
 *
 * 0 stdin 1 stdout 2 stderr
 **/
//打开文件
var fs = require('fs');
var fd = fs.openSync('test.txt','r');//fd文件描述符
var buffer = new Buffer(10);
/**
 * fd
 * buffer
 * offset 从buffer的哪个索引开始往里写
 * length 读取多少个字节
 * position 从文件的哪个索引开始读
 * bytesRead 实际读取到的字节数
 * 10字节 6 4
 */
var bytesRead = fs.readSync(fd, buffer,0,6,0);
var bytesRead = fs.readSync(fd, buffer,6,4,6);
console.log(buffer.toString());
console.log(bytesRead);
//fs.closeSync(fd);
var fd = fs.openSync('test.txt','r');//fd文件描述符
console.log(fd);