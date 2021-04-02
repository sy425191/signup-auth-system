<?php
include 'database.php';

$uname = $_POST['uname'];
$psw = md5($_POST['psw']);
$name = $_POST['name'];
$phone = $_POST['phone'];

$sql = "SELECT id from masteruser WHERE uname ='$uname' or phone = '$phone'";
$result = $conn->query($sql);

if($result->num_rows > 0){
    echo "Username/phone already registered";
}

else{
    $sql = "INSERT INTO masteruser (uname, psw, fname, phone) VALUES ('$uname', '$psw', '$name', '$phone')";
    if($conn->query($sql) === TRUE){
        echo "done";
    }
    else{
        echo "Server error occured" . $sql ."<br>" . $conn->error;
    }
}

?>