function contenido(id) {
  return document.getElementById(id);
}
function calcularProm(){
  var pn= parseInt(contenido('1nota').value);
  var sn= parseInt(contenido('2nota').value);
  var tn= parseInt(contenido('3nota').value);
  var cn= parseInt(contenido('4nota').value);
  var total = (pn + sn + tn + cn )/4;
  contenido('media').value = total;

  if (total >=90 & total <=100) {
    contenido('EQ').value = 'A';
  }
  else if (total >=80 & total <=90) {
    contenido('EQ').value = 'B';
  }
  else if (total >=70 & total <=80) {
    contenido('EQ').value = 'C';
  }
  else if (total >=60 & total <=70) {
    contenido('EQ').value = 'D';
  }
  else if (total <60) {
    contenido('EQ').value = 'F';
  }
  else {
    contenido('EQ').value = 'Invalido';
  }
}
