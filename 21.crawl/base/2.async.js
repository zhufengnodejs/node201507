var async = require('async');
//串行执行
console.time('cost');
async.series([function(next){
setTimeout(function(){
    next();
},1000);
},function(next){
    setTimeout(function(){
        next();
    },2000);
}],function(err,result){
    //console.timeEnd('cost');
});

var arr = [1,2,3,4,5];
console.time('cost');
/*arr.forEach(function(item){
    setTimeout(function(){
        console.log(item);
        console.timeEnd('cost');
    },(5-item)*1000);
});*/
//迭代异步函数， 同时执行
/*
async.each(arr,function(item,next){
    setTimeout(function(){
        console.log(item);
        next();
    },10000*Math.random());
},function(){
    console.timeEnd('cost');//1秒钟
});
*/

async.mapLimit(arr,2,function(item,next){
    setTimeout(function(){
        console.log(item);
        next();
    },1000);
},function(){
    console.timeEnd('cost');//3秒
});