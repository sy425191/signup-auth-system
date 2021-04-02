<?php
include 'database.php';

$uname = $_POST['uname'];
$psw= md5($_POST['psw']);

$sql = "SELECT * FROM masteruser WHERE uname ='$uname' and psw ='$psw'";
$result = $conn->query($sql);



if($result->num_rows > 0){
$row = $result->fetch_assoc();
if($row['verification_status'] == 'yes'){
    echo "done";
}
else{
    echo "verify";
}
}
else{
    echo "incorrect details";
}

?>