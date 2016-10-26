<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
    error_reporting(E_ALL ^ E_NOTICE);

    require 'configuration.php';

    /**
     * 将上传的img文件移动到指定的img文件夹下
     */

    $file = $_FILES['newsimg'];//得到传输的数据
    //得到文件名称
    $name = $file['name'];
    // print($name);
    $type = strtolower(substr($name,strrpos($name,'.')+1)); //得到文件类型，并且都转化成小写
    $allow_type = array('jpg','jpeg','gif','png'); //定义允许上传的类型
    //判断文件类型是否被允许上传
    if(!in_array($type, $allow_type)){
    //如果不被允许，则直接停止程序运行
     return ;
    }
    //判断是否是通过HTTP POST上传的
    if(!is_uploaded_file($file['tmp_name'])){
    //如果不是通过HTTP POST上传的
     return ;
    }
    // $upload_path = strpos($upload_path, $str);
    $upload_path = "C:\\phpStudy\\WWW\\exercise-week8-1\\img\\"; //上传文件的存放路径,开始移动文件到相应的文件夹

    if(move_uploaded_file($file['tmp_name'],$upload_path.$file['name'])){
        echo "Successfully!";
    }else{
        echo "Failed!";
    }

    /**选择baidunews这个数据库
        * //当post提交的classify值分别为“本地”，图片，娱乐时候，分别插入到相应的表单中
    */
    mysql_select_db("baidunews", $con);
    mysql_query("set names 'utf8'");

    switch ($_POST['classify']) {
        case "本地":
            $sql="INSERT INTO localnews (newsclass, newstitle, newsimg, newscontent, newsaddtime)
            VALUES
            ('$_POST[classify]','$_POST[newstitle]','$name','$_POST[newscontent]','$_POST[newsaddtime]')";
        break;
        case "图片":
            $sql="INSERT INTO imgnews (newsclass, newstitle, newsimg, newscontent, newsaddtime)
            VALUES
            ('$_POST[classify]','$_POST[newstitle]','$name','$_POST[newscontent]','$_POST[newsaddtime]')";
        break;
        case "娱乐":
            $sql="INSERT INTO `playnews`(`newsclass`, `newstitle`, `newsimg`, `newscontent`, `newsaddtime`)
            VALUES
            ('$_POST[classify]','$_POST[newstitle]','$name','$_POST[newscontent]','$_POST[newsaddtime]')";

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
    echo "1 record added";
    mysql_close($con);
?>


