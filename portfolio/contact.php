<?php
require_once('php_includes/dbconnect.php');
$mail=mysqli_real_escape_string($dbconx,$_POST['email']);
$sql="Select * from mail where mail='$mail' LIMIT 1";
$query=mysqli_query($dbconx,$sql);
$numrows=mysqli_num_rows($query);
if($numrows>0)
{
echo "Registered_already";
mysqli_close($dbconx);
exit();    
}
$sql="INSERT INTO mail(mail) VALUES ('$mail')";
$query=mysqli_query($dbconx,$sql);
echo "Registered";
?>