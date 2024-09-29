<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor\phpmailer\phpmailer\src\Exception.php';
require 'vendor\phpmailer\phpmailer\src\PHPMailer.php';
require 'vendor\phpmailer\phpmailer\src\SMTP.php';

require 'vendor\autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = $_POST["name"];
    $kelas = $_POST["kelas"];
    $number = $_POST["number"];
    $reason = $_POST["reason"];
    $pilih_yes = $_POST["pilih_yes"];
    $pilih_no = $_POST["pilih_no"];
    $alat = $_POST["alat"];    
    
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'mbgitaswaramitra.gsm@gmail.com'; // SMTP username
        $mail->Password = 'kcus ssmg dzex yocs'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS
        $mail->Port = 587; // TCP port to connect to

        $mail->addAddress('mbgitaswaramitra.gsm@gmail.com'); // Recipient's email

        $mail->isHTML();
        $mail->Subject = 'Anggota Telah Mengirim Data ' . $name;
        $mail->Body ="
                        Nama : $name 
                        <br>
                        Kelas : $kelas 
                        <br>
                        Nomor Telp. : $number 
                        <br>
                        Alasannya : $reason 
                        <br>    
                        Pernah Ikut Kegiatan MB :$pilih_yes
                        <br> 
                        Belum Pernah Ikut Kegiatan MB : $pilih_no
                        <br>    
                        Alat Yang Pernah Dipakai : $alat
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
