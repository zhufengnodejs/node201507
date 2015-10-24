/**
 非流动模式 暂停模式
 **/
var fs = require('fs');
var rs = fs.createReadStream('65.txt');
var arr = [];
rs.on('readable',function(){
    console.log('readable');
    var data;
    while(null != (data = rs.read(3))){ // 从缓冲区里读取1个字节
        arr.push(data);
        console.log(data.length);
    }
});
rs.on('end',function(){
    var b = Buffer.concat(arr);
    console.log(b.length);
});