/**
 * Created by ll on 15/10/19.
 */

// add modules
var fs = require('fs');
var path = require('path');
var promise = require('./promise');
var Q = require('q');

//define variable
var absoluteDir = path.resolve();
var reqPath,pathname;

//define getExists
var getExists = function (src) {
    var deferred = Q.defer();
    reqPath = path.normalize(src);
    pathname = path.join(absoluteDir,reqPath);
    fs.exists(pathname,function(bool){
        if(bool){
            deferred.resolve(pathname);
        }else{
            deferred.reject('exists illegal!');
        }
    });
    return deferred.promise;
}

//define getStat
var getStat = function(data){
    fs.stat(data,function(err,stat){
        if(err){
            return err;
        }else{
            return stat;
        }
    });
    /*var deferred = Q.defer();
    fs.stat(data,function(err,stat){
        if(err){
            deferred.reject('error files');
        }else{
            deferred.resolve(stat);
        }
    });
    return deferred.promise;*/
}

//define getFileType
var getFileType = function(stat){
    var deferred = Q.defer();
    var fileType ={
        dir:1,
        file:2
    }
    var type;
    if(stat.isDirectory()){
        type = fileType.dir;
    }else if(stat.isFile()){
        type = fileType.file;
    }
    deferred.resolve(type);
    return deferred.promise;
}

//define readDir
var readDir = function(){
    var deferred = Q.defer();
    fs.readdir(pathname,function(err,data){
        if(err){
            deferred.reject('dir error');
        }else{
            deferred.resolve(data);
        }
    })
    return deferred.promise;
}

//define returnDirData
var returnDirData = function(files){
    var deferred = Q.defer();
    var data ='<ul>';
    files.forEach(function(file){
        if (pathname != absoluteDir) {
            pathname = pathname.replace(absoluteDir, "");
        }
        var filePath1 = path.join(pathname, file).replace(/\\/g, "/");

        if (path.extname(file)) {
            data += '<li class="gray"><a href="' + filePath1 + '">' + file + ' </a></li>';
        } else {
            data += '<li ><a href="' + filePath1 + '">' + file + '</a></li>';
        }
    });
    data +='</ul>';
    deferred.resolve(data);
    return deferred.promise;
}

//define readFile
var readFile = function(){
    var deferred = Q.defer();
    fs.readFile(pathname,{flag: "r"},function(err,data){
        if(err){
            deferred.reject('read file error');
        }else{
            deferred.resolve(data);
        }
    })
    return deferred.promise;
}



function getFileData(src,cb){
    getExists(src)
        .then(getStat)
        .then(getFileType)
        .then(function(type){
            if(type == 1){
                return readDir();
            }else{
                return readFile();
            }
        })
        .done(function(data){
            cb(null,data);
        },function(err){
            console.error(err);
        })
}


module.exports.getFileData = getFileData;














//function getFileType(src){
//    var fileType ={
//        notFound:0,
//        dir:1,
//        file:2
//    }
//    var type;
//    reqPath = path.normalize(src);
//    pathname = path.join(absoluteDir,reqPath);
//    fs.existsSync(pathname)
//    {
//        if (fs.statSync(pathname).isDirectory()) {
//            type = fileType.dir;
//        } else if (fs.statSync(pathname).isFile()) {
//            type = fileType.file;
//        }
//        else {
//            type = fileType.notFound;
//        }
//        return type;
//    }
//}
//
//function traverse(src){
//    var type = getFileType(src);
//    if(type == 1){//dir
//        fs.readdir(pathname, function (err, files) {
//            var data ='<ul>';
//            if(err){
//                console.error(err);
//            }else{
//                files.forEach(function(file){
//                    if (pathname != absoluteDir) {
//                        pathname = pathname.replace(absoluteDir, "");
//                    }
//                    var filePath1 = path.join(pathname, file).replace(/\\/g, "/");
//
//                    if (path.extname(file)) {
//                        data += '<li class="gray"><a href="' + filePath1 + '">' + file + ' </a></li>';
//                    } else {
//                        data += '<li ><a href="' + filePath1 + '">' + file + '</a></li>';
//                    }
//                });
//                data +='</ul>';
//                return data;
//            }
//        })
//    }else if(type ==2){//file
//        fs.readFile(pathname, {flag: "r"}, function (err, data) {
//            if (err) {
//                console.error(err);
//            } else {
//                return data;
//            }
//        });
//    }
//
//}
//
//module.exports.traverse = traverse;
//