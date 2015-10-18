/**
 * 作用域内的预解释
 */
 var num =9;
 var name = 'zfpx';
 function say(){
   console.log(num);//undefined
   console.log(name);// zfpx
     num = 7;
     var num =6;
 }
say();