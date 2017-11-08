<?php

require("init.php");
@$uname = $_REQUEST["uname"];
@$upwd = $_REQUEST["upwd"];
$sql = "insert into oppo_user values(null,'$uname','$upwd')";
$result = mysqli_query($conn,$sql);
if($result){
   echo '{"code":1,"msg":"注册成功"}';
}else{
   echo '{"code":-1,"msg":"注册失败"}';
}

?>