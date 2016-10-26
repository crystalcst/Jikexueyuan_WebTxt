<?php
header('Content-Type:application/json;charset:UTF-8');
    require 'configuration.php';

    switch ($_POST['newsclass']) {
        case "本地":
            $sql = "SELECT * FROM localnews"; //从localnews中查询所欲元素
        break;
        case "图片":
            $sql = "SELECT * FROM imgnews"; //从localnews中查询所欲元素
        break;
        case "娱乐":
           $sql = "SELECT * FROM playnews"; //从localnews中查询所欲元素
        break;
        default:
            echo "请输入正确的分类！";
        break;
    }



    mysql_query("set names 'utf8'");
    $result = mysql_query($sql, $con);

    $array = array();

    while($row = mysql_fetch_array($result)) {
        array_push($array, array('newsclass'=> $row['newsclass'],'newsid'=> $row['newsid'], 'newstitle'=> $row['newstitle'], 'newsimg' => $row['newsimg'], 'newscontent' => $row['newscontent'], 'newsaddtime' => $row['newsaddtime']));
    }
    echo json_encode($array);
    mysql_close($con);
?>
