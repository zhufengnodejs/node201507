var name = 'zfpx';
console.log('person');
exports.name = name;
exports.say = function(name){
    console.log(name);
}
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}

module.exports = Person;
var module = {};
/*(function (exports, require, module, __filename, __dirname) {
 exports = module.exports = {};
 var name = 'zfpx';
 console.log('person');
 exports.name = name;
 exports.say = function(name){
 console.log(name);
 }
 return Person;
 return module.exports;
})*/

