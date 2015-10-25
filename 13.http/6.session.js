/**
 1 用户第一次访问服务器的时候，服务器生成一个卡号给用户。 卡号默认100余额
 2 以后每次用户再次请求服务器的时候，把卡号发回服务器。然后服务器把此卡号对应的余额减掉10
 **/

var http = require('http');
var url = require('url');
var querystring = require('querystring');
var CARD_NUM = 'card_num';
var sessions = {};
/**
 * 1.先访问 / 显示登陆页面。
 * 2.用户填 写用户名进行提交，提交到/login  把用户名和余额写到session里
 * 3.访问 /home页面，显示用户名和余额，每访问一次余额-10.
 *
 */
http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    if (pathname == '/favicon.ico') {
        res.end('404');
    }else if(pathname == '/'){
      //返回一个登陆页面 只需要用户名username
      //  用户输入用户名之后进行登陆。
    }else if(pathname == '/login'){
        var cookie = req.headers.cookie;
        var cookieObj = querystring.parse(cookie,'; ');
        var no = new Date().getTime()+Math.random();
        res.setHeader('Set-Cookie',CARD_NUM+'='+no);
        sessions[no] = 100;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('欢迎新朋友，给你一张卡，卡号是'+no+',余额是100');
    }else if(pathname == '/home'){
        if(cookieObj[CARD_NUM]){
            var no = cookieObj[CARD_NUM];
            sessions[no] = sessions[no] - 10;
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end('欢迎老朋友，,余额是'+sessions[no]);
        }else{
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end('你没有登陆过');
        }
    }

}).listen(8080);