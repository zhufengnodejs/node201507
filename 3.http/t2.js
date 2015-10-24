var fs = require('fs');
var path = require('path');
var Q = require('q');

function t1(){
    var deferred = Q.defer();
    deferred.resolve('1');
    return deferred.promise;
}

t1().then(function(){
    return 2;
}).then(function(pre){
    return pre+1;
}).done(function(res){
    console.log(res);
});