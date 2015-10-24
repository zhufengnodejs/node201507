/**

 **/

var path = require('path');//处理路径
var fs = require('fs');

/**
 * normalize 将非标准路径转化为标准路径
 * 1.解析 . ..
 * 2.多个杠转成一个杠
 * 3 windows下的杠 \ 转成linux下的杠 /
 * 4.如果以杠结尾，转留结尾的杠
 **/
console.log(path.normalize('.//a//b////c/../../d/'));// a\d\

/**
 * path.join
 * 将多个参数值字符串合并为一个路径字符串
 */
console.log(path.join(__dirname,'a','b','..','msg'));// __dirname/a/msg

/**
 * resolve
 * 以应用程序根目录为起点，根据参数的值解析出一个绝对路径
 * 1. 以程序根目录为起点
 * 2. 解析 .. .
 * 3. 普通字符串代表当前目录的子目录
 * 4. / 绝对路径，代表当前盘符下面的根目录
 * 5. 如果没有下一个参数，返回当前路径
 **/
console.log(__dirname);
console.log(path.resolve());//空参数代表当前目录路径  __dirname
console.log(path.resolve('/a','..','b','c'));// e:\b\c
console.log(path.resolve('.','b','..','readme.txt')); // __dirname+c

/**
 * dirname 取得参数的父目录,也就是所属目录
 *
 **/
console.log(path.dirname(__dirname));
console.log(path.dirname(__filename));
console.log(path.dirname('./write.txt'));

//取得文件名
console.log(path.basename('./../../write.txt'));
console.log(path.basename('./../../write.txt','.txt'));
console.log(path.extname('./../../write.txt'));//取得扩展名，文件的后缀

console.log(path.sep);//路径分隔符 \ /
console.log(path.delimiter);//环境变量路径分隔符 ;