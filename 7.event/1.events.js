/**
 * 事件驱动
 * 事件 观察者模式
 * 1. 注册监听 on
 * 2. 调用监听函数 emit
 **/
function Button(name){
    this.name = name;//名字
    this._events = {};//存放事件事件监听的容器
}

Button.prototype.on = function(eventName,listener){
    if(this._events[eventName]){
        this._events[eventName].push(listener);
    }else{
        this._events[eventName] = [listener];//注册此事件
    }
}

Button.prototype.emit = function(eventName){
  var handlers = this._events[eventName];
  for(var i=0;i<handlers.length;i++){
      handlers[i].apply(this,Array.prototype.slice.call(arguments,1));
  }
}

var button = new Button();
button.on('click',function(name,age){
    console.log('click 1 '+name,age);
});
button.on('click',function(name){
    console.log('click 2 '+name);
});
button.emit('click','zfpx',6);


