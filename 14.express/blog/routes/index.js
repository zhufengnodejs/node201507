var express = require('express');
var user = require('./user');
module.exports = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  app.get('/users',user);
}
