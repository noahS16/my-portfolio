<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "nmsaenz416@gmail.com";
    $from = $_POST['email'];
    $message = $_POST['message'];
    $subject = "New message from your website";
    $headers = "From: $from";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
}
?>
