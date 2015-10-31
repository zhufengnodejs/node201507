var express = require('express');
var core = require('./core');
var app = express();
//Referer:http://localhost:63342/node201507/15.http_ext/index.html
var whiteList = ['a.zfpx.cn'];//定义一个白名单列表

app.set('view engine','ejs');//模板引擎
app.set('views',__dirname); //设置模板的存放位置
app.use('/img',function(req,res,next){
  var refer = req.headers.referer || req.headers.referrer;
    //Referer:http://localhost:8080/
    //Referer:http://a.zfpx.cn:8080/

  /*if(!refer){
      return next();
  }*/
  var referHost = getHost(refer);
    console.log(referHost,req.headers.host);
  /*if(referHost == req.headers.host.split(':')[0]){
      return next();
  }*/
    if(whiteList.indexOf(referHost)!=-1){
        return  next();
    }
   res.sendFile(core.path.join(__dirname,'img','miss.jpg'));
});
function getHost(url){
    var host = core.url.parse(url).host;
    return host.split(':')[0];
}
app.use('/img',express.static(core.path.join(__dirname,'img'))) //提供图片服务
app.get('/',function(req,res){
    res.render('img');
});
app.listen(8080);
