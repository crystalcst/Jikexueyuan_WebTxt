/*
 * @Author: lenovo
 * @Date:   2016-06-05 15:58:34
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-06-08 14:33:17
 */

'use strict';


var express = require('express');
var multiparty = require('multiparty');
var fs = require('fs');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var mysql = require('mysql'); //调用mysql模块
var multipart = require('connect-multiparty');



var app = express();
var router = express.Router();
var multipartMiddleware = multipart();


// 创建一个connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'baidunews',
});


router.post('/', multipartMiddleware, function(req, res, next) {

    //链接MySQL数据库，将添加信息写入数据库中
    var newsclass = req.body.newsclass;
    var newstitle = req.body.newstitle;
    var newsimg = req.body.newsimg;
    var newscontent = req.body.newscontent;
    var newsaddtime = req.body.newsaddtime;
    var newsid = req.body.newsid;
    console.log(req.body);
    var localsql = 'SELECT * FROM localnews WHERE newsid = ? AND newstitle LIKE ? AND newsimg LIKE ? AND newscontent LIKE ? AND newsaddtime LIKE ?';
    var imgsql = 'SELECT * FROM localnews WHERE newsid = ? AND newstitle LIKE ? AND newsimg LIKE ? AND newscontent LIKE ? AND newsaddtime LIKE ?';
    var playsql = 'SELECT * FROM localnews WHERE newsid = ? AND newstitle LIKE ? AND newsimg LIKE ? AND newscontent LIKE ? AND newsaddtime LIKE ?';
    var newssql_parameter = [newsid, '%' + newstitle + '%', '%' + newsimg + '%', '%' + newscontent + '%', '%' + newsaddtime + '%'];
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

    connection.query(currentsql, newssql_parameter, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }

        res.send(result);
        // connection.end();
    });
});

module.exports = router;
