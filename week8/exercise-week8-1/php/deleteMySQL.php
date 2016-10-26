<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
    error_reporting(E_ALL ^ E_NOTICE);
    require 'configuration.php';
    /**选择baidunews这个数据库
        * //当post提交的newsclass值分别为“本地”，图片，娱乐时候，分别删除对应id的数据库数据
    */
    mysql_select_db("baidunews", $con);
    mysql_query("set names 'utf8'");

    // 删除对应的新闻的图片文件
    $imgname = './img/'.$_POST['newsimg'];
    echo $imgname;
    $final = @unlink($imgname);
    if($final == false) {
        echo "删除成功";
    }else{
        echo "删除失败";
    }

   switch ($_POST['newsclass']) {
        case "本地":
            $sql= "DELETE FROM `localnews` WHERE `newsid`=$_POST[newsid]";
        break;
        case "图片":
            $sql= "DELETE FROM `localnews` WHERE `newsid`=$_POST[newsid]";
        break;
        case "娱乐":
           $sql= "DELETE FROM `localnews` WHERE `newsid`=$_POST[newsid]";
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
    echo "1 record delete";
    mysql_close($con);
?>
