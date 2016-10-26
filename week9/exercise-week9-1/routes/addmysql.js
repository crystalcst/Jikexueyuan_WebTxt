/*
 * @Author: lenovo
 * @Date:   2016-06-05 15:58:34
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-06-08 11:13:49
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
    //上传图片并重命名保存在服务器public下的images文件夹中
    var form = new multiparty.Form({
        uploadDir: './public/images'
    }); //生成multiparty对象，并配置上传文件目标地址
    form.parse(req, function(err, fields, files) { //上传之后的处理
        var fileTmp = JSON.stringify(files, null, 2);

        if (err) {
            console.log('parse error: ' + err);
        } else {
            console.log('parse file: ' + fileTmp);

            var inputFile = JSON.parse(fileTmp);
            // console.log(inputFile);
            var uploadedPath = inputFile.newsimg[0].path;
            var dstPath = "./public/images/" + inputFile.newsimg[0].originalFilename; //重命名为真实文件名

            fs.rename(uploadedPath, dstPath, function(err) {
                if (err) {
                    console.log('rename error: ' + err);

                } else {
                    console.log('rename OK!');
                }
            });
        }
    });


    //链接MySQL数据库，将添加信息写入数据库中
    var newsclass = req.body.classify;
    var newstitle = req.body.newstitle;
    var newsimg = req.files.newsimg.originalFilename;
    var newscontent = req.body.newscontent;
    var newsaddtime = req.body.newsaddtime;
    console.log(req.body);
    var localsql = 'INSERT INTO localnews(newsclass,newstitle,newsimg,newscontent,newsaddtime) VALUES(?,?,?,?,?)';
    var imgsql = 'INSERT INTO imgnews(newsclass,newstitle,newsimg,newscontent,newsaddtime) VALUES(?,?,?,?,?)';
    var playsql = 'INSERT INTO playnews(newsclass,newstitle,newsimg,newscontent,newsaddtime) VALUES(?,?,?,?,?)';
    var newssql_parameter = [newsclass, newstitle, newsimg, newscontent, newsaddtime];
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
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }

        res.render('backtoStage', {
            p:'1 news was added successfully!',
        });
        // connection.end();
    });
});

module.exports = router;
