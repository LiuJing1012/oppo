<?php
	require("init.php");
	$sql="SELECT img,title,price FROM oppo_store where series='fittings'";
	$result = mysqli_query($conn,$sql);
	if(!$result){
      echo "查询失败！请检查sql语句:".$sql;
    }else{
      $rowList=mysqli_fetch_all($result,MYSQLI_ASSOC); 
      echo json_encode($rowList);
    }
?>