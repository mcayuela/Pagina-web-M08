<?php
// Rep les dades del formulari
$nom = $_POST['nom'];
$correu = $_POST['correu'];
$missatge = $_POST['missatge'];

$destinatario = 'mcayueladolcet@gmail.com';

$asunto = 'Missatje del formulari de contacte de la teva web';

$cuerpoMensaje = "De: $nom\n";
$cuerpoMensaje .= "Correo: $correu\n";
$cuerpoMensaje .= "Mensaje:\n $missatge";

$mailEnviado = mail($destinatario, $asunto, $cuerpoMensaje);

//S'enviará a la pàgina d'èxit en cas de que tot vagi bé i sino a la d'error
if ($mailEnviado) {
    header("Location: contacte-una-vegada-respons.html");
} else {
    header("Location: contacte-error.html");
}
?>