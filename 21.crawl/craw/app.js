var read = require('./read');
var write = require('./write');
var debug = require('debug')("craw:app");
var async = require('async');
var classList;
var classArticles = {};
var articles = [];//所有的文章的ID列表
var url = 'http://blog.csdn.net/hongqishi';
async.series([function(next){
    read.classList(url,function(err,list){
        classList = list;
        next(err);
    })
},function(next){
    write.classList(classList,next);
},function(next){
    //读取每个分类下面的文章列表
    async.eachSeries(classList,function(cls,done){
         read.classArticles(cls.url,function(err,list){
             classArticles[cls.id] = list;//key=分类ID value=文章列表
             done(err);
         });
    },next);
},function(next){
  //保存每一个分类和分类下面的文章
  async.eachSeries(Object.keys(classArticles),function(class_id,done){
       write.classArticles(class_id,classArticles[class_id],done)
  },next);
},function(next){
    debug('消除重复的文章');
    var article = {};
    Object.keys(classArticles).forEach(function(class_id){
        classArticles[class_id].forEach(function(item){
            article[item.id] = item;
        });
    })
    Object.keys(article).forEach(function(id){
        articles.push(article[id]);
    });
    next();
},function(next){
    debug('保存文章详情');
    async.eachSeries(articles,function(item,done){
        read.articleDetail(item.url,function(err,ret){
            write.articleDetail(item.id,item.title,ret.tags,ret.content,done)
        })
    },next);
}],function(err,result){
    if(err)
    console.error(err);
    console.log('done');
});