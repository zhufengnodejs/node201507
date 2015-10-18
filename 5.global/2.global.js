var g = require('./1.global');// script src=
console.log(a);
console.log(b);
console.log(__filename);
console.log(__dirname);
/**
 * exports 导出对象
 * require 函数
 * module 当前模块
 * __filename 当前文件的绝对路径
 * __dirname 当前文件的所在目录

 */
/*(function (exports, require, module, __filename, __dirname) {
    console.log(a);
})*/

process.kill(3564,"SIGTERM");