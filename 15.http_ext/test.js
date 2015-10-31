var core = require('./core');

// update 加密的内容  digest输出摘要 base64编码
function getHash(content){
    return core.crypto.createHash('sha1').update(content).digest('hex');
}
console.log(getHash(''));
console.log(getHash('1'));
console.log(getHash('1'));