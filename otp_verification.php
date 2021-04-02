<?php
include 'database.php';

$uname = $_COOKIE['uname'];


$sql = "SELECT verification_status FROM masteruser WHERE uname = '$uname'";
$result = $conn->query($sql);

if($result->num_rows > 0){
$row = $result->fetch_assoc();
if($row['verification_status'] == 'yes'){
header("location: home.php");
}
else{

$sql = "SELECT otp FROM otp_verify WHERE uname = '$uname'";
$result =$conn->query($sql);
if($result == FALSE){
    return 'mysql_error';
}
if($result->num_rows > 0){
$row = $result->fetch_assoc();
echo "$otp";
}
else{
   
$otp = rand(111111, 909090);
echo '$otp';
$sql = "INSERT INTO otp_verify (uname, otp) VALUE ('$uname','$otp')";

if($conn->query($sql) == TRUE){
echo '$otp';
         }
    }
    }
}
else{
    header("location: index.html");
}



?>