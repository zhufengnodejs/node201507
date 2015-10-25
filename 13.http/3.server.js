var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
/**
 * req
 * res
 */
//存放所有的注册用户信息
var userList = [];
http.createServer(function(req,res){
   var urlObj = url.parse(req.url);
   var pathname = urlObj.pathname;
    console.log(pathname);
    if(pathname == '/favicon.ico'){
        res.end('404');
    }else if(pathname == '/'){
      fs.createReadStream('./reg.html').pipe(res);
    }else if(pathname == '/reg'){
        var result = '';
        req.on('data',function(data){
            result+=data;
        });
        // result = username=zfpx&password=123
        req.on('end',function(){
            //把查询字符串转成用户对象 {username:zfpx,password:123}
            var userObj = querystring.parse(result);
            userList.push(userObj);
            fs.createReadStream('./login.html').pipe(res);
        });
    }else if(pathname == '/login'){
        var result = '';
        req.on('data',function(data){
            result+=data;
        });
        // result = username=zfpx&password=123
        req.on('end',function(){
            //把查询字符串转成用户对象 {username:zfpx,password:123}
            var userObj = querystring.parse(result);
            for(var i=0;i<userList.length;i++){
                //如果用户名相同并且密码相同则表示找到了合法的用户
                if(userList[i].username == userObj.username && userList[i].password == userObj.password){
                    res.setHeader('Content-Type',"text/html;charset=utf-8")
                    return res.end('登陆成功');
                }
            }
            //如果没有找到合法用户，则显示注册表单
            fs.createReadStream('./reg.html').pipe(res);
        });
    }
}).listen(8080);