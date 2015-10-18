/**
 * eventemitter
 */
var EventEmitter = require('events');
//var EventEmitter = require('events').EventEmitter;
var util = require('util');
function Person(name){
    //EventEmitter.call(this);
    this.name = name;//名字
}
util.inherits(Person,EventEmitter);

var me = new Person();

me.on('老板有事找我',function(){
    console.log('问问啥事');
});

me.addListener('微信弹消息了',function(){
    console.log('设置为免打扰');
});
me.emit('老板有事找我');
me.emit('微信弹消息了');
var eatDinner = function(){
    console.log('吃晚餐');
}
var eatCookie = function(){
    console.log('吃点零食');
}
var eat = function(food){
    console.log('吃'+food)
}
me.once('晚上饿了',eat);//触发一次就取消监听
me.once('晚上饿了',eat);
//me.removeAllListeners();
//me.removeListener('晚上饿了',eatCookie);
me.emit('晚上饿了','优乐美');
me.emit('晚上饿了','香飘飘');

console.log(me.listeners('晚上饿了'));// []

console.log(EventEmitter.listenerCount(me,'晚上饿了'));




