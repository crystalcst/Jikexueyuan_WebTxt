/**
 * Created by gang on 2015/12/22.
 */
$(document).ready(function () {
    lableSwich();
    rgHeight();
    mouseover();
});
//标签切换
function lableSwich() {
    $(".menu-nav-lf span").each(function (index) {          //遍历span
        $(this).click(function () {
            $("span.menu_hover").removeClass("menu_hover");  //点击span时，移除类menu_hover
            $(".menu-nav-lf span").eq(index).addClass("menu_hover");//在当前元素上增加类 menu_hover
            //当点击元素时，显示对应的div
            function demo(i) {
                var d = i + 1;
                $(".main_content").children().css("display", "none");
                $(" #s_content_" + d).css("display", "block");
            }
            if (index > 0 && index < 4) {
                demo(index);
            }
        });
    });
}
//右侧更多产品
function rgHeight() {
    var rgHeight = $(window).height();
    $(".rg_more").height(rgHeight);//使div高度等于当前窗口高度
}
//hover效果
function mouseover() {
    $(".more_docu").mouseenter(function () {
            $(".rg_more").css("display", "block").mouseleave(
                function () {
                    $(".rg_more").css("display", "none")
                }
            )
        }
    );
    //用户设置 hover

    $("#top_right_user").hover(function () {
        $("#usename_menu").css("display", "block");
    }, function () {
        $("#usename_menu").css("display", "none");
    });
    $("#usename_menu").hover(function () {
        $("#usename_menu").css("display", "block");
    }, function () {
        $("#usename_menu").css("display", "none");
    });


    //设置 hover
    $("#top_right_set").hover(function () {
        $("#user_set_menu").css("display", "block");
    }, function () {
        $("#user_set_menu").css("display", "none");
    });
    $("#user_set_menu").hover(function () {
        $("#user_set_menu").css("display", "block");
    }, function () {
        $("#user_set_menu").css("display", "none");
    });
    //天气 hover
    $(".weather-wrap").mouseenter(function () {
            $(".set_weather").css("display", "block").mouseleave(
                function () {
                    $(".set_weather").css("display", "none")
                }
            )
        }
    )
}
