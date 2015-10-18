var util = require("util"),
    events = require("events");
var EventEmitter = events.EventEmitter;

function Person(name, age) {
    this.name = name;
    this.age = age;
}

util.inherits(Person, EventEmitter);
var alice = new Person("alice", 25);

alice.on("need-kownledge", function(kownledgeType) {
    console.log(this.name + " need " + kownledgeType + ",she will go to learn " + kownledgeType);
});
alice.on("need-coats", function(coatsType, friend) {
    console.log(this.name + " buy " + coatsType + "with her friend " + friend);
});
// 调用的时候传递一个参数
alice.emit("need-kownledge", "nodejs");
alice.emit("need-coats", "shirts ", "yu-jia");
