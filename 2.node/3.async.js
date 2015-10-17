/**
 * 如果说有多个异步任务同时进行，但在异步任务执行完毕之后才会回调怎么做
 *
 **/

var chaobing,tail;
var count = 0;
var waiter = function(){
    count++;
    if(count == 2){
        eat();
    }
}
chaobing = function(){
    setTimeout(function(){
        console.log('炒饼');
        waiter();
    },1000)
}


tail = function(){
    setTimeout(function(){
        console.log('鸡尾酒');
        waiter();
    },2000);
}
var eat = function(){
    console.log('开吃');
}
chaobing();
tail();