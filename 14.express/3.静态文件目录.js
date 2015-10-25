/**

 **/
var express = require('express');
var app = express();
var fs = require('fs');
//静态文件目录服务中间件 /index.html
// __dirname+/index.html
app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.end('404');
});
app.listen(8080);

