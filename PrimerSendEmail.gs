// vamos a realizar el envio de un email a mi mismo "para comprobar que funciona", una vez lo hayamos conseguido jugaremos un poco con las opciones que nos ofrece GAS (CHECKED)
// Posteriormente intentaremos enviar un correo en difundido a un grupo de contactos (que guardaremos en un array de Strings sus direcciones) (CHECKED)
// Finalmente jugaremos mas profundamente con lo que nos ofrece la clase mailApp (envío de htmls, adjuntar archivos, etc)
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
//En esta prueba vamos a adjuntar un archivo situado en google drive
function adjuntarArchivoGDrive(){
  var archivo = DriveApp.getFilesByName("Mock-Ups"); // Delimitamos donde está el archivo (usamos la funcion name para que nos devuelva un iterador de archivos, si usaramos el ID nos devolvería un blob(se verá mas adelante))
  MailApp.sendEmail("adrianurbano.16@campuscamara.es",
                     "Ejemplo de adjuntar un archivo",
                     "escribo algo por poner, la chicha de esto está en el adjunto",
     {attachments: archivo.next().getBlob()} // Añadimos un attachment (adjunto), buscamos en la variable donde metimos el nombre del archivo y cogemos el objeto blob.
 );
}//Fin funcion
