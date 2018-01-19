//Aplicación para probar la extensión de GAS con GitHub
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Actualizar datos')
      .addItem('Empezar ahora!!', 'menuItem1')
      .addItem("cogeNombre", "menuItem2")
      .addToUi();
}

function menuItem1() {
  //Definimos una variable donde vamos a registrar un input:
  var input = Browser.inputBox("Por favor, introduce tu nombre:");
  //Esta linea muestra un mensaje de hola mundo!! al ejecutar el menuItem1
  Browser.msgBox('Bienvenido a tu primer Script con GAS '+input);
  //Añado este nuevo comentario sobre el código desde Github!!!
  //Para usar el log de GAS solo tenemos que hacer CTRL+Enter y añadir esta linea
  Logger.log("Es una prueba de Log");
  
  //Esta funcion lo que hara sera mostrar el nombre de la hoja de calculo
}

function menuItem2(){
  var name = SpreadsheetApp.getActiveSheet().getName();
  Logger.log('el nombre de la hoja de calculo es: '+name);
  Browser.msgBox('el nombre de la hoja de calculo es: '+name);
  var name2 = SpreadsheetApp.openById("https://docs.google.com/spreadsheets/d/1GyX7PYTNv0XLPfjntcr5xu3XBTG5-vCFrUl_JUmZFNk/edit#gid=0");
  var name2Nombre = name2.getName();
  Logger.log('el nombre de la segunda hoija es: '+name2Nombre);
  Browser.msgBox('el nombre de la hoja de calculo es: '+name2Nombre);
}
