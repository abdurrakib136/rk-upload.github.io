<?php
// Naming Constant
define( "RECIPIENT_NAME", "Rakib" );
define( "RECIPIENT_EMAIL", "abdurrakib528@gmail.com" );
// Values
$success = false;
$senderName = isset( $_POST['name'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['name'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$subject = isset( $_POST['subj'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['subj'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";
// Send the email
if ( $senderName &amp;amp;&amp;amp; $senderEmail &amp;amp;&amp;amp; $message ) {
 $recipient = RECIPIENT_NAME . " &amp;lt;" . RECIPIENT_EMAIL . "&amp;gt;";
 $headers = "From: " . $senderName . " &amp;lt;" . $senderEmail . "&amp;gt;";
 $success = mail( $recipient, $subject, $message, $headers );
 //Set Location
 header('Location: index.html');
}
?>
