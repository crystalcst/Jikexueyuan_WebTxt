/*
 * @Author: lenovo
 * @Date:   2016-04-19 10:02:02
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-04-19 18:45:34
 */

'use strict';

// 轮播js

define(function(require, exports, module) {

    exports.autoPlay = function() {
        var hasStarted = false; //是否开始播放
        var interval; //循环函数
        var imgLen = $(".banner-box img").length; //图片的总数
        var imgWidth = $(".banner-box img").eq(0).width(); //图片的宽度
        var preIndex, currentIndex = 0; //初始化现在图片位置和上一张图片位置
        nextCopy($(".banner-box"), $(".banner-box li").eq(0), "img-add"); //把第一张图片复制一张，放到最后一张后
        preCopy($(".banner-box"), $(".banner-box li").eq(imgLen - 1), "img-add"); //把最后一张图片复制一张，放到第一张前
        $(".banner-box").css({ //设置初始容器左偏移，增加的li总长度的一半
            marginLeft: -imgWidth * $(".img-add").length / 2
        });
        $(".banner-box").width(imgWidth * (imgLen + $(".img-add").length)); //设置容器的总宽度；

        autoPlay(); //开始自动播放

        // 设置一系列DOM事件

        // 停止轮播, 开始轮播——————鼠标的hover事件

        $(".index-banner").on("mouseenter", function() {
            $(".banner-arrow").show();
            stopPlay();
        });

        $(".index-banner").on("mouseleave", function() {
            $(".banner-arrow").hide();
            autoPlay();
        });

        //向前翻，向后翻————————鼠标的click事件

        $(".banner-left").on("click", function() {
            pre();
        });

        $(".banner-right").on("click", function() {
            next();
        });

        $(".line-box .line").on("click", function() {
            preIndex = currentIndex;
            currentIndex = $(".line-box .line").index(this);
            playImg(preIndex, currentIndex, 1000);
        });

        //向前复制内容
        function preCopy(positon, target, className) {
            var newLi = document.createElement('li');
            var newClass = $(newLi).addClass(className);
            return positon.prepend(newClass.html(target.html()));
        }

        //向后复制内容
        function nextCopy(positon, target, className) {
            var newLi = document.createElement("li");
            var newClass = $(newLi).addClass(className);
            return positon.append(newClass.html(target.html()));
        }
        //上一张
        function pre() {
            preIndex = currentIndex;
            currentIndex--;
            playImg(preIndex, currentIndex, 500);
            if (currentIndex < 0) {
                currentIndex += imgLen;
                playImg(preIndex, currentIndex, 0);
            }
        }

        //下一张
        function next() {
            preIndex = currentIndex;
            currentIndex++;
            playImg(preIndex, currentIndex, 500);
            if (currentIndex == imgLen) {
                currentIndex = 0;
                playImg(preIndex, currentIndex, 0);
            }
        }
        //播放图片
        function playImg(preIndex, currentIndex, time) {
            $(".banner-box").animate({
                marginLeft: "-" + imgWidth * (currentIndex + 1) + "px"
            }, time);
            $(".line-box .bg-green").removeClass("bg-green");
            $(".line-box .line").eq(currentIndex).addClass("bg-green");
        }
        //轮播自动播放
        function autoPlay() {
            if (!hasStarted) {
                hasStarted = true;
                interval = setInterval(next, 3000);
            }
        }

        // 停止轮播
        function stopPlay() {
            clearInterval(interval);
            hasStarted = false;
        }
    }

    exports.handPlay = function() {
        var imgLen = $(".focus-box li").length; //图片的总数
        var imgWidth = $(".focus-box li").eq(0).width() + 1; //图片的宽度
        var preIndex, currentIndex = 0; //初始化现在图片位置和上一张图片位置

        nextCopy($(".focus-box"), $(".focus-box li").eq(0), "imgadd"); //把第一张图片复制一张，放到最后一张后
        nextCopy($(".focus-box"), $(".focus-box li").eq(1), "imgadd");
        nextCopy($(".focus-box"), $(".focus-box li").eq(2), "imgadd");
        // preCopy($(".focus-box"), $(".focus-box li").eq(imgLen - 2), "imgadd");
        preCopy($(".focus-box"), $(".focus-box li").eq(imgLen - 1), "imgadd"); //把最后一张图片复制一张，放到第一张前
        $(".focus-box").css({ //设置初始容器左偏移，增加的li总长度的一半
            marginLeft: -imgWidth
        });
        $(".focus-box").width(imgWidth * (imgLen + $(".imgadd").length)); //设置容器的总宽度；

        //DOM
        //鼠标进入，出去DOM-----hover效果
        $(".focus-wrapper").mouseenter(function() {
            $(".focus-left").css({
                display: "inline-block"
            });
            $(".focus-right").css({
                display: "inline-block"
            });
        }).mouseleave(function() {
            $(".focus-left").css({
                display: "none"
            });
            $(".focus-right").css({
                display: "none"
            });
        });

        //鼠标点击事件
        $(".focus-left").on("click", function() {
            pre();
        });

        $(".focus-right").on("click", function() {
            next();
        });


        //向前复制内容
        function preCopy(positon, target, className) {
            var newLi = document.createElement('li');
            var newClass = $(newLi).addClass(className);
            return positon.prepend(newClass.html(target.html()));
        }

        //向后复制内容
        function nextCopy(positon, target, className) {
            var newLi = document.createElement("li");
            var newClass = $(newLi).addClass(className);
            return positon.append(newClass.html(target.html()));
        }
        //上一张
        function pre() {
            preIndex = currentIndex;
            currentIndex--;
            playImg(preIndex, currentIndex, 500);
            if (currentIndex < 0) {
                currentIndex += imgLen;
                playImg(preIndex, currentIndex, 0);
            }
        }

        //下一张
        function next() {
            preIndex = currentIndex;
            currentIndex++;
            playImg(preIndex, currentIndex, 500);
            if (currentIndex == imgLen) {
                currentIndex = 0;
                playImg(preIndex, currentIndex, 0);
            }
        }
        //播放图片
        function playImg(preIndex, currentIndex, time) {
            $(".focus-box").animate({
                marginLeft: "-" + imgWidth * (currentIndex + 1) + "px"
            }, time);
        }
    }

    exports.handPlayStrategy = function() {
        var imgLen = $(".strategy-box li").length; //图片的总数
        var imgWidth = $(".strategy-box li").eq(0).width(); //图片的宽度
        var preIndex, currentIndex = 0; //初始化现在图片位置和上一张图片位置

        nextCopy($(".strategy-box"), $(".strategy-box li").eq(0), "imgaddStr"); //把第一张图片复制一张，放到最后一张后
        nextCopy($(".strategy-box"), $(".strategy-box li").eq(1), "imgaddStr");
        nextCopy($(".strategy-box"), $(".strategy-box li").eq(2), "imgaddStr");
        nextCopy($(".strategy-box"), $(".strategy-box li").eq(3), "imgaddStr");
        nextCopy($(".strategy-box"), $(".strategy-box li").eq(4), "imgaddStr");
        nextCopy($(".strategy-box"), $(".strategy-box li").eq(5), "imgaddStr");

        // preCopy($(".strategy-box"), $(".strategy-box li").eq(imgLen - 2), "imgadd");
        preCopy($(".strategy-box"), $(".strategy-box li").eq(imgLen - 1), "imgaddStr"); //把最后一张图片复制一张，放到第一张前
        $(".strategy-box").css({ //设置初始容器左偏移，增加的li总长度的一半
            marginLeft: -imgWidth
        });
        $(".strategy-box").width(imgWidth * (imgLen + $(".imgaddStr").length)); //设置容器的总宽度；

        //DOM
        //鼠标进入，出去DOM-----hover效果
        $(".strategy").mouseenter(function() {
            $(".strategy-left").css({
                display: "inline-block"
            });
            $(".strategy-right").css({
                display: "inline-block"
            });
        }).mouseleave(function() {
            $(".strategy-left").css({
                display: "none"
            });
            $(".strategy-right").css({
                display: "none"
            });
        });

        //鼠标点击事件
        $(".strategy-left").on("click", function() {
            pre();
        });

        $(".strategy-right").on("click", function() {
            next();
        });


        //向前复制内容
        function preCopy(positon, target, className) {
            var newLi = document.createElement('li');
            var newClass = $(newLi).addClass(className);
            return positon.prepend(newClass.html(target.html()));
        }

        //向后复制内容
        function nextCopy(positon, target, className) {
            var newLi = document.createElement("li");
            var newClass = $(newLi).addClass(className);
            return positon.append(newClass.html(target.html()));
        }
        //上一张
        function pre() {
            preIndex = currentIndex;
            currentIndex--;
            playImg(preIndex, currentIndex, 500);
            if (currentIndex < 0) {
                currentIndex += imgLen;
                playImg(preIndex, currentIndex, 0);
            }
        }

        //下一张
        function next() {
            preIndex = currentIndex;
            currentIndex++;
            playImg(preIndex, currentIndex, 500);
            if (currentIndex == imgLen) {
                currentIndex = 0;
                playImg(preIndex, currentIndex, 0);
            }
        }
        //播放图片
        function playImg(preIndex, currentIndex, time) {
            $(".strategy-box").animate({
                marginLeft: "-" + imgWidth * (currentIndex + 1) + "px"
            }, time);
        }
    }

    exports.handPlaySchool = function() {
        var imgLen = $(".school-box li").length; //图片的总数
        var imgWidth = $(".school-box li").eq(0).width(); //图片的宽度
        var preIndex, currentIndex = 0; //初始化现在图片位置和上一张图片位置

        nextCopy($(".school-box"), $(".school-box li").eq(0), "imgaddSch"); //把第一张图片复制一张，放到最后一张后
        nextCopy($(".school-box"), $(".school-box li").eq(1), "imgaddSch");
        nextCopy($(".school-box"), $(".school-box li").eq(2), "imgaddSch");
        nextCopy($(".school-box"), $(".school-box li").eq(3), "imgaddSch");
        nextCopy($(".school-box"), $(".school-box li").eq(4), "imgaddSch");
        nextCopy($(".school-box"), $(".school-box li").eq(5), "imgaddSch");
        nextCopy($(".school-box"), $(".school-box li").eq(6), "imgaddSch");

        // preCopy($(".school-box"), $(".school-box li").eq(imgLen - 2), "imgadd");
        preCopy($(".school-box"), $(".school-box li").eq(imgLen - 1), "imgaddSch"); //把最后一张图片复制一张，放到第一张前
        $(".school-box").css({ //设置初始容器左偏移，增加的li总长度的一半
            marginLeft: -imgWidth
        });
        $(".school-box").width(imgWidth * (imgLen + $(".imgaddSch").length)); //设置容器的总宽度；

        //DOM
        //鼠标进入，出去DOM-----hover效果
        $(".schoolbox").mouseenter(function() {
            $(".school-left").css({
                display: "inline-block"
            });
            $(".school-right").css({
                display: "inline-block"
            });
        }).mouseleave(function() {
            $(".school-left").css({
                display: "none"
            });
            $(".school-right").css({
                display: "none"
            });
        });

        //鼠标点击事件
        $(".school-left").on("click", function() {
            pre();
        });

        $(".school-right").on("click", function() {
            next();
        });


        //向前复制内容
        function preCopy(positon, target, className) {
            var newLi = document.createElement('li');
            var newClass = $(newLi).addClass(className);
            return positon.prepend(newClass.html(target.html()));
        }

        //向后复制内容
        function nextCopy(positon, target, className) {
            var newLi = document.createElement("li");
            var newClass = $(newLi).addClass(className);
            return positon.append(newClass.html(target.html()));
        }
        //上一张
        function pre() {
            preIndex = currentIndex;
            currentIndex--;
            playImg(preIndex, currentIndex, 500);
            if (currentIndex < 0) {
                currentIndex += imgLen;
                playImg(preIndex, currentIndex, 0);
            }
        }

        //下一张
        function next() {
            preIndex = currentIndex;
            currentIndex++;
            playImg(preIndex, currentIndex, 500);
            if (currentIndex == imgLen) {
                currentIndex = 0;
                playImg(preIndex, currentIndex, 0);
            }
        }
        //播放图片
        function playImg(preIndex, currentIndex, time) {
            $(".school-box").animate({
                marginLeft: "-" + imgWidth * (currentIndex + 1) + "px"
            }, time);
        }
    }

    exports.handPlayReport = function() {
        var imgLen = $(".report-box li").length; //图片的总数
        var imgWidth = $(".report-box li").eq(0).width(); //图片的宽度
        var preIndex, currentIndex = 0; //初始化现在图片位置和上一张图片位置

        nextCopy($(".report-box"), $(".report-box li").eq(0), "imgaddRer"); //把第一张图片复制一张，放到最后一张后
        nextCopy($(".report-box"), $(".report-box li").eq(1), "imgaddRer");
        nextCopy($(".report-box"), $(".report-box li").eq(2), "imgaddRer");
        nextCopy($(".report-box"), $(".report-box li").eq(3), "imgaddRer");
        nextCopy($(".report-box"), $(".report-box li").eq(4), "imgaddRer");
        nextCopy($(".report-box"), $(".report-box li").eq(5), "imgaddRer");


        // preCopy($(".report-box"), $(".report-box li").eq(imgLen - 2), "imgadd");
        preCopy($(".report-box"), $(".report-box li").eq(imgLen - 1), "imgaddSch"); //把最后一张图片复制一张，放到第一张前
        $(".report-box").css({ //设置初始容器左偏移，增加的li总长度的一半
            marginLeft: -imgWidth
        });
        $(".report-box").width(imgWidth * (imgLen + $(".imgaddSch").length)); //设置容器的总宽度；

        //DOM
        //鼠标进入，出去DOM-----hover效果
        $(".report").mouseenter(function() {
            $(".report-left").css({
                display: "inline-block"
            });
            $(".report-right").css({
                display: "inline-block"
            });
        }).mouseleave(function() {
            $(".report-left").css({
                display: "none"
            });
            $(".report-right").css({
                display: "none"
            });
        });

        //鼠标点击事件
        $(".report-left").on("click", function() {
            pre();
        });

        $(".report-right").on("click", function() {
            next();
        });


        //向前复制内容
        function preCopy(positon, target, className) {
            var newLi = document.createElement('li');
            var newClass = $(newLi).addClass(className);
            return positon.prepend(newClass.html(target.html()));
        }

        //向后复制内容
        function nextCopy(positon, target, className) {
            var newLi = document.createElement("li");
            var newClass = $(newLi).addClass(className);
            return positon.append(newClass.html(target.html()));
        }
        //上一张
        function pre() {
            preIndex = currentIndex;
            currentIndex--;
            playImg(preIndex, currentIndex, 500);
            if (currentIndex < 0) {
                currentIndex += imgLen;
                playImg(preIndex, currentIndex, 0);
            }
        }

        //下一张
        function next() {
            preIndex = currentIndex;
            currentIndex++;
            playImg(preIndex, currentIndex, 500);
            if (currentIndex == imgLen) {
                currentIndex = 0;
                playImg(preIndex, currentIndex, 0);
            }
        }
        //播放图片
        function playImg(preIndex, currentIndex, time) {
            $(".report-box").animate({
                marginLeft: "-" + imgWidth * (currentIndex + 1) + "px"
            }, time);
        }
    }
});
