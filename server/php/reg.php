<?php

    header("Access-Control-Allow-Origin:*");
    header("Content-type:text/html;charset=UTF-8");
    $tel=$_GET["tel"];
    $pass=$_GET["password"];


    $coon=new MySQLi("localhost","root","","db_yoho");
    $insert_sql ="INSERT INTO register(telphone,password) VALUES('$tel','$pass')";
    $sql="SELECT * FROM register where telphone='$tel'";
    $coon->query("SET NAMES 'utf8'");
    $coon->query("SET CHARACTER SET 'utf8'");
    $result=$coon->query($sql);
    // $result=$row-> fetch_all();
    $row=$result-> fetch_assoc();
  
    if($row){
      //查到数据
      $arr=array("code"=>"10000","data"=>"");
    }else{
      //没哟查到数据
      $arr=array("code"=>"0","data"=>"");
    $inserRow = $coon -> query($insert_sql);

    }
    echo json_encode($arr);
    // foreach($result as $key=>$value){
       
  
    //     if($tel==$value[1]){
    //        echo "1";
          
    //        $flag=2;
    //        break;
           
    //     }
        
       
    //     }
    //   if($flag==1){
        
    // // $inserRow = $coon -> query($insert_sql);
    // echo "2";
    
    //   }
        
          

?>