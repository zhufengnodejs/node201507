/**
  http
 **/

var http = require('http');
var url = require('url');// ctrl+ alt +下箭头
var util = require('util');
var querystring = require('querystring');
var server = http.createServer(function(req,res){
    console.log(req.method);//获取请求的方法
    console.log(req.headers);//获取请求头
    console.log(req.url);//获取请求的url
    //http://zfpx:12345@localhost:8080/index/index.html?name=zfpx#top
    var urlObj = url.parse("http://zfpx:12345@localhost:8080"+req.url,true);//url转成对象
    var result = '';
    req.on('data',function(data){
        // console.log(data);
        result+=data;
    });
    req.on('end',function(){
        var contentType = req.headers['content-type'];//全部小写
        if(contentType == 'json'){
            var resObj = JSON.parse(result);
        }else{
            var resObj = querystring.parse(result);
        }
        res.statusCode = 200;//响应的状态码
        res.setHeader('name','zfpx');
        res.writeHead(200,{'name':'zfpx'});
        res.end(JSON.stringify(resObj));
    });

    //res.end(util.inspect(urlObj.query));
    //res.end('end');
});
server.listen(8088);
server.on('connection',function(){
    console.log('connection');
});
server.on('error',function(err){
    console.log('error');
});
server.on('close',function(){
    console.log('close');
});
server.on('error',function(){
    console.log('close');
});
server.setTimeout(3000,function(){
    console.log('timeout');
});


/**
 * { host: 'localhost:8088',
  connection: 'keep-alive',
  'cache-control': 'max-age=0',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,;q=0.8',
   'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36',
    'accept-encoding': 'gzip, deflate, sdch',
    'accept-language': 'en,zh-CN;q=0.8,zh;q=0.6' }
 **/