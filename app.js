function TextoEncriptado() {
    var entrada = document.getElementById("texto_usuario").value;
    if (entrada === "") {
        document.getElementById("imagen_derecha").style.display = "block";
        document.getElementById("texto_derecha1").style.display = "block";
        document.getElementById("texto_derecha2").style.display = "block";
        document.getElementById("salidaTexto").style.display = "none";
        document.getElementById("botonCopia").style.display = "none";
    } else {
        var textoEncriptado = entrada
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById("imagen_derecha").style.display = "none";
        document.getElementById("texto_derecha1").style.display = "none";
        document.getElementById("texto_derecha2").style.display = "none";
        document.getElementById("salidaTexto").style.display = "block";
        document.getElementById("botonCopia").style.display = "block";
        document.getElementById("salidaTexto").innerText = textoEncriptado;
    }
}

function TextoDesencriptado() {
    var entrada = document.getElementById("textoUsuario").value;
    if (input === "") {
        document.getElementById("imagen_dercha").style.display = "block";
        document.getElementById("texto_derecha1").style.display = "block";
        document.getElementById("texto_derecha2").style.display = "block";
        document.getElementById("salidaTexto").style.display = "none";
        document.getElementById("botonCopia").style.display = "none";
    } else {
        var textoDesencriptado = entrada
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        document.getElementById("right-image").style.display = "none";
        document.getElementById("right-text1").style.display = "none";
        document.getElementById("right-text2").style.display = "none";
        document.getElementById("outputText").style.display = "block";
        document.getElementById("copyButton").style.display = "block";
        document.getElementById("outputText").innerText = textoDesencriptado;
    }
}

function copiaTexto() {
    var salidaTexto = document.getElementById("salidaTexto").innerText;
    navigator.clipboard.writeText(salidaTexto).then(function() {
        alert("Texto copiado al portapapeles");
    }, function() {
        alert("Error al copiar el texto");
    });
}
