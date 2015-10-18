/**
  call  以不同的对象作为上下文来调用某个函数，允许 一个对象调用另外一个对象的成员函数
   apply
 bind
 **/
var person = {
    name:'zfpx',
    say:function(words,world){
        console.log(this.name+' say '+words,world);
    }
}

person.say('hello');// zfpx say hello

var p = {
    name:'node.js'
}

person.say.call(p,'hello');
person.say.apply(p,['hello']);

var newSay = person.say.bind(p,'myhello');
newSay('world');

function zf(){
    console.log('zf');
}
var px = new Function('s','console.log("px")');
px();
var util = require('util');
console.log(util.inspect(px,true,100,true));
/*
function Function(content){
    var name = content;
    return name;
}*/
