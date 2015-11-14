var express = require('express');
var app = express();
app.use(function(req,res,next){
   /* res.setHeader('name','zfpx');
    res.send('我是服务器');*/
    res.sendFile('index.html',{root:__dirname});
});
app.all(function(req,res){

});
app.listen(8080);