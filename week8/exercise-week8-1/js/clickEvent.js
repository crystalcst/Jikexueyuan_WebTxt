/*
 * @Author: lenovo
 * @Date:   2016-04-25 20:16:15
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-05-10 21:42:00
 */

'use strict';



define(function(require, exports, module) {

    /**
     * [gotoIndex 点击百度btn跳转手机端百度首页]
     * @return {[type]} [没有返回值]
     */
    exports.gotoIndex = function() {
            $(document).ready(function() {
                $(".toolbar-baidu-btn").on("click", function() {
                    window.open("https://m.baidu.com/", "_self");
                });
            });
        }
        /**
         * [gotoUserhome 点击userbtn跳转userhome界面，实现双页向右滑动]
         * @return {[type]} [没有返回值]
         */
    exports.gotoUserhome = function() {
            $(document).ready(function() {
                $(".toolbar-user-btn").on("click", function() {
                    $("#userhome").animate({
                        "marginLeft": "0"
                    }, 300);
                    $("#wrapper").animate({
                        "marginLeft": "100%"
                    }, 300);
                });
            });
        }
        /**
         * [gotoUserhoneBack 点击backbtn跳转index界面，实现双页向左滑动]
         * @return {[type]} [没有返回值]
         */
    exports.gotoUserhomeBack = function() {
            $(document).ready(function() {
                $(".toolbar-back-btn").on("click", function() {
                    $("#userhome").animate({
                        "marginLeft": "-100%"
                    }, 300);
                    $("#wrapper").animate({
                        "marginLeft": "0"
                    }, 300);
                });
            });
        }
        /**
         * [gotoSearch 点击searchbtn跳转usersearch界面，实现双页向左滑动]
         * @return {[type]} [没有返回值]
         */
    exports.gotoSearch = function() {
            $(document).ready(function() {
                $(".toolbar-search-btn").on("click", function() {
                    $("#usersearch").animate({
                        "marginRight": "0"
                    }, 300);
                    $("#wrapper").animate({
                        "marginLeft": "-100%"
                    }, 300);
                });
            });
        }
        /**
         * [gotoSearchBack 点击back2btn跳转index界面，实现双页向右滑动]
         * @return {[type]} [没有返回值]
         */
    exports.gotoSearchBack = function() {
        $(document).ready(function() {
            $(".toolbar-back2-btn").on("click", function() {
                $("#usersearch").animate({
                    "marginRight": "-100%"
                }, 300);
                $("#wrapper").animate({
                    "marginLeft": "0"
                }, 300);
            });
        });
    }

    /**
     * [gotoMore 点击Morebtn跳转userMore界面，实现双页向左滑动]
     * @return {[type]} [没有返回值]
     */
    exports.gotoMore = function() {
            $(document).ready(function() {
                $(".toolbar-more-btn").on("click", function() {
                    $("#usermore").animate({
                        "marginRight": "0"
                    }, 300);
                    $("#wrapper").animate({
                        "marginLeft": "-100%"
                    }, 300);
                });
            });
        }
        /**
         * [gotoMoreBack 点击back2btn跳转index界面，实现双页向右滑动]
         * @return {[type]} [没有返回值]
         */
    exports.gotoMoreBack = function() {
            $(document).ready(function() {
                $(".toolbar-back3-btn").on("click", function() {
                    $("#usermore").animate({
                        "marginRight": "-100%"
                    }, 300);
                    $("#wrapper").animate({
                        "marginLeft": "0"
                    }, 300);
                });
            });
        }
        /**
         * [more 点击morebtn展开主导航栏]
         * @return {[type]} [没有返回值]
         */
    exports.more = function() {
        $(document).ready(function() {
            $(".more").on("click", function() {
                $("#wap-navbar").animate({
                    "height": "165px"
                });
                $(".hide").addClass("active");
                $(".navbar-footer").show();
            });
        });
    }

    /**
     * [moreBack 点击upstraightbtn折叠主导航栏]
     * @return {[type]} [没有返回值]
     */
    exports.moreBack = function() {
            $(document).ready(function() {
                $(".retract").on("click", function() {
                    $("#wap-navbar").animate({
                        "height": "74px"
                    });
                    $(".active").removeClass("active");
                    $(".navbar-footer").hide();
                });
            });
        }
        /**
         * [recommend 点击u推荐按钮，服务器异步返回局部数据]
         * @return {[type]} [没有返回值]
         */

    exports.loginBackStage = function() {
        $(document).ready(function() {
            $(".login").on("click", function() {
                window.open("./login.html", "_blank");
            });
        });
    }

    /**
     * [local 点击服务器异步返回局部数据]
     * @return {[type]} [没有返回值]
     */
    exports.NewsAsk = function() {
        var creatNews = function(data) { //创建一套新的内容添加到<article>中
            var newDB = data,
                dataLength = data.length;
            for (var i = 0; i < dataLength; i++) {
                var newsbox = document.createElement('div');
                newsbox = $(newsbox).appendTo('article').addClass('newsbox');
                var newsimg = document.createElement('div');
                newsimg = $(newsimg).appendTo(newsbox).addClass('newsimg');
                var img = document.createElement('img');
                img = $(img).appendTo(newsimg).attr({
                    'src': './img/' + newDB[i].newsimg,
                    'alt': newDB[i].newsid,
                });
                var newsmain = document.createElement('div');
                newsmain = $(newsmain).appendTo(newsbox).addClass('newsmain');
                var newstitle = document.createElement('p');
                newstitle = $(newstitle).appendTo(newsmain).addClass('newstitle');
                $(newstitle).html(newDB[i].newstitle);
                var newscontent = document.createElement('p');
                newscontent = $(newscontent).appendTo(newsmain).addClass('newscontent');
                $(newscontent).html(newDB[i].newscontent);
                var newsaddtime = document.createElement('p');
                newsaddtime = $(newsaddtime).appendTo(newsmain).addClass('newsaddtime');
                $(newsaddtime).html(newDB[i].newsaddtime);
            };
        };
        $(document).ready(function() { //一加载文档，就发送ajax请求，本地新闻的数据
            $.ajax({
                url: 'php/download.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    "newsclass": "本地"
                },
                success: function(data) {
                    creatNews(data);

                }
            })
            $(".local").on("click", function() { //单击本地按钮
                $('article').empty(); //清空<article>
                $.ajax({
                    url: 'php/download.php',
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
            $(".image").on("click", function() { //单击图片按钮
                $('article').empty(); //清空<article>
                $.ajax({ //发送ajax请求本地新闻数据
                    url: 'php/download.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        "newsclass": "图片"
                    },
                    success: function(data) {
                        creatNews(data);

                    }
                })
            });
            $(".play").on("click", function() { //单击图片按钮
                $('article').empty(); //清空<article>
                $.ajax({ //发送ajax请求本地新闻数据
                    url: 'php/download.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        "newsclass": "图片"
                    },
                    success: function(data) {
                        creatNews(data);
                    }
                })
            });
        });
    }
});
