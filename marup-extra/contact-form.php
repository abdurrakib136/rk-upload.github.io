<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subj'];
$message = $_POST['message'];
$formcontent=" From: $name \n subject: $subject \n  Message: $message";
$recipient = "marufhasan622@gmail.com";
$subject = "Hello!..";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("location: contact.html")
?>