/*
 * @Author: lenovo
 * @Date:   2016-04-17 21:12:33
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-04-20 21:32:53
 */

// 设置鼠标点击事件jquery

define(function(require, exports, module) {

    exports.clickEvent = function() {
        $(document).ready(function() {
            $(document).on("click", function(e) { //监听文档点击事件

                var $clickTarget = $(".search-text"); //搜索栏
                if (e.target == $clickTarget[0] || $.contains($clickTarget[0], e.target)) { //当目标点击文件是search搜索框时
                    $(".hot-words").css("display", "none");
                    $(".search-btn").addClass("search-btn2");
                } else {
                    $(".hot-words").css("display", "block");
                    $(".search-btn").removeClass("search-btn2");
                }
            });

            //回到顶部
            $(window).scroll(function() {
                if ($(window).scrollTop() >= 50) {
                    $(".goto-top").fadeIn();
                } else {
                    $(".goto-top").fadeOut();
                }
            });
            $(".goto-top").on("click", function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 500);
            });

        });
    }
});
