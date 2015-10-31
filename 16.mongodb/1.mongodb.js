/**
   mongodb
 **/

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://123.57.143.189/zhangrenyang',function(err,db){
   console.log('connected to db');
   //插入
   /*db.collection('student').insertOne({name:'zfpx',age:1},function(err,result){
      if(err)
         console.error(err);
      console.log(result);//输出执行结果
      //db.close();//关闭数据库
   });*/

  /* db.collection('student').insertMany([{name:'zfpx1',age:1},{name:'zfpx2',age:2}],function(err,result){
      if(err)
         console.error(err);
      console.log(result.reverse());//输出执行结果
      db.close();//关闭数据库
   });*/
   //分页查询 每页3条，查询第三页 按age进行降序排列
   // 0 1 2 3 4 5 6 7 8 9
   db.collection('worker').find({}).sort({age:-1}).skip(6).limit(3).toArray(function(err,result){
      if(err)
         console.error(err);
      console.log(result);//输出执行结果 3 2 1

   })

   /* var mon = {
       sort:function(sort){
            this.sort = sort;
            return this;
       },
       skip:function(num){
          this.skip = num;
          return this;
       },
       limit:function(num){
          this.limit = num;
          return this;
       },
       toArray:function(){
          console.log(this.sort,this.skip,this.limit);
       }
    }
   mon.limit(3).skip(3).sort({age:1}).toArray();*/

});