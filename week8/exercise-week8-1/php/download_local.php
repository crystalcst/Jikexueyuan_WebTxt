<?php
header('Content-Type:application/json;charset:UTF-8');
//     /**************************************************************
//  *
//  *  使用特定function对数组中所有元素做处理
//  *  @param  string  &$array     要处理的字符串
//  *  @param  string  $function   要执行的函数
//  *  @return boolean $apply_to_keys_also     是否也应用到key上
//  *  @access public
//  *
//  *************************************************************/
// function arrayRecursive(&$array, $function, $apply_to_keys_also = false)
// {
//     static $recursive_counter = 0;
//     if (++$recursive_counter > 1000) {
//         die('possible deep recursion attack');
//     }
//     foreach ($array as $key => $value) {
//         if (is_array($value)) {
//             arrayRecursive($array[$key], $function, $apply_to_keys_also);
//         } else {
//             $array[$key] = $function($value);
//         }

//         if ($apply_to_keys_also && is_string($key)) {
//             $new_key = $function($key);
//             if ($new_key != $key) {
//                 $array[$new_key] = $array[$key];
//                 unset($array[$key]);
//             }
//         }
//     }
//     $recursive_counter--;
// }

// /**************************************************************
//  *
//  *  将数组转换为JSON字符串（兼容中文）
//  *  @param  array   $array      要转换的数组
//  *  @return string      转换得到的json字符串
//  *  @access public
//  *
//  *************************************************************/
// function JSON($array) {
//     arrayRecursive($array, 'urlencode', true);
//     $json = json_encode($array);
//     return urldecode($json);
// }

    $con = mysql_connect("localhost","root","root"); //链接mySQL数据库
        if (!$con)
          {
            die('Could not connect: ' . mysql_error());
          }
    mysql_select_db("baidunews", $con);//选择baidunews数据库
    $sql = "SELECT * FROM localnews"; //从localnews中查询所欲元素

    mysql_query("set names 'utf8'");
    $result = mysql_query($sql, $con);

    $array = array();

    while($row = mysql_fetch_array($result)) {
        array_push($array, array("newstitle"=> $row['newstitle'], "newsimg" => $row['newsimg'], "newscontent" => $row['newscontent'], "newsaddtime" => $row['newsaddtime']));
    }
    echo json_encode($array);
    // echo JSON($array);

    mysql_close($con);
?>
