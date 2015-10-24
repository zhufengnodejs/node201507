/**

 **/
var Readable = require('stream').Readable;
// ReadStream
var util = require('util');
util.inherits(Counter,Readable);

function Counter(max){
    Readable.call(this);
    this.pos = 1;
    this.max = max;
}
//每调用一次read 会触发一次data事件
Counter.prototype._read = function(){
    if(this.pos<=this.max){
        this.push(""+this.pos++);
    }else{
        this.push(null);//push null 意味着流结束了
    }
}

var counter = new Counter(10);
counter.setEncoding('utf8');
counter.on('data',function(data){
    console.log(data);
});