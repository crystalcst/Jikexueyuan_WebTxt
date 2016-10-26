<?php
header('Content-Type:application/json;charset:UTF-8');
    error_reporting(E_ALL ^ E_NOTICE);

    require 'configuration.php';


    /**选择baidunews这个数据库
        * //当post提交的classify值分别为“本地”，图片，娱乐时候，分别查找相应的表单中
    */
    mysql_select_db("baidunews", $con);
    mysql_query("set names 'utf8'");
    $newsclass = $_POST['newsclass'];
    $newsid = $_POST['newsid'];
    $newstitle = $_POST['newstitle'];
    $newsimg = $_POST['newsimg'];
    $newscontent = $_POST['newscontent'];
    $newsaddtime = $_POST['newsaddtime'];


    switch ($newsclass) {
        case "本地":
            $sql="SELECT `newsclass`, `newsid`, `newstitle`, `newsimg`, `newscontent`, `newsaddtime` FROM `localnews` WHERE `newsid`='$newsid' OR `newstitle`='$newstitle%' OR `newscontent`='$newscontent%' OR `newsaddtime`='$newsaddtime' ORDER BY `newsid`";
        break;
        case "图片":
            $sql="SELECT `newsclass`, `newsid`, `newstitle`, `newsimg`, `newscontent`, `newsaddtime` FROM `imgnews` WHERE `newsid`='$newsid' OR `newstitle`='$newstitle%' OR `newscontent`='$newscontent%' OR `newsaddtime`='$newsaddtime' ORDER BY `newsid`";
        break;
        case "娱乐":
           $sql="SELECT `newsclass`, `newsid`, `newstitle`, `newsimg`, `newscontent`, `newsaddtime` FROM `playnews` WHERE `newsid`='$newsid' OR `newstitle`='$newstitle%' OR `newscontent`='$newscontent%' OR `newsaddtime`='$newsaddtime' ORDER BY `newsid`";
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
