// vamos a realizar el envio de un email a mi mismo "para comprobar que funciona", una vez lo hayamos conseguido jugaremos un poco con las opciones que nos ofrece GAS
// Posteriormente intentaremos enviar un correo en difundido a un grupo de contactos (que guardaremos en un array de Strings sus direcciones)
// Finalmente jugaremos mas profundamente con lo que nos ofrece la clase mailApp (envío de imagenes o htmls, adjuntar archivos, etc)
function enviarEmailAMiMismo() {
   MailApp.sendEmail({
     to: "adrianurbano.16@campuscamara.es",
     subject: "primer prueba email",
     body: "prueba inicial de email enviado por GAS, para ver si me llega correctamente"
     
   }); // Fin Metodo de envío de correo
}//Fin Funcion