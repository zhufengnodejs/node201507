var person = require('./person');
/**
 *  extensions:
   { '.js': [Function], js文件
   '.json': [Function], JSON文件
   '.node': [Function: dlopen] }, 二进制文件
   '.mp3':[]
 先取没有后缀的->加.js后缀->加.json->加.node
 */

console.log(person);

