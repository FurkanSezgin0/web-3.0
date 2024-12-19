<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri al
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // E-posta ayarları
    $to = "furkansezgin69@gmail.com";  // E-posta gönderilecek adres
    $subject = "Yeni Mesaj: $fullname"; // Mesajın konusu
    $message_content = "
        <html>
        <head>
            <title>Yeni Mesaj</title>
        </head>
        <body>
            <p><strong>İsim:</strong> $fullname</p>
            <p><strong>E-posta:</strong> $email</p>
            <p><strong>Telefon:</strong> $phone</p>
            <p><strong>Mesaj:</strong></p>
            <p>$message</p>
        </body>
        </html>
    ";

    // E-posta başlıkları
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // E-posta gönderimi
    if (mail($to, $subject, $message_content, $headers)) {
        echo "Mesaj başarıyla gönderildi!";
    } else {
        echo "Mesaj gönderilemedi, lütfen tekrar deneyin.";
    }
}
?>
