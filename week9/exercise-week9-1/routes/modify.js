/*
 * @Author: lenovo
 * @Date:   2016-06-05 15:58:34
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-06-08 13:57:58
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
    var newsclass = req.body.classifymod;
    var newstitle = req.body.newstitlemod;
    var newsimg = req.body.newsimgmod;
    var newscontent = req.body.newscontentmod;
    var newsaddtime = req.body.newsaddtimemod;
    var newsid = req.body.newsidmod;
    console.log(req.body);
    var localsql = 'UPDATE localnews SET newsclass = ?,newstitle = ?,newsimg = ?,newscontent = ?,newsaddtime = ? WHERE newsid = ?';
    var imgsql = 'UPDATE imgnews SET newsclass = ?,newstitle = ?,newsimg = ?,newscontent = ?,newsaddtime = ? WHERE newsid = ?';
    var playsql = 'UPDATE playnews SET newsclass = ?,newstitle = ?,newsimg = ?,newscontent = ?,newsaddtime = ? WHERE newsid = ?';
    var newssql_parameter = [newsclass, newstitle, newsimg, newscontent, newsaddtime, newsid];
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
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }

        res.render('backtoStage', {
            p:'1 news was updated successfully!',
        });
        // connection.end();
    });
});

module.exports = router;
