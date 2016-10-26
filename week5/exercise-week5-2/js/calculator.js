//简易计算器


var num = null,
    result = 0,
    show = "0";
var operate = 0; //输入状态
var calculate = 0; //计算状态
var quit = 0; //重复按键

function command(number) { //获取对应按钮的数字，并显示在屏幕上
    var str = String(document.calculator.screenNumber.value); //按键，获取当前显示数据
    str = (str !== "0") ? ((operate === 0) ? str : "") : "";
    str = str + String(number); //给str增加command的结果显示
    document.calculator.screenNumber.value = str; //在input中刷新显示结果
    operate = 0; //重置
    quit = 0;
}


function dzero() { //在已输入数字后面填上两个0，并显示在屏幕上
    var str = String(document.calculator.screenNumber.value);
    str = (str !== "0") ? ((operate === 0) ? str + "00" : "0") : "0"; //在字符串后面加上00
    document.calculator.screenNumber.value = str;
    operate = 0;
}

function dot() {
    var str = String(document.calculator.screenNumber.value);
    str = (str !== 0) ? ((operate === 0) ? str : "0") : "0";
    for (var i = 0; i <= str.length; i++) {
        if (str.substr(i, 1) == ".") {
            return false;
        }
    }
    str = str + ".";
    document.calculator.screenNumber.value = str;
    operate = 0;
}

function del() { //退格
    var str = String(document.calculator.screenNumber.value);
    str = (str !== "0") ? str : ""; //判断当前字符串不是0吗？是，维持原样，否，空；
    if (str.indexOf("-") + 1 && str.length === 2) {
        str = "";
    } else {
        str = str.substr(0, str.length - 1); //删掉字符串中最后一个字符
    }

    str = (str !== "") ? str : "0"; //此时str不是空吗？是，维持原样，否，显示为0；
    document.calculator.screenNumber.value = str;
}

function clearScreen() { //清空
    num = null;
    result = 0;
    show = "0";
    document.calculator.screenNumber.value = "0";
}

function plus() { //加法
    calcul(); //调用计算函数
    operate = 1; //更改输入状态
    calculate = 1; //更改计算状态为加
}

function minus() { //减法
    calcul();
    operate = 1;
    calculate = 2;
}

function times() { //乘法
    calcul();
    operate = 1;
    calculate = 3;
}

function divide() { //除法
    calcul();
    operate = 1;
    calculate = 4;
}

function persent() { //求余
    calcul();
    operate = 1;
    calculate = 5;
}

function equal() {
    calcul(); //等于
    operate = 1;
    num = null;
    result = 0;
    show = "0";
}

function calcul() {
    show = Number(document.calculator.screenNumber.value);
    if (num !== null && quit !== 1) { //判断Num部位null时候，并且没有重复按键时候
        switch (calculate) {
            case 1:
                result = num + show;
                break;
            case 2:
                result = num - show;
                break;
            case 3:
                result = num * show;
                break;
            case 4:
                if (show !== 0) {
                    result = num / show;
                } else {
                    alert("除数不能为0！");
                }
                break;
            case 5:
                result = num % show;
                break;
        }
        quit = 1;
    } else {
        result = show;
    }
    show = String(result); //result结果以字符串形式赋给show
    document.calculator.screenNumber.value = show; //刷新屏幕的显示
    num = result; //把result结果赋给Num
}
