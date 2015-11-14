var mysql = require('mysql');

/**
 * 创建并管理缓存池的技术
 * 1.减少连接时间
 * 2.简化编程模型
 * 3.受控的资源引用
 **/

var pool = mysql.createPool({
    host:'123.57.143.189',
    user:'root',
    password:'zfpx2015',
    database:'zfpx',
    connectionLimit:2,//连接池 最多可以创建几个连接
    queueLimit:1//等待队伍中最多有几个连接
})
pool.on('error',function(err){
    console.log(err);
});
pool.on('connection',function(){
    console.log('一个新的连接被创建');
});
pool.on('enqueue',function(){
    console.log('有人加入等待的队列');
});
console.time('cost');
function start(){
    //最大并是两个连接，队伍里最多是1个等
    pool.getConnection(function(err,connection){
        if(err){
            return console.error(err);
        }
        connection.query("select * from user",function(err,rows){
            console.log(rows.length);
            console.timeEnd('cost');//1秒多一点点
            setTimeout(function(){
                connection.release();
            },1000);
        });
    });
}
start();
start();
start();
start();