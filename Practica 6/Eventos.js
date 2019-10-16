var cuadrito = document.getElementById("flechitas");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

cuadrito.addEventListener("mousedown", posicion);
cuadrito.addEventListener("mouseup", posicion2);

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var ne = document.getElementById("negrito");
ne.addEventListener("click", negro);
var ro = document.getElementById("rojito");
ro.addEventListener("click", rojo);
var az = document.getElementById("azulito");
az.addEventListener("click", azul);
var ve = document.getElementById("verdesito");
ve.addEventListener("click", verde);
var bo = document.getElementById("borrador");
bo.addEventListener("click", borrador);
var uno = document.getElementById("uno");
uno.addEventListener("click", uno1);
var dos = document.getElementById("dos");
dos.addEventListener("click", dos2);
var tres = document.getElementById("tres");
tres.addEventListener("click", tres3);
var colorcito = "black";
var grosor = 5;

dibujar("gray", 1, 1, 1, 300, papel);
dibujar("gray", 1, 299, 299, 299, papel);
dibujar("gray", 1, 1, 299, 1, papel);
dibujar("gray", 299, 299, 299, 1, papel);
document.addEventListener("keydown", dibujarTeclado);

function dibujar(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var movimiento = 10;
  switch(evento.keyCode)
  {
    case teclas.LEFT:
    dibujar(colorcito, x, y, x - movimiento, y, papel);
    x = x - movimiento;
    break;
    case teclas.UP:
    dibujar(colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento;
    break;
    case teclas.RIGHT:
    dibujar(colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    break;
    case teclas.DOWN:
    dibujar(colorcito, x, y, x, y + movimiento, papel);
    y = y + movimiento;
    break;
    default:
    console.log("Otra tecla");
  }
}

function posicion2(e)
{
    var pos = getMousePos(cuadrito, e);
    xf = parseInt(pos.x);
    yf = parseInt(pos.y);
    dibujar(colorcito, x, y, xf, yf, papel);
    x = xf;
    y = yf;
}

function posicion(e)
{
    var pos = getMousePos(cuadrito, e);
    x = parseInt(pos.x);
    y = parseInt(pos.y);
}
function getMousePos(cuadrito, evt)
{
    var rect = cuadrito.getBoundingClientRect();
    return{
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * cuadrito.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * cuadrito.height
    };
}

function uno1()
{
  grosor = 3;
}
function dos2()
{
  grosor = 5;
}
function tres3()
{
  grosor = 8;
}

function negro()
{
  colorcito = "black";
  if(grosor > 8)
  {
    grosor = grosor / 3;
  }
}
function rojo()
{
  colorcito = "red";
  if(grosor > 8)
  {
    grosor = grosor / 3;
  }
}
function azul()
{
  colorcito = "blue";
  if(grosor > 8)
  {
    grosor = grosor / 3;
  }
}
function verde()
{
  colorcito = "yellow";
  if(grosor > 8)
  {
    grosor = grosor / 3;
  }
}
function borrador()
{
  colorcito = "white";
  grosor = grosor * 3;
}
