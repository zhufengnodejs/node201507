var http = require('http');

//http://zfpx:12345@localhost:8080/index/index.html?name=zfpx#top
var options = {
    method:'post',
    protocol: 'http:',
    slashes: true,
    auth: 'zfpx:12345',
    host: 'localhost:8088',
    port: '8088',
    hostname: 'localhost',
    hash: null,
    search: '?name=zfpx',
    query: { name: 'zfpx' },
    pathname: '/index/index.html',
    path: '/index/index.html?name=zfpx',
    headers:{'connection':'close','Content-Type':'application/x-www-form-urlencoded'},//当提交表单的时候会把表单序列化成这种类型 url query查询字符是一样的
    headers:{'Content-Type':'application/json'},
    headers:{'Content-Type':'application/xml'},
    href: 'http://zfpx:12345@localhost:8080/index/index.html?name=zfpx' }
//res 是一个流对象 可读可写的流
/**
 * 可读流
 *  data end事件
 * 可写流
 *  write end方法
 */
var request = http.request(options,function(res){
    console.log(res.statusCode);
    console.log(res.headers);
    //读取可读流里的数据 readstream readable
    res.setEncoding('utf8');
    var result = '';
    res.on('data',function(data){
       // console.log(data);
        result+=data;
    });
    res.on('end',function(){
        console.log(result);
    });
})
/*request.on('error',function(err){
    console.log(err);
});*/
request.write('age=7&name=zf');//向请求体里写数据
//request.write(JSON.stringify({"name":"zfpx"}));//向请求体里写数据
request.end();//真正发起向服务器的请求
