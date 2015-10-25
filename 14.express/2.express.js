/**
  中间件
 是处理HTTP请求，用来完成各种特定的任务
 比如检查用户是否登陆，增加工具方法等
 最大特点
   一个中间件处理完毕后，才能将数据传递给下一个中间件
    app.use(路径,中间件函数);
 **/
var express = require('express');
var app = express();
var fs = require('fs');

app.use(function(req,res,next){
    res.print = function(content){
        this.end(content);
    }
    next();
});
/*app.use(function(req,res,next){
    console.log('next middleware');
});*/
//发表文章
app.get('/article',function(req,res){
    res.print('article');
});
//发表评论
app.get('/comment',function(req,res){
    res.print('article');
});
//登陆
app.get('/login',function(req,res){
    res.print('login');
});
//注册
app.get('/reg',function(req,res){
    res.print('login');
});
//匹配所有的路径和所有的请求方法
app.all('*',function(req,res){
    res.print('404');
});
app.listen(8080);

