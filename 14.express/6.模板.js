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
//指定模板引擎
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'tmpl'));
app.get('/login',function(req,res){
    // __dirname/tmpl/login.ejs
  res.render('login',{username:'zhangsan'});
});


app.listen(8080);

