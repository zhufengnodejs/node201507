var express = require('express');
var app = express();
app.get('*',function(req,res){
    console.log(req.url);
    res.sendFile(__dirname+'/io.html');
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);
//客户端连接事件
io.on('connection',function(socket){
    //socket.send('你好客户端');
    socket.emit('message','你好客户端');
    socket.on('message',function(msg){
        console.log(msg);
        //socket.send('confirm:'+msg);
        socket.emit('message','confirm:'+msg);
    });
    setTimeout(function(){
       // console.log('向其它人发，自己收不到');
       //socket.broadcast.emit('message','向其它人发，自己收不到');
        //io.sockets.emit('message','向其它人发，自己收到');
        //io.sockets.in('home').emit('message','只有home房间的人能听见');
        socket.broadcast.to('hall').emit('message','只有home房间的人能听见');
    },5000)
    socket.on('join',function(data){
        socket.join(data);
        console.log('join',socket.id,data);
    });
});

server.listen(8080);