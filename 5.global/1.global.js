/**
   全局对象
    global的根本作用是全局变量的宿主
     global的属性都可以直接被全局使用。
 **/
var a = 1;
global.a = 1;
//console.log(global);//window

b = 3;
/**
 * process 进程对象
 *   argv 命令行参数
 *   pid: 5308,
 *  kill: [Function],
 *
 *  stdout: [Getter],
 *  stderr: [Getter],
 *  stdin: [Getter],
 *
 *  nextTick: [Function: nextTick],
 *  setImmediate: [Function],
 *  clearImmediate: [Function],
 *  console: [Getter],
 */
//读取命令行参数
process.argv.forEach(function(arg){
    console.log(arg);
});
console.log(process.pid);
var count = 0;
setInterval(function(){
    console.log(count);
    if(count++ == 10){
        process.exit();
    }
},1000)

process.on('SIGTERM',function(){
    process.exit();
})