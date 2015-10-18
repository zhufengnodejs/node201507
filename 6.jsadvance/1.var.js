/**
  预解释
 var function 会进行预解析
 var 定义但不赋值
 function 定义并且赋值
 **/
console.log(num);//undefine
var num = 9;
hello();// 可以执行
//world();//不能
function hello(){
  return getName();
  function getName(){
    console.log('getname');
  }
}
var world = function(){
  console.log();
}