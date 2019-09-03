var texto1 = document.getElementById("caja_uno");
var boton1 = document.getElementById("boton_uno");
boton1.addEventListener("click", dibujoPorClick1);
var texto2 = document.getElementById("caja_dos");
var boton2 = document.getElementById("boton_dos");
boton2.addEventListener("click", dibujoPorClick2);
var texto3 = document.getElementById("caja_tres");
var boton3 = document.getElementById("boton_tres");
boton3.addEventListener("click", dibujoPorClick3);
var texto4 = document.getElementById("caja_cuatro");
var boton4 = document.getElementById("boton_cuatro");
boton4.addEventListener("click", dibujoPorClick4);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
document.write("Asi queda tu dibujo");
dibujar("gray", 1, 1, 1, 300);
dibujar("gray", 1, 299, 299, 299);
dibujar("gray", 1, 1, 299, 1);
dibujar("gray", 299, 299, 299, 1);

function dibujar(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClick1()
{
  var linea1 = parseInt(texto1.value);
  var p1 = ancho/linea1
  var a;
  for(a = 0; a < linea1; a++)
  {
    var y1 = p1*(a + 1);
    var x1 = 300 - p1*a;
    dibujar("#AAF", x1, 0, 0, y1);
  }
}
function dibujoPorClick2()
{
  var linea2 = parseInt(texto2.value);
  var p2 = ancho/linea2;
  var b;
  for(b = 0; b < linea2; b++)
  {
    var y2 = b*p2;
    var x2 = p2*(b+1);
    dibujar("#AFA", 0, y2, x2, 300);
  }
}
function dibujoPorClick3()
{
  var linea3 = parseInt(texto3.value);
  var p3 = ancho/linea3;
  var c;
  for(c = 0; c < linea3; c++)
  {
    var x3 = c*p3;
    var y3 = p3*(c+1);
    dibujar("#AFA", x3, 0, 300, y3);
  }
}
function dibujoPorClick4()
{
  var linea4 = parseInt(texto4.value);
  var p4 = ancho/linea4;
  var w;
  for(w = 0; w < linea4; w++)
  {
    var x4 = 300 - p4*(w + 1);
    var y4 = p4*w;
    dibujar("#AAF", 300, y4, x4, 300)
  }
}
