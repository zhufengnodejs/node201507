/**
 mongodb orm工具 object reflect model
 npm install mongoose
 **/

var mongoose = require('mongoose');
//连接数据库
mongoose.createConnection('mongodb://123.57.143.189/zhangrenyang',function(err){
 console.log('connected');
});

