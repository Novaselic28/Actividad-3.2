function SALIR() {
    eliminar();
    eliminarboto1();
    eliminarboto2();
    var Parafo = document.createElement("p");
    var newParafo = document.createTextNode("Estas seguro T_T???");
    Parafo.appendChild(newParafo);

    var BotonSalir = document.createElement("button");
    var newBotonSalir = document.createTextNode("SI");
    BotonSalir.appendChild(newBotonSalir);

    var BotonNoSalir = document.createElement("button");
    var newBotonNoSalir = document.createTextNode("NO");
    BotonNoSalir.appendChild(newBotonNoSalir);

    var currentDiv = document.getElementById("Seguro");
    document.body.appendChild(Parafo);
    document.body.appendChild(BotonSalir);
    BotonSalir.addEventListener("click", FUERRA);
    document.body.appendChild(BotonNoSalir);
    BotonNoSalir.addEventListener("click", QUEDAR);
    
}

function FUERRA (){
    window.open("about:blank","_self").close() ;
}

function QUEDAR(){
    eliminarima();
    var Imagen = document.createElement("img");
     Imagen.src = 'img/Alegira.jpg';
    document.body.appendChild(Imagen); 

   
           
}
function eliminar(){
    lista = document.getElementsByTagName('p')[0];
    if (lista) {
        padre = lista.parentNode;
        padre.removeChild(lista);
    }
    
}
function eliminarima(){
    lista = document.getElementsByTagName('img')[0];
    if (lista) {
        padre = lista.parentNode;
        padre.removeChild(lista);
    }
    
}
function eliminarboto1(){
    bo = document.getElementsByTagName('button')[0];
    if (bo) {
        bopadre = bo.parentNode;
        bopadre.removeChild(bo);
    }
    
}
function eliminarboto2(){
    bo = document.getElementsByTagName('button')[0];
    if (bo) {
        bopadre = bo.parentNode;
        bopadre.removeChild(bo);
    }
    
}