function contenido(id) { //se denomina la función que va a retornar todo el proceso con los ID.
  return document.getElementById(id);
}
function calcularProm(){ //se denomina la función para calcular el promedio
  var pn= parseInt(contenido('1nota').value); //la variable pn es de la primer nota
  var sn= parseInt(contenido('2nota').value); //la variable sn es de la segunda nota
  var tn= parseInt(contenido('3nota').value); //la variable tn es de la tercer nota
  var cn= parseInt(contenido('4nota').value); //la variable cn es de la cuarta nota
  var total = (pn + sn + tn + cn )/4; //es la operación que se realiza para calcular el promedio
  contenido('media').value = total; //la variable del resultado (total) se guarda en el ID media

//SE COLOCA LAS CONDICIONES PARA DEFINIR EL EQ DEL PROMEDIO
  if (total >=90 & total <=100) { // si total es mayor o igual a 90 o menor o igual a 100
    contenido('EQ').value = 'Aprobado'; //La calificación es de Aprobado
  }
  else if (total >=80 & total <=90) { // si total es mayor o igual a 80 o menor o igual a 90
    contenido('EQ').value = 'Regular'; //La calificación es de Regular
  }
  else if (total >=70 & total <=80) { // si total es mayor o igual a 70 o menor o igual a 80
    contenido('EQ').value = 'Suficiente'; //La calificación es de Suficiente
  }
  else if (total >=60 & total <=70) { // si total es mayor o igual a 60 o menor o igual a 70
    contenido('EQ').value = 'Irregular'; //La calificación es de Irregular
  }
  else if (total <60) { // si total es menor a 60
    contenido('EQ').value = 'Recurse'; //La calificación es de Recurse
  }
  else { //si por error se coloca otro caracter que no sea número
    contenido('EQ').value = 'Dato Inválido'; //mostrará que es un dato Inválido.
  }
}
