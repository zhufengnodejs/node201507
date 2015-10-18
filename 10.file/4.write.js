/**
 *
 * 0 stdin 1 stdout 2 stderr
 **/
//打开文件
var fs = require('fs');
var fd = fs.openSync('test.txt','w');//fd文件描述符
var buffer = new Buffer('珠峰培训');
/**
 * fd
 * buffer
 * offset 从buffer里读取的偏移量 索引
 * length 读取的字节数
 * position 向文件里写入的索引
 */
fs.writeSync(fd, buffer, 0, 6, 0);
fs.writeSync(fd, buffer, 6, 6, 6);
fs.closeSync(fd);