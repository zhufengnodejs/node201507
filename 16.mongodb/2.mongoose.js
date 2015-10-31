/**
 mongodb orm工具 object reflect model
 npm install mongoose
 **/

var mongoose = require('mongoose');
//连接数据库
var connection = mongoose.createConnection('mongodb://123.57.143.189/zhangrenyang',function(err){
 console.log('connected');
});

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
//定义了一个作者的集合的模型
var AuthorSchema = new Schema({
 name:String
})

//定义一个Model 数据库交互模型
var Author = connection.model('Author',AuthorSchema);

//评论模型
var CommentSchema = new Schema({
 content:String,//评论的内容
 data:{type:Date,default:new Date()} //评论的日期 类型是日期类型，默认值是当前日期
},{collection:'comment'})
//文章模型
var ArticleSchema = new Schema({
 title:{type:String,index:true},
 content:String,//内容
 author:{type:ObjectId,ref:'Author'},//引用Author模型
 comment:[CommentSchema],
 stat:{
  favs:{type:Number,default:0},//收藏量
  visited:Number //访问量
 }
});

var Article = connection.model('Article',ArticleSchema);
//保存一个作者
//{ _id: 56348dffe92faa7c191572ad, name: 'zfpx', __v: 0 }
/*var auth = {name1:'zfpx'};
new Author(auth).save(function(err,ret){
     console.log(ret);
});*/
//保存一个文章
//中间件 切面 钩子
ArticleSchema.pre('save',function(next){
 this.stat.favs = 778;
 this.stat.visited = 999;
 if(this.title == '第一篇文章标题'){
  next();
 }
});
// _id: 56348f80ef8e26f41b928fe7,
/*
new Article({
 title:'第一篇文章标题',//标题
 content:'第一篇文章的内容',//内容
 author:'56348dffe92faa7c191572ad'//引用Author模型
}).save(function(err,ret){
     console.log(ret);
});*/
//增加一条评论信息
/*Article.update({_id:'56348f80ef8e26f41b928fe7'},{$push:{comment:{content:'comment1'}}},function(err,ret){
 console.log(ret);
});

Article.update({_id:'56348f80ef8e26f41b928fe7'},{$inc:{'stat.favs':10,'stat.visited':10}},function(err,ret){
 console.log(ret);
});*/

var pageNum = 2;//查询第几页
var pageSize = 2;//本页的条数
Article.count({title:/第/},function(err,total){ ///得到总记录数
 var totalPage = Math.ceil(total/pageSize);
 if(pageNum<=0){
  pageNum =1;
 }
 if(pageNum>totalPage){
  pageNum = totalPage;
 }
 var skip = (pageNum-1)*pageSize;
 Article.find({title:/第/}).skip(skip).limit(pageSize).sort({title:1}).exec(function(err,result){
  console.log(result);
 });
})
