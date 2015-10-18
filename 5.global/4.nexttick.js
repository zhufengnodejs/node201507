/**
 * nexttick
 * 在事件循环的下一次调用
 *
 **/

function say(){
    console.log('hello');
}
/*
setTimeout(say,0);//优先级低*/
process.nextTick(say);
console.log('next');

var count = 1;
process.nextTick(function(){
    count ++;
})
console.log(count);
console.log(count);
console.log(count);