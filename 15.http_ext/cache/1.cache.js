/**
 *
 **/

var core = require('../core');
core.http.createServer(function(req,res){
   if(req.url =='/favicon.ico'){
       return res.end('404');
   }
  console.log(req.url);//如果输出了表示浏览发请求了，如果没输出表示浏览器没发请求
  // /index.html 获取请求的相对路径
  var filename = req.url.slice(1);
  //matchHandler(filename,req,res);
  //eTagHandler(filename,req,res);
  expireHandler(filename,req,res);

}).listen(8080);

/**
 * last-modified
 * if-modified-since
 * @param filename 文件名
 * @param req 请求
 * @param res 响应
 */
function matchHandler(filename,req,res){
  var lastModified = new Date(req.headers['if-modified-since']);//最后修改时间
    core.fs.stat(filename,function(err,stat){
      //如果服务器上实体文件的最后修改时间和if-modified-since时间相同
      if(stat.mtime.getTime() - lastModified.getTime() <=1000 ){
          res.statusCode = 304;
          res.end('');
      }else{
          //把最新的最后修改时间放在响应头里返给客户端
          res.setHeader('Last-Modified',stat.mtime.toGMTString());
          res.writeHead(200);
          core.fs.createReadStream(filename).pipe(res);//把文件的内容写入响应里
      }
  });
}

/**
 * last-modifed问题
 * 1. 不够精确，只能精确到秒
 * 2. 有时候文件修改过了，但内容未改，我们也希望用缓存
 * 3. cdn的问题 内容分发网络
 * @param filename
 * @param req
 * @param res
 */
function eTagHandler(filename,req,res){
    //取出客户端缓存的tag值
    var nonMatch = req.headers['if-none-match'];
    //读取文件的内容
    core.fs.readFile(filename,function(err,content){
        var hash = getHash(content);
        if(nonMatch == hash){//如果文件内容和客户端传过来的摘要一样，内容未修改
            res.statusCode = 304;
            res.end('');
        }else{
            res.setHeader('etag',hash);//返回最新的etag
            res.writeHead(200);
            core.fs.createReadStream(filename).pipe(res);//把文件的内容写入响应里
        }
    });
}
// update 加密的内容  digest输出摘要 base64编码
function getHash(content){
    return core.crypto.createHash('sha1').update(content).digest('hex');
}

function expireHandler(filename,req,res){
    core.fs.readFile(filename,function(err,content){
        var expires = new Date(new Date().getTime()+30*1000);//设置绝对时间缓存时间30秒
        res.setHeader('Expires',expires.toUTCString());//缓存过期 时间
        res.setHeader('Cache-Control','max-age=30');//设置相对时间缓存时间30秒
        res.writeHead(200);
        res.end(content);
    })
}