/**
 目录
 **/
var fs = require('fs');
var path = require('path');
fs.mkdirP = function(dir){
   var parts = dir.split('/');//本操作系统文件目录分隔符
    for(var i=0;i<parts.length;i++){
        var currentPath = parts.slice(0,i+1).join(path.sep);
        if(!fs.existsSync(currentPath)){
            fs.mkdirSync(currentPath);
        }
   }
}
fs.rmdirP = function(dir){

}
fs.mkdirP('2/2/2',function(err){
    if(err){
        console.error(err);
    }else{
        console.log('创建目录成功');
    }
});
//rmdirSync 只能删除空目录
fs.rmdirP('2');