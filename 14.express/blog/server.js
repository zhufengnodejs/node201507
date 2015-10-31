var http = require('http');
// npm install forever -g
http.createServer(function(req,res){
    res.end('2222');
}).listen(8080);