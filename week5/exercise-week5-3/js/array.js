//数组练习

    //分别统计每个字母出现次数和位置
    var arr=["a", "x" , "b", "d", "m", "a", "k", "m", "p", "j", "a"];
    var count = {}; //统计次数
    var position = {}; //找到位置

    arr.forEach(function(value,number){
        if(count[value]) {
            count[value] ++;
            position[value] += "/" + number
        }else{
            count[value] = 1;
            position[value] = "" + number
        }
    });
    console.log(count);
    console.log(position);

    //找到出现次数最多的字母
    var max = 0;
    var letter;
    for (var i in count) {
        if (count[i] > max) {
            max = count[i];
            letter = i;
        }
    }
    console.log("出现次数最多的字母是：" + letter);
    console.log("该字母的位置分别为：" + position[letter]);
