var fs = require('fs');
/**
 *
 * @param curr 当前的状态 stat
 * @param prev 修改之前的状态 stat
 */
var func1 = function(curr,prev){
    console.log(curr);
    console.log(prev);
   if(Date.parse(prev.ctime) == 0){
     console.log('文件被创建');
   }else if(Date.parse(curr.ctime)==0){
       console.log('文件被删除了');
   }else{
       console.log('修改了');
   }
}

var func2 = function(curr,prev){
    console.log('我也监听 了');
}
fs.watchFile('write.txt',{interval:0},func1);
fs.watchFile('write.txt',{interval:0},func2);
setTimeout(function(){
    fs.unwatchFile('write.txt',func2);
},3000);