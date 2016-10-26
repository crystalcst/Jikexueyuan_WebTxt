//hao123 js


// 下拉菜单

var pullDownMenu = document.getElementById("nav-list").addEventListener("click", function(e) {
    var change = document.getElementById("change").style.display;
    if (change === "none") {
        document.getElementById("change").style.display = "block";
    } else {
        document.getElementById("change").style.display = "none";
    }
});

var pullDown = document.getElementById("ul-change").addEventListener("click", function(e) {
    var change = document.getElementById("changeskin").style.display;
    if (change === "none") {
        document.getElementById("changeskin").style.display = "block";
    } else {
        document.getElementById("changeskin").style.display = "none";
    }
});

var setCookie = function(name, value) { //设置cookie
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (2 < argc) ? argv[2] : null;
    var path = (3 < argc) ? argv[3] : null;
    var domain = (4 < argc) ? argv[4] : null;
    var secure = (5 < argc) ? argv[5] : false;
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
};

var getCookie = function(name) { //获取cookie
    var search = name + "="; //name后面添加=并赋给search
    var returnvalue = ""; //初始化返回值为空字符串
    if (document.cookie.length > 0) { //当cookie的长度大于0时
        var offset = document.cookie.indexOf(search); //获取search字符串首次出现位置，把位置赋给offset
        console.log(offset);
        if (offset != -1) { //当检索的字符串出现时
            offset += search.length; //offset位置设置为搜索search的末尾
            var end = document.cookie.indexOf(";", offset); //查找;，从offset位置开始
            if (end == -1) { //当没有查找到；时
                end = document.cookie.length; //当前cookie的长度赋给end
                returnvalue = unescape(document.cookie.substring(offset, end)); //提取介于offset和end之间的字符，并进行字符串反解码
            }
        }
    }
    return returnvalue; //返回returnvalue的值
};



var thisskin = getCookie("nowskin");
console.log(thisskin);
if (thisskin !== '') {
    skin.href = thisskin;
} else {
    skin.href = "css/green.css"
}


var changeCss = function(url) { //更换css样式表
    if (url !== "") {
        skin.href = url;
        var expdate = new Date();

        expdate.setTime(expdate.getTime() + (24 * 60 * 60 * 1000 * 30));

        setCookie("nowskin", url, expdate, "/", null, false);
    }
};

var change = document.getElementById("changeskin").addEventListener("click", function(e) { //监听id为changeskin的ul，鼠标单击时，执行函数操作
    var idName = e.target.id; //将目标的id赋给idName
    switch (idName) {
        case "green": //id name为green，时执行changeCss()函数
            changeCss("css/green.css");
            break;
        case "blue": //id name为blue，时执行changeCss()函数
            changeCss("css/blue.css");
            break;
        case "red": //id name为red，时执行changeCss()函数
            changeCss("css/red.css");
            break;
    }
});


