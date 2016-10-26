/*
 * @Author: lenovo
 * @Date:   2016-05-15 20:25:31
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-06-08 13:45:26
 */

'use strict';

var express = require('express');
var fs = require('fs');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var mysql = require('mysql'); //调用mysql模块
var moment = require('moment');

var app = express();
var router = express.Router();


// 创建一个connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'baidunews',
});

// 监听post请求，并将index.ejs发送来的html请求保存
router.post('/', function(req, res) {
    var newsclass = req.body.newsclass;
    var localsql = 'SELECT * FROM localnews';
    var imgsql = 'SELECT * FROM imgnews';
    var playsql = 'SELECT * FROM playnews';
    var currentsql;

    connection.connect(function(err) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        // console.log('[connection connect] succeed');
    });

    switch (newsclass) {
        case '本地':
            currentsql = localsql;
            break;
        case '图片':
            currentsql = imgsql;
            break;
        case '娱乐':
            currentsql = playsql;
            break;
    }

    connection.query(currentsql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        res.send(result);
        // connection.end();
    });
});

module.exports = router;
