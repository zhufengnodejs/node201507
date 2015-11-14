var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'123.57.143.189',
    user:'root',
    password:'zfpx2015',
    database:'zfpx'
});
connection.connect();
//var username = 'zhangsan\' or \'1=1';
var username = 'zhangsan\' or \'1=1';
var password = '123';
var sql = "select * from user where username = '"+username+"' and password='"+password+"'";
//select * from user where username = 'zhangsan' or 1=1' and password='123456'
console.log(sql);
connection.query(sql,function(err,rows,fields){
    if(err) throw err;
    console.log(rows);
    //console.log(fields);
});
