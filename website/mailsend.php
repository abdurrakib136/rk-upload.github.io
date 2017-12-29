<?php
$name = $_POST['name'];
$email = $_POST['email'];
$desc = $_POST['desc1'];
$phaseselectphp1= $_POST['test1'];
$phaseselectphp2= $_POST['test2'];
$owner_email = "connect@projectfjh.com";
$subject = "Connect";
$message = "\n" . $name . "\n\n" . $phaseselectphp1 . " (" . $phaseselectphp2 . ")"  . "\n\n" . $desc . "\n\n" . $email;
if (mail($owner_email, $subject, $message)){echo 'Success';}else{echo 'Not success';}
?>

