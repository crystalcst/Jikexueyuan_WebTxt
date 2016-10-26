<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
    error_reporting(E_ALL ^ E_NOTICE);

    require 'configuration.php';


    /**选择baidunews这个数据库
        * //当post提交的classify值分别为“本地”，图片，娱乐时候，分别插入到相应的表单中
    */
    mysql_select_db("baidunews", $con);
    mysql_query("set names 'utf8'");
    $classify = $_POST['classify-mod'];
    $newsid = $_POST['newsid-mod'];
    $newstitle = $_POST['newstitle-mod'];
    $newsimg = $_POST['newsimg-mod'];
    $newscontent = $_POST['newscontent-mod'];
    $newsaddtime = $_POST['newsaddtime-mod'];


    switch ($classify) {
        case "本地":
            $sql="UPDATE `localnews` SET `newsclass`='$classify',`newstitle`='$newstitle',`newsimg`='$newsimg',`newscontent`='$newscontent',`newsaddtime`='$newsaddtime' WHERE `newsid`='$newsid'";
        break;
        case "图片":
            $sql="UPDATE `imgnews` SET `newsclass`='$classify',`newstitle`='$newstitle',`newsimg`='$newsimg',`newscontent`='$newscontent',`newsaddtime`='$newsaddtime' WHERE `newsid`='$newsid'";
        break;
        case "娱乐":
           $sql="UPDATE `playnews` SET `newsclass`='$classify',`newstitle`='$newstitle',`newsimg`='$newsimg',`newscontent`='$newscontent',`newsaddtime`='$newsaddtime' WHERE `newsid`='$newid'";
        break;
        default:
            echo "请输入正确的分类！";
        break;
    }


    mysql_query("SET NAMES utf8");
    $result = mysql_query($sql, $con);

    if (!$result)
    {
     die('Error: ' . mysql_error());
    }
    echo "1 record modified!";
    mysql_close($con);
?>
