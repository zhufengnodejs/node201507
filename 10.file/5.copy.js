var BUFFER_SIZE = 8*1024;

var fs = require('fs');
function copy(src,dest){
    var buff = new Buffer(BUFFER_SIZE);
    // 读取的文件索引位置，源文件描述符，目标文件描述符，
    var readSoFar,fdSrc,fdDest,read;
    fdSrc = fs.openSync(src,'r');
    fdDest = fs.openSync(dest,'w');
    readSoFar = 0;
    do{
        //从源文件中读取内容，并返回实际读取到的字节数
        read = fs.readSync(fdSrc,buff,0,BUFFER_SIZE,readSoFar);
        fs.writeSync(fdDest,buff,0,read);
        readSoFar += read;
    }while(read == BUFFER_SIZE);
    fs.closeSync(fdDest);
    fs.closeSync(fdSrc);
}
copy('test.txt','test2.txt');

fs.createReadStream().pipe();