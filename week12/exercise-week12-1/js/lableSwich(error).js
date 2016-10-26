'use strict';
/**单例模式
 *优点：1、划分命名空间，防止其他合作人员不小心改写index
 *     2、减少全局变量数量：只有一个全局变量index
 *
 */
//文档加载后执行index.init();
$(document).ready(function() {
    index.init();
    index.lableSwitch();
    index.rgHeight();
    index.mouseOver();
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
        //tab主标签栏DOM
        self.menu = $(".menu-nav-lf span");
        self.menu_hover = $(".menu_hover");
        //maincontentDOM
        self.maincontent = $(".main_content");
        self.scontent = $("#s_content_");
        //右侧更多产品DOM
        self.rgmore = $(".rg_more");
        self.moredoc = $(".more_docu");
        //用户设置DOM
        self.user = $("#top_right_user");
        self.username = $("#usename_menu");
        //设置DOM
        self.topset = $("#top_right_set");
        self.userset = $("#user_set_menu");
        //天气DOM
        self.weather = $(".weather-wrap");
        self.setweather = $(".set_weather");
        return self.menu_hover;
    },
    //标签切换
    lableSwitch: function() {
        var self = this;
        self.menu.each(function(index) { //遍历span
            $(this).click(function() {
                self.menu_hover.removeClass('menu_hover');//点击span时，移除类menu_hover
                self.menu.eq(index).addClass("menu_hover"); //在当前元素上增加类 menu_hover
                // self.menu_hover = $(".menu_hover");
                //当点击元素时，显示对应的div
                self.demo(index);
            });
        });
    },
    //当点击元素时，显示对应的div
    demo: function(i) {
        var self = this;
        var d = i + 1;
        self.maincontent.children().css("display", "none");
        self.scontent = $("#s_content_" + d);
        self.scontent.css("display", "block");
    },
    //右侧更多产品
    rgHeight: function() {
        var self = this;
        var rgHeight = $(window).height();
        self.rgmore.height(rgHeight); //使div高度等于当前窗口高度
    },
    // hover效果
    mouseOver: function() {
        var self = this;
        //更多产品 hover
        self.mouseChange(self.moredoc, self.rgmore);
        //用户设置 hover
        self.hoverDisplay(self.user, self.username);
        //设置 hover
        self.hoverDisplay(self.topset, self.userset);
        //天气 hover
        self.mouseChange(self.weather, self.setweather);
    },
    //hover消失出现hover
    hoverDisplay: function(hoverobj, cssobj) { //传入两个参数：hover对象，css操作对象
        hoverobj.mouseover(function() {
            cssobj.css("display", "block");
        }).mouseout(function() {
            cssobj.css("display", "none");
        });
        cssobj.mouseover(function() {
            cssobj.css("display", "block");
        }).mouseout(function() {
            cssobj.css("display", "none");
        });
    },
    //鼠标进入离开hover
    mouseChange: function(mouseobj, cssobj) { //传入两个参数：mouse对象，css操作对象
        mouseobj.mouseenter(function() {
            cssobj.css("display", "block").mouseleave(
                function() {
                    cssobj.css("display", "none")
                }
            )
        });
    }
};
