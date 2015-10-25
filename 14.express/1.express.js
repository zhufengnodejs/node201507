/**
  express
  第三方模块，第三方框架
 express
 模板解析
 静态文件服务
 中间件
 路由
 日志
 错误处理
 **/
var express = require('express');
var app = express();
var fs = require('fs');
// 用户通过get请求访问 /这个路径
app.get('/login',function(req,res){
    fs.createReadStream('./login.html').pipe(res);
});
app.post('/login',function(req,res){
    req.setEncoding('utf8');
   req.on('data',function(data){
       res.end(data);
   });
});
app.listen(8080);

