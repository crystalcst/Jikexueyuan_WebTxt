<?php
 $con = mysql_connect("localhost","root","root"); //链接mySQL数据库
        if (!$con)
          {
            die('Could not connect: ' . mysql_error());
          }
    mysql_select_db("baidunews", $con);//选择baidunews数据库
?>
