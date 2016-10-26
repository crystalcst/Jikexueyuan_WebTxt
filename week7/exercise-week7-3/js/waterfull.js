//瀑布流

$(document).ready(function() { //当html骨架搭好后，执行
    imageLocation();
    var dataImage = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }, { "src": "6.jpg" }, { "src": "7.jpg" }, { "src": "8.jpg" }, { "src": "9.jpg" }, { "src": "10.jpg" }, { "src": "11.jpg" }, { "src": "12.jpg" }, { "src": "13.jpg" }] };
    $(window).scroll(function() {
        if ($(window).scrollTop() > 250) { //当滚动距离超过250时候
            $(".header").addClass("fixednav"); //给header添加一个fixednav类
        } else {
            $(".header").removeClass("fixednav"); //否则移除
        }
        if (scrollAdd()) { //添加新的dataImage
            $.each(dataImage.data, function(index, el) {
                var box = $("<div>").addClass("box").appendTo("#container");
                var content = $("<div>").addClass("content").appendTo(box);
                $("<img>").attr("src", "./image/" + $(el).attr("src")).appendTo(content);
            });
            imageLocation();
        }
    });
    $(window).scroll(function() {
        imageLocation();
    });
});



function imageLocation() { //图片放置功能
    var box = $(".box"); //声明一个box，吧.box的jQuery对象赋给box
    var boxWidth = box.eq(0).width(); //取到box的宽度，赋给boxWideth
    var num = Math.floor($(window).width() / boxWidth); //算出一行排列几张图片，并取接近的最小整数
    var boxArr = []; //声明一个数组变量boxArr
    box.each(function(index, el) { //遍历box对象，传入Index,el两个参数
        var boxHeight = box.eq(index).height(); //把box的高取出来，赋给boxHeight

        if (index < num) { //当传入的index<一排的个数时
            boxArr[index] = boxHeight; //把boxHeight的值放入到boxArr数组中

        } else if (index < 4) { //当窗口为最大时，一排只能放置4个图片，所以index<4时
            $(el).css({ "float": "left" }); //只设置此时的CSS为左浮动，不设置绝对定位
        } else {
            var minboxHeight = Math.min.apply(null, boxArr); //Math.min不支持数组，借用apply传递了boxArr数组求出最小值；
            var minboxIndex = $.inArray(minboxHeight, boxArr); //搜索jQuery数组中，高度的最小值，返回所在位置
            $(el).css({ //把el转换为jQuery对象，并增加CSS样式
                "position": "absolute", //article已经设置为relative，这里相对于article使用绝对定位
                "top": minboxHeight, //距离顶部：最小照片的高度
                "left": box.eq(minboxIndex).position().left //左边，为最小图片距离左边的宽度
            });
            boxArr[minboxIndex] += box.eq(index).height(); //重新计算当前位置的BoxArr，为当前位置图片高度加上之前的boxArr[IminheidhtIndex]
        }
    });
}

function scrollAdd() { //滚动到边沿的效果
    var box = $(".box"); //声明一个jQuery类.box，把值赋给box
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2); //box最后一个对象的0对应的是一个div:box，对象，算出这个对象距离顶部的距离，加上最后一张图片宽度的一半
    var documentHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    return lastboxHeight < documentHeight + scrollHeight;
}
