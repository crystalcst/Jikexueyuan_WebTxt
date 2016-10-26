/*
* @Author: lenovo
* @Date:   2016-05-31 23:16:13
* @Last Modified by:   lenovo
* @Last Modified time: 2016-05-31 23:16:59
*/

'use strict';
var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
var app = express();
var mysql = require('mysql'); //调用mysql模块


/* GET backstage page. */
router.post('/', function(req, res, next) {
    res.render('backstage', {
        title: '百度新闻后台管理系统',
    });
});

module.exports = router;
