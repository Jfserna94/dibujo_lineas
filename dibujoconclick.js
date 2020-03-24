var texto =  document.getElementById("texto_lineas");
var boton =  document.getElementById("botoncito");
var texto2 = document.getElementById("texto_lineas2");
var boton2 = document.getElementById("botoncito2");
var texto3 = document.getElementById("texto_lineas3");
var boton3 = document.getElementById("botoncito3");
var texto4 = document.getElementById("texto_lineas4");
var boton4 = document.getElementById("botoncito4");
var boton5 = document.getElementById("BotonLimpiar");
var boton6 = document.getElementById ("BotonCuadros");

boton.addEventListener("click", dibujoPorClick);
boton2.addEventListener("click", dibujoPorClick2);
boton3.addEventListener("click", dibujoPorClick3);
boton4.addEventListener("click", dibujoPorClick4);
boton5.addEventListener("click", limpia);
boton6.addEventListener("click", Cuadros);

var d = document.getElementById("dibujito");
var ancho = d.width;
var alto = d.height
var lienzo = d.getContext("2d");

function limpia()
{
  lienzo.clearRect(0, 0, ancho, alto);
  texto.value= "";
  texto2.value = "";
  texto3.value = "";
  texto4.value = "";
}
function Cuadros()
{
  lienzo.fillStyle = "brown";
  lienzo.fillRect(0,0,ancho,alto);
  lienzo.clearRect(10,20,50,50);
  lienzo.clearRect(60,70,70,70);
  lienzo.clearRect(130,140,80,80);
  texto.value = "";
  texto2.value = "";
  texto3.value = "";
  texto4.value = "";

}
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
  var yi, xf;
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
  var yi, xf;
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
function dibujoPorClick3()
{
  var x = parseInt(texto3.value);
  console.log(texto3);
  var lineas = x;
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;

  while (l < lineas)
  {
    yi = espacio * l;
    xf = ancho - espacio - (espacio * l);
    dibujarLinea("green", 300, yi, xf, 300);
    console.log("lineas" + l);
    l = l + 1;
  }

}
function dibujoPorClick4()
{
  var x = parseInt(texto4.value);
  console.log(texto4);
  var lineas = x;
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = ancho - (espacio * l);
    xf = espacio * ( l + 1);
    dibujarLinea("blue", 0, yi, xf, 0);
    console.log("lineas" + l);
  }

}
