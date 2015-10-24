/**
 a b c d e f
 树型结构
 深度遍历+先序遍历
 **/
 var fs = require('fs');
var path = require('path');
/**
 * 默认一个文件夹下最多只有两个
 * index:0左子树
 * index:1右子树
 **/
function tree(dir){
    var files;
    if(fs.existsSync(dir)){
        console.log(dir);
        files = fs.readdirSync(dir);
        files.forEach(function(file,index){
            var child = path.join(dir,file);
            tree(child);
        })
    }
}
tree('a');