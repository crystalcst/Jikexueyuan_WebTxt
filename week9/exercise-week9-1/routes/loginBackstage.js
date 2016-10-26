/*
* @Author: lenovo
* @Date:   2016-05-31 22:57:34
* @Last Modified by:   lenovo
* @Last Modified time: 2016-05-31 22:58:15
*/

'use strict';
var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var app = express();
var mysql = require('mysql'); //调用mysql模块


/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', {
        title: '百度新闻后台登录系统',
    });
});

module.exports = router;
