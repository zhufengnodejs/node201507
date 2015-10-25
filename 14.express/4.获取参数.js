/**

 **/
var express = require('express');
var app = express();
var fs = require('fs');
/**
 * 请求方法method
 * 请求的路径 pathname
 * 查询字符串 query
 * 请求头 headers
 *
 */
var url = require('url');
app.use(function(req,res,next){
    req.path1 = url.parse(req.url,true).pathname;
    next();
});
app.get('/login',function(req,res){
    console.log(req.method);//请求的方法
    console.log(req.path1);//请求的pathname
    console.log(req.query);//请求的查询字符串对象
    console.log(req.headers);//请求头对象
    res.end('404');
});
//路径参数 http://localhost:8080/user/delete/1/zfpx
app.get('/user/delete/:id/:name',function(req,res){
    console.log(req.params.id);//
    console.log(req.params.name);//
    res.end('404');
});
app.listen(8080);

