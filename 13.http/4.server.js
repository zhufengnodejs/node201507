var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var formidable = require('formidable');
var mime = require('mime');
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
        var parser = new formidable.IncomingForm();
        parser.parse(req,function(err,fields,files){
            console.log(fields);//普通 input
            console.log(files);//文件类型的字段
            var userObj = {username:fields.username,password:fields.password};
            userList.push(userObj);
            fs.createReadStream(files.headlike.path).pipe(fs.createWriteStream('./upload/'+files.headlike.name));
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            res.write(userObj.username+'<br/>');
            res.write(userObj.password+'<br/>');
            res.end('<img src="/upload/'+files.headlike.name+'"/>');
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
            console.log(userObj);
            for(var i=0;i<userList.length;i++){
                //如果用户名相同并且密码相同则表示找到了合法的用户
                if(userList[i].username == userObj.username && userList[i].password == userObj.password){
                    res.setHeader('Content-Type',"text/html;charset=utf-8")
                    //res.writeHead(200,{});
                    return res.end('登陆成功');
                }
            }
            //如果没有找到合法用户，则显示注册表单
            fs.createReadStream('./reg.html').pipe(res);
        });
    }else if(pathname.indexOf('/upload/')!=-1){
        res.writeHead(200,{'Content-Type':mime.lookup(pathname)});
        fs.createReadStream('.'+pathname).pipe(res);
    }
}).listen(8080);