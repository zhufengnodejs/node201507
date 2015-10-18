/**
 * 在node.js中，使用fs模块实现文件和目录的操作
 * 每个方法均实现同步和异步两种
 * sync 同步
 * 不带 sync 异步
 */

var fs = require('fs');

var content = fs.readFileSync('index.html','utf8');
console.log(content);

