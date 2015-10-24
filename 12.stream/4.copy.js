/**

 **/

var fs=require('fs');

/*
var rs=fs.createReadStream('origin.txt');// 128k
var out = fs.createWriteStream('write.txt');
rs.setEncoding('utf8');//不能强行设置编码 ，因为有可能是图片
rs.on('data',function(data){
    out.write(data);
});

rs.on('end',function(){
    out.end();// fs.close()
});*/

/*
var fs = require('fs');
var readStream = fs.createReadStream('/path/to/source');
var writeStream = fs.createWriteStream('/path/to/dest');

readStream.on('data', function(chunk) {
    if (writeStream.write(chunk) === false) {
        readStream.pause();
    }
});

writeStream.on('drain', function() {
    readStream.resume();
});

readStream.on('end', function() {
    writeStream.end();//fs.close()
});*/

/*

var fs = require('fs');
function mycopy(){
    var rs = fs.createReadStream('11.txt');
    var ws = fs.createWriteStream('22.txt');
    var arr = [];
    rs.on('readable',function(){
        var data;
        while(null != (data = rs.read())){ // 从缓冲区里读取1个字节
            ws.write(data);
            arr.push(data);
        }
    });
    rs.on('end',function(){
        var b = Buffer.concat(arr);
        console.log("It is over!"+b);
    });
}mycopy();
*/

var readStream = fs.createReadStream('65.txt');
var writeStream = fs.createWriteStream('65_bak.txt');
readStream.pipe(writeStream);
