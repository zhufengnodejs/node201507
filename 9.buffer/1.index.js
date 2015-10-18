/**
   缓存区Buffer<Buffer 31 32 33>
   暂时存放的一块内存
   JS本身只有字符串类型，没有二进制类型
   TCP 文件流的们必须处理二进制
    是一个八位字节元素组成的数组

    1.特别大的文件
    2.不知道有多
 **/

/*
var fs = require('fs');
fs.readFile('index.txt',function(err,data){
  console.log(data);
});*/

//创建buffer有三种办法
var buf1 = new Buffer(12);//new Buffer(size);
buf1.fill(0);
buf1.fill(1,1,3);
console.log(buf1);//用16进制表示  255 ff   15*1+16*15=
console.log(15*1+16*15);

//数组
var buf2 = new Buffer([15,16,17]);//0f 10 11
console.log(buf2);

//字符串
var buf3 = new Buffer('珠峰培训');
console.log(buf3);

console.log('珠峰培训'.length);//4
console.log(buf3.length);//12
// 都有slice方法，但有差异。

console.log(buf3.toString('utf8',0,6));//把前6个字节取出来转成字符串

var b1 = new Buffer([1]);
var b2 = new Buffer([2]);
var b3 = Buffer.concat([b1,b2]);
var b4 = new Buffer(2);
b3.copy(b4,0,0,2)
console.log(b4);

console.log(Buffer.isBuffer(b4));
console.log(Buffer.byteLength('我喜欢'));//9
console.log(Buffer.isEncoding('GBK'));