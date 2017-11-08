<?php
    require("init.php");
    $sql="SELECT bg_img1,bg_img2,bg_img3,bg_img4,bg_img5,sm_img1,sm_img2,sm_img3,sm_img4,sm_img5 FROM product_detail where color='黑色'";
    
    $result = mysqli_query($conn,$sql);
    if(!$result){
      echo "查询失败！请检查sql语句:".$sql;
    }else{
      $row = mysqli_fetch_assoc($result);
      echo json_encode($row);
    }
?>