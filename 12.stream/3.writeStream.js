/**

 **/
var fs = require('fs');
var out = fs.createWriteStream('write.txt');
for(var i=0;i<100;i++){
    var flag = out.write(i.toString());
    //console.log(flag);
}
//操作系统缓存区抽干的时候触发
out.on('drain',function(){
    console.log('drain');
});

