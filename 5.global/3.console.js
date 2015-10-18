

console.log('hello');
process.stdout.write('hello');

console.log('log');
console.error('error');//出错的话error
console.info('info');//调试信息info
console.warn('warn');

console.log({name:'zfpx'});
console.log(JSON.stringify({name:'zfpx'}));
console.log('%j',{name:'zfpx'});

console.log(1+1);
console.log(1==1);

console.time('cost');
var i=0;
/*while(i++<5000000000){

}*/
console.timeEnd('cost');

//console.trace('trace');

console.assert(1==1);