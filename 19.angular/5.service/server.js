var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.get('/list',function(req,res){
    return res.json([
        {name:'zfpx'},
        {name:'node.js'}
    ]);
});
app.post('/user/add',function(req,res){
    res.setHeader('Access-Control-Allow-Origin',"*");
    console.log(req.body);
    res.statusCode = 500;
    res.end('ok');
});

app.listen(8080);