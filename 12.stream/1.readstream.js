/**
 1. 前面 readfile writefile 先将文件完整的读入缓存区
  1. 占用内存
  2. 速度的控制
 2.流
  流是一级有序的，有起点和终点的数据传输手段
  在网络中传输数据的时候，总是先将对象转化为流数据，也就是字节数组。
  再通过流的传输，到达目的地后再转成(内容类型和编码)原始的数据。
 3流是一个接口，不同的业务有不同的实现
 stream.Readable 这是一个接口
     fs ReadStream
     http.IncomingMessage 客户端请求或客户端响应request response
     process.stdin
     process.stderr

 **/

var fs = require('fs');
// 34
var rs = fs.createReadStream('65.txt',{highWaterMark:64*1024});
/**
 * 1. ReadStream 继承EventEmitter
 * 2. open 打开这个文件
 * 3. read 读到64k数据到 buffer,发射data事件
 *
 * 流动模式
 */
rs.setEncoding('utf8');
rs.on('open',function(data){
    console.log('打开文件');
});
rs.pause();
setTimeout(function(){
    rs.resume();
},5000);
rs.on('data',function(data){
    console.log('data');
});
rs.on('close',function(){
    console.log('关闭文件');
});
rs.on('error',function(){
    console.log('读取文件出错');
});
