/**

 **/
var express = require('express');
var app = express();
var fs = require('fs');
/**
 */
var url = require('url');

app.get('/num',function(req,res){
   res.send('200');
});
app.get('/obj',function(req,res){
    res.send({name:'zfpx'});
});
app.get('/function',function(req,res){
    res.sendStatus(eval("1+1"));
});
app.get('/array',function(req,res){
    res.send([{name:'zfpx'}]);
});

app.listen(8080);

