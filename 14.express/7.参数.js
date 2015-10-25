/**
  模板
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
var bodyParser = require('body-parser');
//处理文件上传的中间件 只解析类型是 multipart/form-dat的类型
var multer = require('multer');
var storage = multer.diskStorage({
  //指定保存的目的地
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  //指定保存文件名
  filename: function (req, file, cb) {
    cb(null, Date.now()+'-'+file.originalname)
  }
})

var upload = multer({ storage: storage })

app.use(bodyParser.json());//一个是json字符串 req.body
app.use(bodyParser.urlencoded({extended:true}));//对象 req.body
app.get('/login',function(req,res){
  res.render('login');
});
app.use(express.static(__dirname));
// username=zfpx&password=123 querystring.parse() ->req.body
app.post('/login',upload.single('avatar'),function(req,res){
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.file);
  res.setHeader('Content-Type',"text/html;charset=utf-8");
  //'uploads\\1445763597971-get_matrix_img.gif'
  //  /uploads\\1445763597971-get_matrix_img.gif
  res.end('<img src="'+req.file.path+'">')
});

app.listen(8080);

