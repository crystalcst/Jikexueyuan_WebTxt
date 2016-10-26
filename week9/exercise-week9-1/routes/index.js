var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var app = express();
var mysql = require('mysql'); //调用mysql模块


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '百度新闻',
    });
});

module.exports = router;
