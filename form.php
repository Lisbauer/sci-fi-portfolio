<?php

header("Access-Control-Allow-Origin: *"); 

$to = 'lisabauer.dev@gmail.com';
$subject = 'This mail has been sent from Sci-fi Portfolio';


$mail_message =  "You received an email from " . $name . ",\r\n";
$mail_message .= "Subject is " . $subject . ",\r\n";
$mail_message .= "Mail " . $email . ",\r\n";
$mail_message .= "Message: " . $message . ",\r\n";
$mail_message .= "Date: " . date('d/m/Y', time());

$mail_message_iso = mb_convert_encoding($mail_message, 'ISO-8859-1', 'UTF-8');

$headers = 'From: lisabauer.dev@gmail.com' . "\r\n" .
           'Reply-To: $mail' . "\r\n" .
           'Content-Type: text/plain; charset=ISO-8859-1' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $mail_message_iso, $headers)) {
    echo json_encode(array('message' => 'Email enviado correctamente'));
} else {
    echo json_encode(array('message' => 'Error al enviar el correo: ' . error_get_last()['message']));
}
