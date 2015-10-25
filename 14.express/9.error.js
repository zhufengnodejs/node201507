/**

 **/
var express = require('express');
var app = express();
var fs = require('fs');
app.use(function(req,res,next){
    console.log('1');
    next();
});
app.use(function(req,res,next){
    console.log('2');
    //throw Error('wrong');
    next('I am wrong');
});
app.use(function(req,res,next){
    console.log('3');
    next();
});
app.use(function(req,res,next){
    console.log('4');
    res.end("4");
});
//错误处理中间件
app.use(function(err,req,res,next){
   res.end(err);
});
app.listen(8080);

