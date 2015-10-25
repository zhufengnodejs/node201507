
var http = require('http');
var url = require('url');
var querystring = require('querystring');
/**
 * Domain 域名
 * Path 路径 控制访问哪些路径的时候发送cookie
 *
 * Expires/Max-Age 设置cookie过期时间或有效期的
 * HttpOnly 为了安全，不允许javascript修改cookie
 * Secure 只限于https服务器使用
 *
 * Cookie:name=zfpx; name2=zfpx2
 */
http.createServer(function(req,res) {
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    if (pathname == '/favicon.ico') {
        res.end('404');
    } else if (pathname == '/write') {
        //res.setHeader('Set-Cookie','name=zfpx; Expires='+new Date(new Date().getTime()+20000).toGMTString());//设置一个header ,名称固定就叫Set-Cookie
        //res.setHeader('Set-Cookie','name=zfpx; Max-Age='+20);//设置一个header ,名称固定就叫Set-Cookie
        res.setHeader('Set-Cookie','name=zfpx');//只能通过HTTP查看，不能通过js操作
        res.setHeader('Set-Cookie','isAdmin=0');
        res.end('write');
    }else if(pathname == '/read'){
        var cookie = req.headers.cookie;
        //name=zfpx&name2=zfpx2 name=zfpx; name2=zfpx2
        var cookieObj = querystring.parse(cookie,'; ');
        console.log(cookieObj);
        if(cookieObj && cookieObj.name){
            res.end('old friend');
        }else{
            res.end('new friend');
        }
    }else if(pathname == '/read2'){
        var cookie = req.headers.cookie;
        //name=zfpx&name2=zfpx2 name=zfpx; name2=zfpx2
        var cookieObj = querystring.parse(cookie,'; ');
        console.log(cookieObj);
        if(cookieObj && cookieObj.isAdmin==1){
            res.end('admin');
        }else{
            res.end('guest');
        }
    }
}).listen(8080);