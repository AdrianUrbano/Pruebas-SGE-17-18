// vamos a realizar el envio de un email a mi mismo "para comprobar que funciona", una vez lo hayamos conseguido jugaremos un poco con las opciones que nos ofrece GAS (CHECKED)
// Posteriormente intentaremos enviar un correo en difundido a un grupo de contactos (que guardaremos en un array de Strings sus direcciones) (CHECKED)
// Finalmente jugaremos mas profundamente con lo que nos ofrece la clase mailApp (envío de imagenes o htmls, adjuntar archivos, etc)
function enviarEmailAMiMismo() { // Primera parte, nos enviamos un correo simple a nosotros mismos
   MailApp.sendEmail({
     to: "adrianurbano.16@campuscamara.es",
     subject: "primer prueba email",
     body: "prueba inicial de email enviado por GAS, para ver si me llega correctamente"
   }); // Fin Metodo de envío de correo
}//Fin Funcion
function enviarAGrupo(){ // Envío de correo electronico a lista de usuarios 
  var listaContactos = 'adrianurbano.16@campuscamara.es,juangildearizon.16@campuscamara.es'; //Definimos la variable y añadimos tantos contactos como queramos en el siguiente formato ('nombre1,nombre2,nombre3,...');
  MailApp.sendEmail({
     to: listaContactos, // Igual que antes, pero al comprobar el valor de la variable Se va buscando el separador (','), por cada una que encuentra envía el correo al nombre detras de ella.
     subject: "primer prueba email",
     body: "prueba inicial de email enviado por GAS, para ver si me llega correctamente"
   }); // Fin Metodo de envío de correo
}//Fin Funcion