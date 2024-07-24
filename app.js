function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if(texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./assets/Encriptado.jpg";
    } else{
        muñeco.src = "./assets/Muñeco.svg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert("Debe ingresar algún texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if(texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./assets/Desencriptado.jpg";
    } else{
        muñeco.src = "./assets/Muñeco.svg";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert("Debe ingresar algún texto");
    }
}
