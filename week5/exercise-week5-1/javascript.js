// javascript.js函数库
// 把学生根据分数分类


function getScore() {
    var score = document.getElementById("score").value;

    var reg = /^\d+$/ig;
    var result = reg.test( Math.round(score) ); //判断输入的是否为数字，并向下取整

    if ( score >= 0 && score <= 100 && score && result !== "" ) { //当输入的value在0~100之间并且不为空时，执行switch,否则提示输入有效成绩
        switch ( Math.floor(score / 10) ) {
            case 10:
                alert("1等生");
                break;
            case 9:
                alert("1等生");
                break;
            case 8:
                alert("2等生");
                break;
            case 7:
                alert("3等生");
                break;
            case 6:
                alert("4等生");
                break;
            case 5:
                alert("5等生");
                break;
            case 4:
                alert("6等生");
                break;
            case 3:
                alert("7等生");
                break;
            case 2:
                alert("8等生");
                break;
            case 1:
                alert("9等生");
                break;
            default:
                alert("10等生");
                return false;
        }
    } else {
        alert("请输入有效成绩");
    }

}
