/**
 accept-language:en,zh-CN;q=0.8,zh;q=0.6 可以接收的语言类型
 中文浏览器返回中文 英文浏览器返回英文
 **/
var express = require('express');
var app = express();
app.set('view engine','ejs');//模板引擎
app.set('views',__dirname); //设置模板的存放位置
var core = require('./core');
var serverLan = ['en','zh','jp'];//服务器端能提供的语言
app.get('/',function(req,res){
    var language = getLanguage(req,res);
    res.setHeader('content-language',language);
    res.sendFile(core.path.join(__dirname,language,'index.html'));
});

function getLanguage(req,res){
    //accept-language: en,zh-CN;q=0.8,zh;q=0.6
  var acceptLanguage = req.headers['accept-language'];
  var languages = parseLanguage(acceptLanguage);
  for(var i=0;i<languages.length;i++){
      //需要的语言服务器可以提供
      if(serverLan.indexOf(languages[i].l)!=-1){
        return languages[i].l;
      }
  }
  return   serverLan[0];
   function parseLanguage(str){
      // ['en','zh-CN;q=0.8','zh;q=0.6']
       return str.toLowerCase().split(',').map(function(item){
          var s = item.split(';');
          var l = s[0];
          var q = s[1]||'q=1';
          if(q.substr(0,2) === 'q='){
              q = Number(q.substr(2));
          }else{
              q = 0;
          }
           return {l:l,q:q}
       }).sort(function(a,b){
           return b.q - a.q;//降序排列
       });
       [{l:'en',q:1},{l:'zh-cn',q:0.8},{l:'zh',q:0.6}]
   }

}
app.listen(8080);