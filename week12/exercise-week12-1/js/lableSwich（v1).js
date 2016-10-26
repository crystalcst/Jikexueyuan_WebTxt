/**单例模式
 *优点：1、划分命名空间，防止其他合作人员不小心改写index
 *     2、减少全局变量数量：只有一个全局变量namespace
 *
 */
// 命名空间对象字面量
var namespace = {};
// 防改写设置index的专有命名空间
namespace.index = {
    // 初始化：文档加载后就执行lableSwitch,rgHeight,mouseOver方法
    init: function() {
        //此时this指向namespace,需要设置namespace.index为当前操作对象
        var obj = namespace.index;
        $(document).ready(function() {
            obj.lableSwitch();
            obj.rgHeight();
            obj.mouseOver();
        });
    },
    //标签切换
    lableSwitch: function() {
        $(".menu-nav-lf span").each(function(index) { //遍历span
            $(this).click(function() {
                $("span.menu_hover").removeClass("menu_hover"); //点击span时，移除类menu_hover
                $(".menu-nav-lf span").eq(index).addClass("menu_hover"); //在当前元素上增加类 menu_hover
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
    },
    //右侧更多产品
    rgHeight: function() {
        var rgHeight = $(window).height();
        $(".rg_more").height(rgHeight); //使div高度等于当前窗口高度
    },
    // hover效果
    mouseOver: function() {
        $(".more_docu").mouseenter(function() {
            $(".rg_more").css("display", "block").mouseleave(
                function() {
                    $(".rg_more").css("display", "none")
                }
            )
        });
        //用户设置 hover

        $("#top_right_user").hover(function() {
            $("#usename_menu").css("display", "block");
        }, function() {
            $("#usename_menu").css("display", "none");
        });
        $("#usename_menu").hover(function() {
            $("#usename_menu").css("display", "block");
        }, function() {
            $("#usename_menu").css("display", "none");
        });


        //设置 hover
        $("#top_right_set").hover(function() {
            $("#user_set_menu").css("display", "block");
        }, function() {
            $("#user_set_menu").css("display", "none");
        });
        $("#user_set_menu").hover(function() {
            $("#user_set_menu").css("display", "block");
        }, function() {
            $("#user_set_menu").css("display", "none");
        });
        //天气 hover
        $(".weather-wrap").mouseenter(function() {
            $(".set_weather").css("display", "block").mouseleave(
                function() {
                    $(".set_weather").css("display", "none")
                }
            )
        })
    }
};
//调用方法
namespace.index.init();








// $(document).ready(function() {
//     lableSwich();
//     rgHeight();
//     mouseover();
// });
// //标签切换
// function lableSwich() {
//     $(".menu-nav-lf span").each(function(index) { //遍历span
//         $(this).click(function() {
//             $("span.menu_hover").removeClass("menu_hover"); //点击span时，移除类menu_hover
//             $(".menu-nav-lf span").eq(index).addClass("menu_hover"); //在当前元素上增加类 menu_hover
//             //当点击元素时，显示对应的div
//             function demo(i) {
//                 var d = i + 1;
//                 $(".main_content").children().css("display", "none");
//                 $(" #s_content_" + d).css("display", "block");
//             }
//             if (index > 0 && index < 4) {
//                 demo(index);
//             }
//         });
//     });
// }
// //右侧更多产品
// function rgHeight() {
//     var rgHeight = $(window).height();
//     $(".rg_more").height(rgHeight); //使div高度等于当前窗口高度
// }
// //hover效果
// function mouseover() {
//     $(".more_docu").mouseenter(function() {
//         $(".rg_more").css("display", "block").mouseleave(
//             function() {
//                 $(".rg_more").css("display", "none")
//             }
//         )
//     });
//     //用户设置 hover

//     $("#top_right_user").hover(function() {
//         $("#usename_menu").css("display", "block");
//     }, function() {
//         $("#usename_menu").css("display", "none");
//     });
//     $("#usename_menu").hover(function() {
//         $("#usename_menu").css("display", "block");
//     }, function() {
//         $("#usename_menu").css("display", "none");
//     });


//     //设置 hover
//     $("#top_right_set").hover(function() {
//         $("#user_set_menu").css("display", "block");
//     }, function() {
//         $("#user_set_menu").css("display", "none");
//     });
//     $("#user_set_menu").hover(function() {
//         $("#user_set_menu").css("display", "block");
//     }, function() {
//         $("#user_set_menu").css("display", "none");
//     });
//     //天气 hover
//     $(".weather-wrap").mouseenter(function() {
//         $(".set_weather").css("display", "block").mouseleave(
//             function() {
//                 $(".set_weather").css("display", "none")
//             }
//         )
//     })
// }
