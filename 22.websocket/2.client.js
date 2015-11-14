var ws = require('ws');
var socket = new ws('ws://localhost:8080');
socket.on('open',function(){
    socket.send('你好 服务器');
});
socket.on('message',function(data){
    console.log('message:',data);
});