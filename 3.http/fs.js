var fs = require('fs');

console.log('a');
//var content = fs.readFileSync('index.html');//同步

fs.readFile('index.html',function(err,content){
    console.log(content.toString());
});

console.log('b');



