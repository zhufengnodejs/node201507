var Person = require('person')

var person = new Person();
console.log(person.getName());
/**
 * module
 *   loaded 是否加载完成
 *   parent 该模板被谁创建出来的
 *   children 自己创建了哪个模块
 *
 * resolve
 * main
 * cache
 * paths
 * extensions 文件的扩展名
 *
 *  paths:
 [ 'e:\\node201507\\8.module\\node_modules',
 'e:\\node201507\\node_modules',
 'e:\\node_modules' ] },
 */
console.log(require);
