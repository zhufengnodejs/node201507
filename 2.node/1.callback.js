/**
 *   回头再调用
 *
 *   $('#btn').click(function(){
 *       alert('btnclick')
 *   });
 **/

var hello = function(){
    console.log('hello');
}
setTimeout(hello,2000);
setTimeout(function(){
    console.log('hello');
},2000);

