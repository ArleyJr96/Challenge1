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
        document.getElementById("muñeco").style.display = "none";
        document.getElementById("texto").value = "";
        tituloMensaje.textContent = "Su mensaje encriptado es: \n";
        parrafo.textContent = textoCifrado;
    } else{
        document.getElementById("muñeco").style.display = "";
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
        document.getElementById("muñeco").style.display = "none";
        document.getElementById("texto").value = "";
        tituloMensaje.textContent = "Su mensaje desencriptado es: \n";
        parrafo.textContent = textoCifrado;
    } else{
        document.getElementById("muñeco").style.display = "";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado"
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert("Debe ingresar algún texto");
    }
}

function textoCopia() {
    let textoSalid = document.getElementById("parrafo").innerText;
    navigator.clipboard.writeText(textoSalid).then(function() {
        alert("Texto copiado al portapapeles");
    }, function() {
        alert("Error al copiar el texto");
    });
}
