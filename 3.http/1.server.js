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
http.createServer(function(request,response){
    console.log(request.url);//获取路径
    console.log(request.method);//获取请求的方法名
    console.log(request.headers);//获取请求头
    /// /index.html?name=zfpx
    var urls = request.url.split('?');
    var pathname = urls[0];
    var query = urls[1];
    //var name = query?query.split('=')[1]:'error';
    var name ='zfpx2';
    console.log('getfile');
    getFile(pathname.slice(1),response);
    // a/b/index.html
    function getFile(filename,response){
        //只有指定了编码ut8,data才会是一个字符串
        fs.readFile(filename, 'utf8',function(err, data){
            if(data==null||err){
                response.end('Can not find file');
            }else{
                //写入响应头
                data = data.replace('<%=name%>',name);
                response.writeHead(200, {
                    //'Content-Length': data.length,
                    'Content-Type':mime.lookup(filename)+';charset=utf-8'
                });
                //getContentType(filename)+';charset=utf-8'

                response.write(data);//写入响应
                response.end();//结束响应
                console.log('end');
            }
                response.end();

        });
    }

   /* function getContentType(filename){
        if(filename.indexOf('.html')!=-1){
            return 'text/html';
        }else if(filename.indexOf('.css')!=-1){
            return 'text/css';
        }else if(filename.indexOf('.js')!=-1){
            return 'text/javascript';
        }
    }*/
    //response.write('<!DOCTYPE html> <html> <head lang="en"> <meta charset="UTF-8"> <title></title> </head> <body>hello world </body> </html>');//对客户端说话 可以分次发送
    //response.end();//结束响应 挂掉电话
}).listen(8080);//在对应的端口上实现监听