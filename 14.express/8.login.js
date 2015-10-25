/**
  实现一个完整的访问控制
  /login 当登陆成功之后会跳转到/home页
  /home 访问/home页的时候要判断用户是否已经登陆，如果未登陆，跳回登陆页
 **/
var express = require('express');
var app = express();
var fs = require('fs');
/**
 * 获取请求体参数
 * post 请求中如何获取客户端提交的数据
 */
var path = require('path');
var url = require('url');
app.set('view engine','html');
app.set('views',path.join(__dirname,'tmpl'));
app.engine('html',require('ejs').__express);
var session = require('express-session');

var bodyParser = require('body-parser');
// req.session
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));//对象 req.body
app.get('/login',function(req,res){
    res.render('login');
});

app.post('/login',function(req,res){
    var user = req.body;
    req.session.user = user;
    res.redirect('/home');//重定各到/home
});
function checkAuth(req,res,next){
    if(req.session.user){
        next();
    }else{
        res.redirect('/login');//重定各到/home
    }
}
app.get('/home',checkAuth,function(req,res){
    res.render('home',req.session.user);
});

app.listen(8080);

