//声明http变量
var http = require('http');
var fs = require('fs');
/**
 * http创建一个服务器并接收一个监听函数
 * 当客户端向服务器发起请求的时候会调用此函数
 * request 请求 代表客户端的请求
 * response 响应 代表服务器端的响应
 */
http.createServer(function(request,response){
    console.log(request.url);//获取路径
    console.log(request.method);//获取请求的方法名
    console.log(request.headers);//获取请求头

    //response.write('<!DOCTYPE html> <html> <head lang="en"> <meta charset="UTF-8"> <title></title> </head> <body>hello world </body> </html>');//对客户端说话 可以分次发送
    response.end();//结束响应 挂掉电话
}).listen(8080);//在对应的端口上实现监听