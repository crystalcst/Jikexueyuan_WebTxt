/*
 * @Author: Crystal
 * @Date:   2016-04-11 16:13:49
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-04-14 11:21:18
 */



$(document).ready(function() {
    judgeSkin()
    weatherAdd();
    noticeAdd();
    skinChangeClick();
    skinChange();
    moreProduct();
    tabChange();
    backToTop();

});

/**
 * [weatherAdd description]
 * 监听天气链接，鼠标放在上面，显示天气iframe；鼠标从iframe上移开，隐藏天气iframe
 */
function weatherAdd() {
    var timeoutId;
    var timeoutId1;
    $("#iframe").hide();
    $("#weather").mouseover(function() { //鼠标在天气链接上时
        timeouId = setTimeout(function() {
            $("#iframe").show();
            $(".notice").hide(); // noticeAdd(); //当天气显示时，关闭消息栏
        }, 300); //防误触，设置延迟300ms
    }).mouseout(function() {
        clearTimeout(timeouId) //清除延迟
    });
    $("#iframe").mouseout(function() { //鼠标离开iframe时，设置iframe消失
        timeoutId1 = setTimeout(function() {
            $("#iframe").hide();
        }, 300);
    });
}
/**
 * [noticeAdd description]
 * 点击消息，跳出消息提示
 */

function noticeAdd() {
    var $clickTarget = $("#notice"); //把消息a标签赋给clickTarget这样一个JQuery对象
    $(".notice").hide(); //让消息框先隐藏；
    $(document).on("click", function(e) { //判定文档的点击事件，
        if (e.target == $clickTarget[0] || $.contains($clickTarget[0], e.target)) { //目标为消息a链接时
            if ($(".notice").attr("style") == "display: none;") {
                $("#iframe").hide();
                $(".notice").show();
            } else {
                $(".notice").hide();
            }
        } else {
            $(".notice").hide();
        }
    });
}



/**
 * [moreProduct description]
 * 鼠标滑过更多产品显示更多产品栏，更多产品栏会随窗口变小滚动
 */

function moreProduct() {
    var timeoutId;
    var timeoutId1;
    $(".btn").mouseenter(function() { //鼠标在更多产品链接上时
        timeouId = setTimeout(function() {
            $(".list").show();
            $(".btn").attr("style", "background:#f9f9f9");
            $(".btn a").attr("style", "color:#666");
            $(".moreproduct").addClass("background");
        }, 300);
    }).mouseleave(function() {
        clearTimeout(timeouId) //清除延迟
    });
    $(".moreproduct").mouseleave(function() { //鼠标离开更多产品栏时
        timeoutId1 = setTimeout(function() {
            $(".list").hide();
            $(".btn").attr("style", "background:#4369D5");
            $(".btn a").attr("style", "color:#fff");
            $(".moreproduct").removeClass("background");
        }, 300);
    });
}

/**
 * [tabChange description]
 * 鼠标点击各个标签，实现页面内容的加载
 */

function tabChange() {
    $("#realcontent").load("./realcontent.html"); //加载realcontent.html
    $("section a").each(function(index) { //遍历section下面的a标签
        $(this).click(function() { //点击事件
            $("section li .activate").removeClass("activate"); //移除a中active标签
            $(this).addClass("activate"); //给当前点击项加上active
            if (index == 0) { //如果是第一项
                $(".current div").removeClass("realcontent");
                $(".content1").addClass("realcontent");
            } else if (index == 1) {
                $(".current div").removeClass("realcontent");
                $(".content2").addClass("realcontent");
            } else if (index == 2) {
                $(".current div").removeClass("realcontent");
                $(".content3").addClass("realcontent");
            } else if (index == 3) {
                $(".current div").removeClass("realcontent");
                $(".content4").addClass("realcontent");
            } else if (index == 4) {
                $(".current div").removeClass("realcontent");
                $(".content5").addClass("realcontent");
            }
        });
    });
}

/**
 * [backToTop description]
 * 使用fixed定位，当鼠标滚动超过时逐渐出现，鼠标经过显示回到顶部，单击回到顶部
 */

function backToTop() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $("#backto").fadeIn();
        } else {
            $("#backto").fadeOut();
        }
    });
    $("#backto").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
    $("#backto").mouseenter(function() {
        $("#backto span").remove();
        $("<p>回到</p>").appendTo("#backto");
        $("<p>顶部</p>").appendTo("#backto");
    }).mouseleave(function() {
        $("#backto p").remove();
        $("<span></span>").appendTo("#backto");
    });
}



/**
 * [skinChangeClick description]
 * 点击换肤，弹出换肤框，点击收起或者单击页面空白处，收起换肤框
 */

function skinChangeClick() {
    var $clickTarget = $("#skin"); //<a>
    var $clickTarget1 = $("article"); //<article>
    var $clickTarget2 = $("#slideup"); //收起
    $(".changeskin").hide(); //先隐藏换肤栏
    $(document).on("click", function(e) {
        if (e.target == $clickTarget[0] || $.contains($clickTarget[0], e.target)) { //当单击换肤a链接时
            $(".changeskin").slideDown(400); //向下滑动出现
        } else if (e.target == $clickTarget1[0] || $.contains($clickTarget1[0], e.target)) { //当单击区域为<article>及下属区域时
            $(".changeskin").slideUp(400); //向上滑动消失
        } else if (e.target == $clickTarget2[0]) { //当单击收起时
            $(".changeskin").slideUp(400); //向上滑动消失
        } else if (e.target == $(".skin-top img")[0]) { //当此时点击皮肤，可以实现换肤skin1
            changeCss("stylesheets/skin1.css");
        }
    })
}
/**
 * [skinChange description]
 * 点击皮肤1，监听点击img，更换相应的皮肤
 */


function skinChange() {
    $("#skin-ul li").each(function(index) { //遍历ul 下li
        $(this).click(function() { //当前点击
            $("#skin-ul li .active").removeClass("active"); //清除原本的active class类
            $(".skin-top .skin").removeClass("skin"); //清除原本的skin class类
            $("#skin-ul li a").eq(index).addClass("active"); //动态添加active类
            $(".skin-top div").eq(index).addClass("skin"); //动态添加Skin类
            if (index == 3) {
                changeCss("stylesheets/skin.css");
            }
            $(".skin-top  img").each(function(e) { //遍历img
                $(this).click(function() {
                    if (e == 0) { //当前为第1个img时
                        changeCss("stylesheets/skin1.css");
                    } else if (e == 1) { //当前为第2个img时
                        changeCss("stylesheets/skin2.css");
                    } else if (e == 2) { //当前为第3个img时
                        changeCss("stylesheets/skin3.css");
                    }
                });
            });

        });
    });
}


/**
 * [changeCss description]
 * 更换css样式表，并储存样式表信息，完成换肤，如果没有本地存储，使用默认原始皮肤
 */

function changeCss(url) {
    if (url !== "stylesheets/skin.css") {
        $("#logo").attr("src", "image/logo_white.png");
        change.href = url;
        localStorage.setItem("nowskin", url);
    } else {
        $("#logo").attr("src", "image/bd_logo1.png");
        change.href = url;
        localStorage.setItem("nowskin", url);
    }
}

/**
 * [judgeSkin description]
 * 判断新加载页面，从localStorage里加载皮肤
 */
function judgeSkin() {
    var thisskin = localStorage.getItem("nowskin");
    if (thisskin !== null && thisskin !== undefined) {
        changeCss(thisskin);
    } else {
        changeCss("stylesheets/skin.css");
    }
}
