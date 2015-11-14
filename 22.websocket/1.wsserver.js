var Server = require('ws').Server;
var serv = new Server({port:8080});

serv.on('connection',function(socket){
    socket.send('hello client');//向客户端发送消息
    socket.on('message',function(data){//监听客户端的消息
        console.log('receive:',data);
        socket.send('receive:'+data);
    });
});