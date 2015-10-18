/**

 **/

var i=9;
function fo(){
    i=0;
    return function(n){
        return n+i++;
    }
}
var f = fo();
var a = f(15);console.log(a);// 15
var b = fo()(15);console.log(b);//15
var c = fo()(20);console.log(c);//20
var d = f(20);console.log(d);//21