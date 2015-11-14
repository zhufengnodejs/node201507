var request = require('request');
var cheerio = require('cheerio');
var util = require('util');
var debug = require('debug')('crawl:read');
//
///http://blog.csdn.net/hongqishi
//读取文章的分类
exports.classList = function(url,callback){
    debug('读取文章的分类信息:%s',url);
    request(url,function(err,res){
        if(err)
            return callback(err);
        //解析响应体
        var $ = cheerio.load(res.body.toString());
        var classList = [];
        $('.panel_body li a').each(function(){
            var $this = $(this);//a标签
            var item = {
                name:$this.text().trim(),
                url:"http://blog.csdn.net/"+$this.attr('href')
            };
            var s = item.url.match(/\/article\/category\/(\d+)/);
            if(Array.isArray(s)){
                item.id = s[1];
                classList.push(item);
            }
        });
        callback(err,classList);
    });
}
//读取文章分类下面的文章列表
//http://blog.csdn.net/hongqishi/article/category/1075271
exports.classArticles =function(url,callback){
    debug('读取分类下面的文章列表:%s',url);
    request(url,function(err,res) {
        if (err)
            return callback(err);
        var articleList = [];
        //解析响应体
        var $ = cheerio.load(res.body.toString());
        $('#article_list .article_item').each(function(){
            var $this = $(this);
            var $title = $this.find('.link_title a');
            var $time = $this.find('.article_manage .link_postdate');
            var item = {
                title : $title.text().trim(),//标题
                url:"http://blog.csdn.net/"+$title.attr('href'),
                time:$time.text().trim()//时间
            }
            var s = item.url.match(/\/article\/details\/(\d+)/);
            if(Array.isArray(s)){
                item.id = s[1];
                articleList.push(item);
            }
        });
        callback(err,articleList);
    });
}
//获取文章的内容
//http://blog.csdn.net/hongqishi/article/details/7454237
exports.articleDetail =function(url,callback){
    debug('读取文章的详情:%s',url);
    request(url,function(err,res) {
        if (err)
            return callback(err);

        var $ = cheerio.load(res.body.toString());
        var tags = [];
        $('.tag2box a').each(function(){
            var tag = $(this).text().trim();
            if(tag)
                tags.push(tag);
        });
        var content = $('.article_content').html().trim();
        callback(err,{tags:tags,content:content});
    });
}
/*

exports.classList('http://blog.csdn.net/hongqishi',function(err,classList){
    if(err)
    throw err;
    classList.forEach(function(cls){
        //console.log(cls);
    });
});
exports.classArticles('http://blog.csdn.net/hongqishi/article/category/1075271',function(err,articleList){
    if(err)
        throw err;
    articleList.forEach(function(article){
       // console.log(article);
    });
});
exports.articleDetail('http://blog.csdn.net/hongqishi/article/details/7454237',function(err,article){
    if(err)
        throw err;
    article.tags.forEach(function(tag){
        console.log(tag);
    });
    console.log(article.content);
});*/
