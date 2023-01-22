var mensajeIngresado = document.querySelector(".mensaje-ingresado");
var portada = document.querySelector(".portada");
var resultado = document.querySelector(".resultado");
var mensajeEncriptado = document.querySelector(".mensaje-encriptado")

function botonEncriptar() {
    var textoIngresado = encriptar(mensajeIngresado.value);
    mensajeEncriptado.value = textoIngresado;

    portada.style.display = "none";
    resultado.style.display = "inline-flex";
}


function encriptar(mensajeCapturado){
    let codigoEncritacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeCapturado = mensajeCapturado.toLowerCase();

    for(i=0; i < codigoEncritacion.length; i++){
        if (mensajeCapturado.includes(codigoEncritacion[i][0])){
            mensajeCapturado = mensajeCapturado.replaceAll(codigoEncritacion[i][0], codigoEncritacion[i][1])

        }
    }

    return mensajeCapturado;
}
