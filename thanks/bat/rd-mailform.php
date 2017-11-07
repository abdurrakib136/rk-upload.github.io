<?php
//error_reporting(E_ALL);
//ini_set('display_errors', 1);

$recipients = 'cehckbox136@gmail.com';
//$recipients = 'mitko@bluemovingnyc.com';
//$recipients = 'mitko@bluemovingnyc.com';
//$recipients = '#';

try {
    require './phpmailer/PHPMailerAutoload.php';

    preg_match_all("/([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/", $recipients, $addresses, PREG_OFFSET_CAPTURE);

    if (!count($addresses[0])) {
        die('MF001');
    }

    if (preg_match('/^(127\.|192\.168\.)/', $_SERVER['REMOTE_ADDR'])) {
        die('MF002');
    }

    $template = file_get_contents('rd-mailform.tpl');
    

    if (isset($_POST['form-type'])) {
        switch ($_POST['form-type']){
            case 'contact':
                $subject = 'BM Lead: '.$_POST['name'];
                break;
            case 'subscribe':
                $subject = 'BM Call Request: '.$_POST['phoneb'];
                break;
            case 'order':
                $subject = 'BM Order: '.$_POST['name'];
                break;
            default:
                $subject = 'BM Lead: '.$_POST['name'];
                break;
        }
    }else{
        die('MF004');
    }
if(!isset($_POST['date']))
 {
     // if no date was entered
     $errors[] = "Birth Date cannot be blank";
 } 
else if (strtotime($_POST['date']) === false) 
 {
     // date was entered, but was invalid
     $errors[] = "please enter a valid date";
 }
    if (isset($_POST['email'])) {
        $template = str_replace(
            ["<!-- #{FromState} -->", "<!-- #{FromEmail} -->"],
            ["Email:", $_POST['email']],
            $template);
    }else{
         //die('MF00v1');
    }
    //die(print_r($_POST));
    if (isset($_POST['phone'])) {
        $template = str_replace(
            ["<!-- #{FromStatePhone} -->", "<!-- #{FromPhone} -->"],
            ["Phone:", $_POST['phone']],
            $template);
    }else{
         //die('MF00v1');
    }
    
    

    if (isset($_POST['message'])) {
        $template = str_replace(
            ["<!-- #{MessageState} -->", "<!-- #{MessageDescription} -->"],
            ["Message:", $_POST['message']],
            $template);
    }else{
         //die('MF00v3');
    }
  
    /*preg_match("/(<!-- #{BeginInfo} -->)(.|\n)+(<!-- #{EndInfo} -->)/", $template, $tmp, PREG_OFFSET_CAPTURE);
    foreach ($_POST as $key => $value) {
        if ($key != "email" && $key != "message" && $key != "form-type" && !empty($value)){
            $info = str_replace(
                ["<!-- #{BeginInfo} -->", "<!-- #{InfoState} -->", "<!-- #{InfoDescription} -->"],
                ["", ucfirst($key) . ':', $value],
                $tmp[0][0]);

            $template = str_replace("<!-- #{EndInfo} -->", $info, $template);
        }else{
         //die('MF00v3');
        }
    }*/
    
    $template = str_replace(
        ["<!-- #{Subject} -->", "<!-- #{SiteName} -->"],
        [$subject, $_SERVER['SERVER_NAME']],
        $template);

    $mail = new PHPMailer();
    if (isset($_POST['email'])) {
        $mail->From = $_POST['email'];
    }else{
        $mail->From = 'site@udieshel.co.il';
    }

    if (isset($_POST['name'])){
        $mail->FromName = $_POST['name'];
    }else{
        $mail->FromName = "Site Visitor";
    }
    	if ((isset($_POST['form-type']))&&($_POST['form-type'] == 'subscribe')) {
		$mail->FromName = "BM Call";
		$mail->From = "lp@bluemovingnyc.com";
	}

    foreach ($addresses[0] as $key => $value) {
        $mail->addAddress($value[0]);
    }
    //die($template);
    $mail->CharSet = 'utf-8';
    $mail->Subject = $subject;
    $mail->MsgHTML($template);
	$mail->AddBCC('bmnyc@virtuosonline.com');
	$mail->AddBCC('leads@virtuosonline.com');
	
    if (isset($_FILES['attachment'])) {
        foreach ($_FILES['attachment']['error'] as $key => $error) {
            if ($error == UPLOAD_ERR_OK) {
                $mail->AddAttachment($_FILES['attachment']['tmp_name'][$key], $_FILES['Attachment']['name'][$key]);
            }
        }
    }

    $mail->send();

    die('MF000');
} catch (phpmailerException $e) {
    die('MF254');
} catch (Exception $e) {
    die('MF255');
}

?>
