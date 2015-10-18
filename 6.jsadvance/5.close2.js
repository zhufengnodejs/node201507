var number = 2;//声明一个模块内部的局部变量，在浏览器环境下 window
var obj = {
    number:4,
    fn1:(function(){
        this.number *=2;
        number = number *2;
        var number = 3;
        return function(){
            this.number *=2;
            number *=3;
            console.log(this.number);
        }
    })()
}
var fn1 = obj.fn1;
console.log(number);// 2
fn1();//NAN
obj.fn1();//8
console.log(number);//2
console.log(obj.number);//8