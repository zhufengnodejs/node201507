var request = require('request');
var fs = require('fs');
/*
request('http://localhost:8080',function(err,response,body){
    if(err)
       throw err;
    console.log(response.statusCode);
    console.log(response.headers.name);
    console.log(body);
});

request('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png').pipe(fs.createWriteStream('baidu.png'));
*/

var superagent = require('superagent');
var cheerio = require('cheerio');// node 里的jquery
superagent.get('http://localhost:8080').end(function(err,res){
  if(err)throw err;
   // res.text 响应体
    var $ = cheerio.load(res.text);
    console.log($('#container>div').html());
});