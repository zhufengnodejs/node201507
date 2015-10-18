//声明http变量
var http = require('http');
var fs = require('fs');
//第三方模块，需要手工安装 npm install mime
var mime = require('mime');
/**
 * http创建一个服务器并接收一个监听函数
 * 当客户端向服务器发起请求的时候会调用此函数
 * request 请求 代表客户端的请求
 * response 响应 代表服务器端的响应
 */
var server = http.createServer();
server.on('lele',function(){

});
server.on('request',function(request,response){
    if( request.url == '/ajax'){
        response.setHeader('Access-Control-Allow-Origin','*')
        response.end('ajax');
    }else{
        response.end(fs.readFileSync('index2.html'));//结束响应 挂掉电话
    }
});
server.listen(8080);//在对应的端口上实现监听