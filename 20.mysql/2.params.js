var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'123.57.143.189',
    user:'root',
    password:'zfpx2015',
    database:'zfpx',
    queryFormat:function(sql, values){
        if(!values) return sql;
        return sql.replace(/@@@(\w+)/g,function(txt,key){
            if(values.hasOwnProperty(key)){
                return connection.escape(values[key]);
            }
        });
    }
});
connection.connect();
// ?? mysql关键字  ? 普通的值
var sql = "select * from user where username = @@@username and password = @@@password";
var values = {username:"zhangsan",password:"123456"};
console.log(connection.format(sql, values));
connection.query(sql,values,function(err,rows,fields){
    console.log(rows);
});

