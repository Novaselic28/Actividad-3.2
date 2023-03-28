function Colores(numColor){
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("COLORES");
    newDiv.appendChild(newContent); 

    var nomC = nombreColor(numColor);
    var newP = document.createElement("p");
    var newColor = document.createTextNode(nomC);
    newP.appendChild(newColor);
    var colorB = defineColor(numColor);
    newP.style = "border: 1px solid #999999; background-color:" + colorB + "; width: 60px height:30 px";

    //Añade el elemento creato y su contenido DOM

    var currentDiv = document.getElementById("div");
    document.body.appendChild(newDiv);
    document.body.appendChild(newP);

    }

function defineColor(n){
    switch(parseInt(n)){
        case 0: return "rgb(0, 0, 0)";
        case 1: return "rgb(183, 78, 37)";
        case 2: return "rgb(255, 0, 0)";
        case 3: return "rgb(255, 165, 0)";
        case 4: return "rgb(255, 255, 0)";
        case 5: return "rgb(0, 128, 0)";
        case 6: return "rgb(0, 0, 255)";
        case 7: return "rgb(238, 130, 238)";
        case 8: return "rgb(128, 128, 128)";
        case 9: return "rgb(255,255,255)";
        case 10: return "rgb(255, 215, 0)";
        case 11: return "rgb(192, 192, 192)";
    }
}


function nombreColor(n){

    switch(parseInt(n)){
        case 0: return "NEGRO"; 
        case 1: return "CAFE";
        case 2: return "ROJO";
        case 3: return "NARANJA";
        case 4: return "AMARRILLO";
        case 5: return "VERDE";
        case 6: return "AZUL";
        case 7: return "VIOLETA";
        case 8: return "GRIS";
        case 9: return "BLANCO";
        case 10: return "ORO";
        case 11: return "PLATA";
    }
}

function ColoresBanda4(n) {
    
}