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
// 2
fs.rmdirP = function(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()) { // recurse
                fs.rmdirP(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);//删除文件
            }
        });
        fs.rmdirSync(path);//删除文件夹
    }
};
fs.mkdirP('2/2/2',function(err){
    if(err){
        console.error(err);
    }else{
        console.log('创建目录成功');
    }
});
//rmdirSync 只能删除空目录
fs.rmdirP('2');
/**
 * size: 1, 文件的大小
 * atime access time 最后的访问
 * mtime modify time 最后的修改时间
 * ctime create time 最后的创建时间
 * birthtime 出生时间
 */
fs.stat('./write.txt',function(err,stats){
    console.log(stats);
    console.log(stats.isDirectory());
    console.log(stats.isFile());
});
//判断文件是否存在
fs.exists('./write.txt',function(exists){
    console.log(exists);
});

//取得文件的绝对路径
/*fs.realpath('./test',function(err,path){
    if(err)
        console.error(err);
    console.log(path);
});*/
fs.rename('./1/test','./2/test2',function(err){
    if(err)
        console.error(err);
});

var filename = './write.txt';
fs.stat(filename,function(err,stat){
    console.log(stat.size);
    fs.truncate(filename,1,function(err){
        fs.stat(filename,function(err,stat2){
            console.log(stat2.size);
        });
    });
});