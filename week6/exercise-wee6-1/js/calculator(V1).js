//高级计算器

var numberEvent = (function() {
    var num = null,
        result = 0,
        show = "0";
    var operate = 0; //输入状态
    var calculate = 0; //计算状态
    var quit = 0; //重复按键
    var PI = Math.PI;

    var command = function(number) { //获得数字
        var str = String(document.getElementById("screenNumber").value); //把input的value值转化成字符串，赋给str
        str = (str !== "0") ? ((operate === 0) ? str : "") : "";
        str = str + String(number); //给str增加command的结果显示
        document.getElementById("screenNumber").value = str; //在input中刷新显示结果
        operate = 0; //重置
        quit = 0;
    };

    var doubleZero = function() { //在字符串末尾添加2个零
        var str = String(document.getElementById("screenNumber").value);
        str = (str !== "0") ? ((operate === 0) ? str + "00" : "0") : "0"; //在字符串后面加上00
        document.getElementById("screenNumber").value = str;
        operate = 0;
    };

    var dot = function() { //在字符串末尾添加零，并避免重复添加
        var str = String(document.getElementById("screenNumber").value);
        str = (str !== "0") ? ((operate === 0) ? str : "0") : "0";
        for (var i = 0; i <= str.length; i++) { //遍历数组str,
            if (str.substr(i, 1) === ".") { //如果有"."，返回false
                return false;
            }
        }
        str = str + ".";
        document.getElementById("screenNumber").value = str;
        operate = 0;
    };

    var clearScreen = function() { //清屏
        num = null;
        result = 0;
        show = "0";
        document.getElementById("screenNumber").value = "0";
    };

    var del = function() { //退格
        var str = String(document.getElementById("screenNumber").value);
        str = (str !== "0") ? str : ""; //判断当前字符串不是0吗？是，维持原样，否，空；
        if (str.indexOf("-") + 1 && str.length === 2) { //当字符串中存在“-”且字符串长度为2时
            str = "";
        } else {
            str = str.substr(0, str.length - 1); //删掉字符串中最后一个字符
        }
        str = (str !== "") ? str : "0"; //此时str不是空吗？是，维持原样，否，显示为0；
        document.getElementById("screenNumber").value = str;
    };

    var plus = function() { //加法
        calcul(); //调用计算函数
        operate = 1; //更改输入状态
        calculate = 1; //更改计算状态为加
    };

    var minus = function() { //减法
        calcul();
        operate = 1;
        calculate = 2;
    };

    var times = function() { //乘法
        calcul();
        operate = 1;
        calculate = 3;
    };

    var divide = function() { //除法
        calcul();
        operate = 1;
        calculate = 4;
    };

    var persent = function() { //求余
        calcul();
        operate = 1;
        calculate = 5;
    };



    var funcSin = function() { //sin
        var result = Number(document.getElementById("screenNumber").value);
        result = Math.sin(2 * PI / 360 * result);
        result = Math.round(result * 100) / 100;
        document.getElementById("screenNumber").value = result;
        operate = 0;
    };

    var funcCos = function() { //cos
        var result = Number(document.getElementById("screenNumber").value);
        result = Math.cos(2 * PI / 360 * result);
        result = Math.round(result * 100) / 100;
        document.getElementById("screenNumber").value = result;
        operate = 0;
    };
    var funcTan = function() { //tan
        var result = Number(document.getElementById("screenNumber").value);
        result = Math.tan(2 * PI / 360 * result);
        result = Math.round(result * 100) / 100;
        document.getElementById("screenNumber").value = result;
        operate = 0;
    };
    var funcXSquare = function() { //x2
        var result = Number(document.getElementById("screenNumber").value);
        result = Math.pow(result, 2);
        document.getElementById("screenNumber").value = result;
        operate = 0;
    };
    var funcXCube = function() { //x3
        var result = Number(document.getElementById("screenNumber").value);
        result = Math.pow(result, 3);
        document.getElementById("screenNumber").value = result;
        operate = 0;
    };
    var funcPow = function() { //pow
        calcul();
        operate = 1;
        calculate = 6;
    };
    var funcSqrt = function() { //sqrt
        var result = Number(document.getElementById("screenNumber").value);
        result = Math.sqrt(result);
        document.getElementById("screenNumber").value = result;
        operate = 0;
    };
    var funcExp = function() { //exp
        var result = Number(document.getElementById("screenNumber").value);
        result = Math.exp(result);
        document.getElementById("screenNumber").value = result;
        operate = 0;
    };
    var funcLn = function() { //ln
        var result = Number(document.getElementById("screenNumber").value);
        result = Math.log(result);
        document.getElementById("screenNumber").value = result;
        operate = 0;
    };
    var funcLog = function() { //log
        var result = Number(document.getElementById("screenNumber").value);
        result = Math.log(result) / Math.LN10;
        document.getElementById("screenNumber").value = result;
        operate = 0;
    };
    var equal = function() { //equal
        calcul(); //等于
        operate = 1;
        num = null;
        result = 0;
        show = "0";
    };

    var calcul = function() { //计算功能函数
        var show = Number(document.getElementById("screenNumber").value);

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

                case 6:
                    result = Math.pow(num, show);
                    break;

            }
            quit = 1;
        } else {
            result = show;
        }
        show = String(result); //result结果以字符串形式赋给show
        document.getElementById("screenNumber").value = show; //刷新屏幕的显示
        num = result; //把result结果赋给Num
    };

    var EventListener = document.getElementById("calculate").addEventListener("click", function(e) { //给ul增加一个监听事件

        if (e.target.className !== "number") { //判断才是target的className是否为number
            var value = e.target.innerHTML; //不等于number时，获取innerHTML,通过switch，进行不同函数操作
            switch (value) {
                case "sin":
                    funcSin();
                    break;
                case "cos":
                    funcCos();
                    break;
                case "tan":
                    funcTan();
                    break;
                case "X²":
                    funcXSquare();
                    break;
                case "X³":
                    funcXCube();
                    break;
                case "Xⁿ":
                    funcPow();
                    break;
                case "√￣":
                    funcSqrt();
                    break;
                case "eⁿ":
                    funcExp();
                    break;
                case "ln":
                    funcLn();
                    break;
                case "log":
                    funcLog();
                    break;
                case "←":
                    del();
                    break;
                case "C":
                    clearScreen();
                    break;
                case "×":
                    times();
                    break;
                case "÷":
                    divide();
                    break;
                case "+":
                    plus();
                    break;
                case "-":
                    minus();
                    break;
                case "00":
                    doubleZero();
                    break;
                case ".":
                    dot();
                    break;
                case "%":
                    persent();
                    break;
                case "=":
                    equal();
                    break;
            }
        } else {
            command(e.target.innerHTML); //是number,执行command命令
        }
    });



    return {
        command: command,
        doubleZero: doubleZero,
        dot: dot,
        clearScreen: clearScreen,
        del: del,
        plus: plus,
        minus: minus,
        times: times,
        divide: divide,
        persent: persent,
        equal: equal,
        calcul: calcul,
        funcSin: funcSin,
        funcCos: funcCos,
        funcTan: funcTan,
        funcXCube: funcXCube,
        funcXSquare: funcXSquare,
        funcPow: funcPow,
        funcSqrt: funcSqrt,
        funcExp: funcExp,
        funcLn: funcLn,
        funcLog: funcLog,
        EventListener: EventListener
    };
})();
