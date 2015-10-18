
var n = 1;
var s = 'hello';
var f = 'f'

function fn(){
    console.log(n);//undefined
    console.log(s);// hello
    n=2;
    var n=3;
    var f = 'fn -f';
    function inner(){
        console.log(n);//3
        console.log(s);//hello
        console.log(f);// fn -f
    }
    inner();
}
fn();