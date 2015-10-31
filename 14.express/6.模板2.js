/**
  模板
 **/
var express = require('express');
var app = express();
var fs = require('fs');
/**
 * npm install ejs
 */
var path = require('path');
var url = require('url');
//指定模板引擎 ejs handlerbar jade
// freemarker velocity
app.set('view engine','html');
app.set('views',path.join(__dirname,'tmpl'));
//对于html类型的模板调用__express来进行渲染
app.engine('html',require('ejs').__express);
app.get('/login',function(req,res){
    // __dirname/tmpl/login.ejs
  res.render('login',{username:'zhangsan',hello:'<h1>hello</h1>'});
});

app.listen(8080);

