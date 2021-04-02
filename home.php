<?php
if(isset($_COOKIE['uname'])){
$uname = $_COOKIE['uname'];
}
else{
    header ("location: index.html");
}
echo "Username:";
echo $uname;
include 'database.php';

$sql = "SELECT * FROM masteruser Where uname = '$uname'";
$result = $conn->query($sql);

$row = $result->fetch_assoc();
echo "<br> Password:";
echo ($row["psw"]);


?>