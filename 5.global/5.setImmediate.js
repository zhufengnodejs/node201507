/**
 * 同步代码>nexttick>setImmediate
 **/

var count = 1;
setImmediate(function(){
    console.log(count);
})
process.nextTick(function(){
    count ++;
})


