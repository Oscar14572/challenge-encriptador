var botonEncriptar=document.querySelector(".btn-encriptar");
var botonDesencriptar=document.querySelector(".btn-desencriptar");
var imagen=document.querySelector(".contenedor-imagen");
var contenedor=document.querySelector(".parrafo");
var resultado=document.querySelector(".texto-resultado");

botonEncriptar.onclick=encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
 Ocultar();
 var cajaTexto=recuperarTexto();
 resultado.textContent=encriptarTexto(cajaTexto);
}
function desencriptar(){
    Ocultar();
    var cajaTexto=recuperarTexto();
    resultado.textContent=desencriptarTexto(cajaTexto);
}
function recuperarTexto(){
    var cajaTexto=document.querySelector(".caja-texto");
    return cajaTexto.value;
}
function Ocultar(){
    imagen.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}
function encriptarTexto(mensaje){
    var texto=mensaje;
    var textoFinal="";
    for (var i = 0; i < texto.length; i++) {
       if (texto[i]=="a") {
        textoFinal=textoFinal + "ai"
       }
        else if (texto[i]=="e") {
        textoFinal=textoFinal + "enter"
       }
       else if (texto[i]=="i") {
        textoFinal=textoFinal + "imes"
       }
       else if (texto[i]=="o") {
        textoFinal=textoFinal + "ober"
       }
        else if (texto[i]=="u") {
        textoFinal=textoFinal + "ufat"
       }
       else{
        textoFinal=textoFinal + texto[i];
       }
        
    }
    return textoFinal;
}
function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    var i = 0;
    while (i < texto.length) {
        if (texto[i] === "a" && texto[i + 1] === "i") {
            textoFinal += "a";
            i += 2;
        } else if (texto[i] === "e" && texto[i + 1] === "n" && texto[i + 2] === "t" && texto[i + 3] === "e" && texto[i + 4] === "r") {
            textoFinal += "e";
            i += 5;
        } else if (texto[i] === "i" && texto[i + 1] === "m" && texto[i + 2] === "e" && texto[i + 3] === "s") {
            textoFinal += "i";
            i += 4;
        } else if (texto[i] === "o" && texto[i + 1] === "b" && texto[i + 2] === "e" && texto[i + 3] === "r") {
            textoFinal += "o";
            i += 4;
        } else if (texto[i] === "u" && texto[i + 1] === "f" && texto[i + 2] === "a" && texto[i + 3] === "t") {
            textoFinal += "u";
            i += 4;
        } else {
            textoFinal += texto[i];
            i += 1;
        }
    }
    return textoFinal;
}

const btnCopiar=document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar=()=>{
    var contenido=document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    
})