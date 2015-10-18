var util = require('util');

function Parent(){
    this.name = 'father';
    this.say = function(){
        console.log('hello '+this.name);
    }
}
Parent.prototype.showName = function(){
    console.log(this.name);
}

function Child(){
    Parent.call(this);
    this.name = 'child';
}
//ctor.prototype = Object.create(superCtor.prototype)
//util.inherits(Child,Parent);
Child.prototype = new Parent();
var child = new Child();
child.say();
child.showName();


console.log(util.inspect(child,true,5,true));

/*
判断对象的类型
console.log(util.isArray());
utils.isRegExp()
utils.isDate()
utils.isError();*/
