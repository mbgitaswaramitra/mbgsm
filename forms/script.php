<?php

require "regist/vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    
    $name = $_POST["name"];
    $kelas = $_POST["kelas"];
    $number = $_POST["number"];
    $reason = $_POST["reason"];
    $pernah = $_POST["pernah"];
    $belum = $_POST["belum"];
    $alat = $_POST["alat"];

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'daftarmbgsm@gmail.com'; // SMTP username
        $mail->Password = 'fxcj nqbb lktg edfr'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS
        $mail->Port = 587; // TCP port to connect to

        $mail->addAddress('daftarmbgsm@gmail.com'); // Recipient's email

        $mail->isHTML();
        $mail->Subject = 'Pendaftaran MBGSM' . $name;
        $mail->Body =" Nama : $name 
                         Kelas : $kelas 
                         Nomor Telp. : $number 
                         Alasan : $reason 
                         Pernah : $pernah
                         Belum : $belum
                         Alat : $alat
                        ";

        $mail->send();
        echo "<script>
                document.location.href ='message.html'
                </script>";
    } catch (Exception $e) {
         $mail->ErrorInfo;
    }
}



?>

