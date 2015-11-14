var mysql = require('mysql');
var debug = require('debug')('crawl:write');
var async = require('async');
var connection = mysql.createConnection({
    host:'123.57.143.189',
    user:'root',
    password:'zfpx2015',
    database:'zfpx'
});
connection.connect();

exports.classList = function(classList,callback){
    debug('保存文章的分类列表');
    async.eachSeries(classList,function(item,next){
        connection.query('replace into class_list(id,name,url) values(?,?,?)',[item.id,item.name,item.url],next);
    },callback);
}

exports.classArticles = function(class_id,list,callback){
    debug('保存分类下面的文章列表%d',class_id);
    async.eachSeries(list,function(item,next){
        connection.query('replace into article_list(id,title,url,postdate,class_id) values(?,?,?,?,?)',[item.id,item.title,item.url,item.time,class_id],next);
    },callback);
}

exports.articleDetail = function(id,title,tags,content,callback){
    debug('保存文章的详情:%d',id);
    connection.query('replace into article_detail(id,title,tags,content) values(?,?,?,?)',[id,title,tags.join(','),content],callback);
}