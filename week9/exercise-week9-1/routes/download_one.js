/*
* @Author: lenovo
* @Date:   2016-06-03 13:52:19
* @Last Modified by:   lenovo
* @Last Modified time: 2016-06-03 14:12:01
*/

'use strict';
/*
 * @Author: lenovo
 * @Date:   2016-05-15 20:25:31
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-06-03 13:25:53
 */

'use strict';

var express = require('express');
var fs = require('fs');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var mysql = require('mysql'); //调用mysql模块

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
    var newsid = req.body.newsid;
    var localsql = 'SELECT * FROM localnews WHERE newsid= ?';
    var imgsql = 'SELECT * FROM imgnews WHERE newsid= ?';
    var playsql = 'SELECT * FROM playnews WHERE newsid= ?';
    var newsid_parameter = [newsid];
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

    connection.query(currentsql, newsid_parameter, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        // console.log(result);
        res.send(result);
        // connection.end();
    });
});

module.exports = router;
