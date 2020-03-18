

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var x = parseInt(texto.value);
  console.log(texto);
  var lineas = x;
  var l = 0;
  var xi, xf;
  var espacio = ancho / lineas;

  while (l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("red", 0, yi, xf, 300);
    console.log("lineas" + l);
    l = l + 1;
  }

  dibujarLinea("black", 1, 1, 1, 299);
  dibujarLinea("black", 1, 299, 299, 299);
}
function dibujoPorClick2()
{
  var x = parseInt(texto2.value);
  console.log(texto2);
  var lineas = x;
  var l = 0;
  var xi, xf;
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = ancho - (espacio * l);
    xf = ancho - espacio - (espacio * l);
    dibujarLinea("#AAF", 300, yi, xf, 0);
    console.log("lineas" + l);
  }
  dibujarLinea("black", 299, 299, 299, 0);
  dibujarLinea("black", 299, 1, 1, 1);
}
