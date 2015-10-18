/**
 * forEach
 * filter
 * map
 * every
 * some
 * JSON.parse
 *
 **/
Date.prototype.__defineGetter__('ago',function(){
    var diff = (new Date().getTime() - this.getTime())/1000;
    return diff+'秒以前';
});
var d = new Date(new Date().getTime()-3600*1000);
console.log(d.ago);

