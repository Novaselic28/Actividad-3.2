function Colores(numColor){

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("COLORES");
    newDiv.appendChild(newContent); //añade texto al div creado.

    var nomC=nombreColor(numColor);

    var newP = document.createElement("p");
    var newColor = document.createTextNode( nomC );
    newP.appendChild(newColor);
    var colorB=defineColor(numColor);

    newP.style="border: 1px solid #999999; background-color:"+colorB+"; width: 100px ;height:30px";


// añade el elemento creado y su contenido al DOM

var currentDiv = document.getElementById("div");
 document.body.appendChild(newDiv);
 document.body.appendChild(newP);


}

function Calcular(b0,b1,b2,b3,b4){
  var valResistencia=(b1*b3)+(b2*(b3/10))+(b0*b3);
  var tolerancia;
  switch(parseInt (b4)){
    case 0:tolerancia=1; break;
    case 1:tolerancia=2; break;
    case 2:tolerancia=0.5; break;
    case 3:tolerancia=0.25; break;
    case 4:tolerancia=0.1; break;
    case 5:tolerancia=0.05; break;
    case 6:tolerancia=5; break;
    case 7:tolerancia=10; break; 
    default:tolerancia="Valor no Aceptado..."; break; 
  }
  var Total = tolerancia;
  
  var Div = document.createElement("div");
  var newContent = document.createTextNode("El valor de la Resistencia es: " + valResistencia);
  Div.appendChild(newContent);
  
  var Parafo = document.createElement("p");
  var newParafo = document.createTextNode("La tolerancia es: " + Total + "%");
  Parafo.appendChild(newParafo);

  var currentDiv = document.getElementById("Respuesta");
  document.body.appendChild(Div);
  document.body.appendChild(Parafo);
}

function defineColor(n){
  switch(parseInt(n)){
    case 0:return "rgb(122, 128, 121)";
    case 1:return "rgb(128,0,0)";
    case 2:return "rgb(255,0,0)";
    case 3:return "rgb(255,128,0)";
    case 4:return "rgb(255,255,0)"
    case 5:return "rgb(0,255,0)";
    case 6: return "rgb(0,0,255)";
    case 7: return "rgb(128,0,128)";
    case 8: return "rgb(128,128,128)";
    case 9: return "rgb(255,255,255)";
    case 10: return "rgb(240,234,200)";
    case 11: return "rgb(192,192,192)";
  }
}

function nombreColor(n){
  switch(parseInt(n)){
    case 0:return "NEGRO";
    case 1:return "CAFE";
    case 2:return "ROJO";
    case 3:return "NARANJA";
    case 4:return "AMARILLO"
    case 5:return "VERDE";
    case 6: return "AZUL";
    case 7: return "VIOLETA";
    case 8: return "GRIS";
    case 9: return "BLANCO";
    case 10: return "ORO";
    case 11: return "PLATA";

  }
}