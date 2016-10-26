/*
 * @Author: lenovo
 * @Date:   2016-05-09 11:27:38
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-06-08 14:38:00
 */

'use strict';

define(function(require, exports, module) {
    /**
     * [addToMySQL 点击添加按钮，弹出相应添加窗口，可添加相应信息至mysql,单击关闭，关闭此窗口]
     * @return {[type]} [没有返回值]
     */
    exports.addToMySQL = function() {

        $(".maincontent").on("click", function(e) {
            if (e.target.className == 'addsql') {
                $('.addmysql-container').show();
            }
        });

        $('.btn-close').on("click", function() {
            $('.addmysql-container').hide();
        });
    }

    /**
     * [deleteMySQL 点击删除按钮，删除对应的mysql数据]
     * @return {[type]} [没有返回值]
     */
    exports.deleteMySQL = function() {

        var delSQL = function(e) {
            var newsclassText = $(e).children('td')[0];
            newsclassText = $(newsclassText).html();
            var newsidText = $(e).children('td')[1];
            newsidText = $(newsidText).html();
            var newsimgText = $(e).children('td')[3];
            newsimgText = $(newsimgText).html();
            var deldata = {
                    newsclass: newsclassText,
                    newsid: newsidText,
                    newsimg: newsimgText
                }

            $.ajax({
                url: '/deletemysql',
                type: 'POST',
                data: deldata,
                success: function(data) {

                }
            })
        };

        $(document).ready(function() {
            $('.maincontent').on("click", function(e) {
                if (e.target.className == 'delete') {
                    var delEvent = confirm("确认要删除此条新闻数据吗？");
                    if (delEvent == true) {
                        var deleTarget = $(e.target).parent().parent('tr');
                        $(deleTarget).remove();
                        delSQL(deleTarget);
                    }
                }
            });
        })
    }

    /**
     * [searchMySQL 点击查询按钮，弹出查询窗口，选择对应值可以查询出信息，并且标记颜色为黄色]
     * @return {[type]} [没有返回值]
     */
    exports.searchMySQL = function() {

            var searchResult = function(data) {
                var newDB = data;
                var newDBLenth = data.length;
                if (newDBLenth == 0) {
                    alert("没查找到相关数据！");
                } else {
                    var table = document.createElement('table');
                    table = $(table).appendTo('.maincontent').addClass('search-table');
                    var tbody = document.createElement('tbody'); //tbody添加到table中
                    tbody = $(tbody).appendTo(table);
                    var thead = document.createElement('thead'); //thead添加到tbody中
                    thead = $(thead).appendTo(table);
                    var th1 = document.createElement('th'); //th添加到thead中
                    th1 = $(th1).appendTo(thead);
                    $(th1).html('新闻类别');
                    var th2 = document.createElement('th');
                    th2 = $(th2).appendTo(thead);
                    $(th2).html('新闻ID');
                    var th3 = document.createElement('th');
                    th3 = $(th3).appendTo(thead);
                    $(th3).html('新闻标题');
                    var th4 = document.createElement('th');
                    th4 = $(th4).appendTo(thead);
                    $(th4).html('新闻图片');
                    var th5 = document.createElement('th');
                    th5 = $(th5).appendTo(thead);
                    $(th5).html('新闻内容');
                    var th6 = document.createElement('th');
                    th6 = $(th6).appendTo(thead);
                    $(th6).html('添加时间');
                    var th7 = document.createElement('th');
                    th7 = $(th7).appendTo(thead);
                    $(th7).html('操作');
                    for (var i = 0; i < newDBLenth; i++) {
                        var tr = document.createElement('tr');
                        tr = $(tr).appendTo(tbody);
                        var td1 = document.createElement('td');
                        td1 = $(td1).appendTo(tr);
                        $(td1).html(newDB[i].newsclass);
                        var td2 = document.createElement('td');
                        td2 = $(td2).appendTo(tr).addClass('newsid');
                        $(td2).html(newDB[i].newsid);
                        var td3 = document.createElement('td');
                        td3 = $(td3).appendTo(tr);
                        $(td3).html(newDB[i].newstitle);
                        var td4 = document.createElement('td');
                        td4 = $(td4).appendTo(tr);
                        $(td4).html(newDB[i].newsimg);
                        var td5 = document.createElement('td');
                        td5 = $(td5).appendTo(tr);
                        $(td5).html(newDB[i].newscontent);
                        var td6 = document.createElement('td');
                        td6 = $(td6).appendTo(tr);
                        $(td6).html(newDB[i].newsaddtime);
                        var td7 = document.createElement('td');
                        td7 = $(td7).appendTo(tr);
                    }
                }
            };
            $(document).ready(function() {
                $('.maincontent').on("click", function(e) {
                    if (e.target.className == 'searchsql') {
                        $('.searchmysql-container').show();
                    }
                });
                $('.btn-close').on("click", function() {
                    $('.searchmysql-container').hide();
                });
                $('#search-submit').on("click", function() {
                    $('.searchmysql-container').hide();
                    $('.search-table').empty();
                    var newsclass = $('#classifysearch').val();
                    var newsid = $('#newsidsearch').val();
                    console.log(newsid);
                    var newstitle = $('#newstitlesearch').val();
                    var newsimg = $('#newsimgsearch').val();
                    var newscontent = $('#newscontentsearch').val();
                    var newsaddtime = $('#newsaddtimesearch').val();
                    var searchFormData = {
                        newsclass: newsclass,
                        newsid: newsid,
                        newstitle: newstitle,
                        newsimg: newsimg,
                        newscontent: newscontent,
                        newsaddtime: newsaddtime,
                    }
                    $.ajax({
                        url: '/searchmysql',
                        type: 'POST',
                        data: searchFormData,
                        success: function(data) {
                            searchResult(data);
                        }
                    })
                });
            });
        }
        /**
         * [modifyMySQL 点击修改按钮，修改对应的mysql数据]
         * @return {[type]} [没有返回值]
         */
    exports.modifyMySQL = function() {
            var modifyDiv = function(data) {
                var newDB = data;

                $('#classifymod').attr({
                    'value': newDB[0].newsclass,
                });
                $('#classifymod option').each(function() {
                    if ($(this).val() == newDB[0].newsclass) {
                        $(this).attr({
                            'selected': 'selected',
                        });
                    }
                });
                $('#newsidmod').attr({
                    'value': newDB[0].newsid,
                });
                $('#newstitlemod').attr({
                    'value': newDB[0].newstitle,
                });
                $('#newsimgmod').attr({
                    'value': newDB[0].newsimg,
                });
                $('#newscontentmod').html(newDB[0].newscontent);
                $('#newsaddtimemod').attr({
                    'value': newDB[0].newsaddtime,
                });
            };
            // 根据修改按钮所在位置，发送对应的ajax请求，获取数据，执行modifyDiv()函数
            var modMySQL = function(e) {
                var newsclassText = $(e).children('td')[0];
                newsclassText = $(newsclassText).html();
                var newsidText = $(e).children('td')[1];
                newsidText = $(newsidText).html();
                var moddata = {
                    newsclass: newsclassText,
                    newsid: newsidText,
                }
                $.ajax({
                    url: '/download_one',
                    type: 'POST',
                    data: moddata,
                    datatype: 'json',
                    success: function(data) {
                        console.log(data);
                        modifyDiv(data);
                    }
                })
            };

            $(document).ready(function() {
                $('.maincontent').on("click", function(e) {
                    if (e.target.className == 'modify') {
                        $('.modmysql-container').show();
                        var modTarget = $(e.target).parent().parent('tr');
                        modMySQL(modTarget);
                    }
                });

                $('.btn-close').on("click", function() {
                    $('.modmysql-container').hide();
                });
            });
        }
        /**
         * [accessMySQL 点击本地新闻，图片新闻，娱乐新闻，向服务器发送ajax请求，并动态添加信息，将mysql信息显示在浏览器窗口中]
         * @return {[type]} [没有返回值]
         */
    exports.accessMySQL = function() {
        //creatNews 将json数据动态添加进相应的dom中
        var creatNews = function(data) { //创建一套新的内容添加到<div class="maincontent">中
                var newDB = data,
                    dataLength = data.length;
                var table = document.createElement('table');
                table = $(table).appendTo('.maincontent');
                var tbody = document.createElement('tbody'); //tbody添加到table中
                tbody = $(tbody).appendTo(table);
                var thead = document.createElement('thead'); //thead添加到tbody中
                thead = $(thead).appendTo(table);
                var th1 = document.createElement('th'); //th添加到thead中
                th1 = $(th1).appendTo(thead);
                $(th1).html('新闻类别');
                var th2 = document.createElement('th');
                th2 = $(th2).appendTo(thead);
                $(th2).html('新闻ID');
                var th3 = document.createElement('th');
                th3 = $(th3).appendTo(thead);
                $(th3).html('新闻标题');
                var th4 = document.createElement('th');
                th4 = $(th4).appendTo(thead);
                $(th4).html('新闻图片');
                var th5 = document.createElement('th');
                th5 = $(th5).appendTo(thead);
                $(th5).html('新闻内容');
                var th6 = document.createElement('th');
                th6 = $(th6).appendTo(thead);
                $(th6).html('添加时间');
                var th7 = document.createElement('th');
                th7 = $(th7).appendTo(thead);
                $(th7).html('操作');
                for (var i = 0; i < dataLength; i++) {
                    var tr = document.createElement('tr');
                    tr = $(tr).appendTo(tbody);
                    var td1 = document.createElement('td');
                    td1 = $(td1).appendTo(tr);
                    $(td1).html(newDB[i].newsclass);
                    var td2 = document.createElement('td');
                    td2 = $(td2).appendTo(tr).addClass('newsid');
                    $(td2).html(newDB[i].newsid);
                    var td3 = document.createElement('td');
                    td3 = $(td3).appendTo(tr);
                    $(td3).html(newDB[i].newstitle);
                    var td4 = document.createElement('td');
                    td4 = $(td4).appendTo(tr);
                    $(td4).html(newDB[i].newsimg);
                    var td5 = document.createElement('td');
                    td5 = $(td5).appendTo(tr);
                    $(td5).html(newDB[i].newscontent);
                    var td6 = document.createElement('td');
                    td6 = $(td6).appendTo(tr);
                    $(td6).html(newDB[i].newsaddtime);
                    var td7 = document.createElement('td');
                    td7 = $(td7).appendTo(tr);
                    var a1 = document.createElement('a');
                    a1 = $(a1).appendTo(td7).addClass('modify');
                    $(a1).html('修改');
                    var a2 = document.createElement('a');
                    a2 = $(a2).appendTo(td7).addClass('delete');
                    $(a2).html('删除');
                }
                var btn1 = document.createElement('div');
                btn1 = $(btn1).appendTo('.maincontent').addClass('addsql');
                $(btn1).html('添加');

                var btn2 = document.createElement('div');
                btn2 = $(btn2).appendTo('.maincontent').addClass('searchsql');
                $(btn2).html('查找');
            }
            //文档加载后，发送ajax请求，显示本地新闻数据库数据
        $(document).ready(function() {
            $.ajax({
                    url: '/download',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        "newsclass": "本地"
                    },
                    success: function(data) {
                        creatNews(data);
                    }
                })
            // 单击本地新闻按钮，先清空.maincontent div，在动态添加本地新闻数据库数据
            $(".localnews-btn").on("click", function() {
                $(".maincontent").empty(); //清空
                $(".active").removeClass('active');
                $(".localnews-btn").addClass('active');
                $.ajax({
                    url: '/download',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        "newsclass": "本地"
                    },
                    success: function(data) {
                            creatNews(data);
                        } //发送ajax请求本地新闻数据
                })
            });
            //单击图片新闻按钮，先清空.maincontent div，在动态添加图片新闻数据库数据
            $(".imgnews-btn").on("click", function() {
                $(".maincontent").empty(); //清空
                $(".active").removeClass('active');
                $(".imgnews-btn").addClass('active');
                $.ajax({
                    url: '/download',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        "newsclass": "图片"
                    },
                    success: function(data) {
                            creatNews(data);
                        } //发送ajax请求图片新闻数据
                })
            });
            //单击娱乐新闻按钮，先清空.maincontent div，在动态添加娱乐新闻数据库数据
            $(".playnews-btn").on("click", function() {
                $(".maincontent").empty(); //清空
                $(".active").removeClass('active');
                $(".playnews-btn").addClass('active');
                $.ajax({
                    url: '/download',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        "newsclass": "娱乐"
                    },
                    success: function(data) {
                            creatNews(data);
                        } //发送ajax请求娱乐新闻数据
                })
            });
        });
    }
});
