/*
 * @Author: lenovo
 * @Date:   2016-09-11 16:53:20
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-09-11 18:27:42
 */

//文档加载完毕运行
$(document).ready(function() {
    index.init();
    index.render();
    index.navChange();
    index.leftChange();
    index.backTo();
    index.clickArrow();
});
//index对象字面量
var index = {
    //初始化
    init: function() {
        this.render();
    },
    //所有DOM元素集合
    render: function() {
        var self = this;
        //主导航栏DOM
        self.navbar = $('.navbar-nav li');
        //左菜单栏DOM
        self.leftbar = $('.navbar-left a');
        //主体内容DOM
        self.html = $('.html-content');
        self.css = $('.css-content');
        self.js = $('.js-content');
        //回到顶部
        self.backto = $('.arrow');
    },
    //主导航栏Tab换页
    navChange: function() {
        var self = this;
        self.navbar.each(function(index) {
            $(this).click(function() {
                self.active(index);
                self.contentChange(index);
            });
        });
    },
    //左菜单栏Tab换页
    leftChange: function() {
        var self = this;
        self.leftbar.each(function(index) {
            $(this).click(function() {
                self.active(index);
                self.contentChange(index);
            });
        });
    },
    //主要内容切换
    contentChange: function(index) {
        var self = this;
        switch (index) {
            case 0:
                self.css.css('display', 'none');
                self.js.css('display', 'none');
                self.html.css('display', 'block');
                break;
            case 1:
                self.html.css('display', 'none');
                self.js.css('display', 'none');
                self.css.css('display', 'block');
                break;
            case 2:
                self.html.css('display', 'none');
                self.css.css('display', 'none');
                self.js.css('display', 'block');
                break;
            default:
                break;
        }
    },
    //激活当前标签页
    active: function(index) {
        var self = this;
        $('.active').removeClass('active'); //点击移除active标签
        self.navbar.eq(index).addClass('active'); //主导航栏当前Tab标记为active
        self.leftbar.eq(index).addClass('active'); //左菜单栏当前Tab标记为active
    },
    //回到顶部
    backTo: function() {
        var self = this;
        $(window).scroll(function() {
            var s = $(window).scrollTop();
            if (s > 600) {
                self.backto.fadeIn(200);
            } else {
                self.backto.fadeOut(200);
            }
        });
    },
    clickArrow: function() {
        var self = this;
        self.backto.click(function() {
            $('html,body').animate({scrollTop: "0"}, 200);
        });
    }
};
