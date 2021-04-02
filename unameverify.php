<?php
include 'database.php';

$uname = $_POST['uname'];

$sql = "SELECT id FROM masteruser WHERE uname = '$uname'";
$result = $conn->query($sql);

if($result->num_rows > 0){
    echo "already";
}
else{
    echo "avilable";
}

?>