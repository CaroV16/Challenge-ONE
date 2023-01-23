var mensajeIngresado = document.querySelector(".mensaje-ingresado");
var portada = document.querySelector(".portada");
var resultado = document.querySelector(".resultado");
var mensajeEncriptado = document.querySelector(".mensaje-encriptado")

function sinCarcterersEspaciales(e){
    var key = e.keyCode || e.which; 
    var tecla = String.fromCharCode(key).toString();
    var letras = " abcdefghijklmnopqrstuvwxyzñ";
    var especiales = ["@", "á","é", "í", "ó", "ú"];
    var teclaEspecial = false;

    for (i in especiales){
        
        if(key == especiales[i]){
            teclaEspecial = true;
            break;
        }

    }
    
    if(letras.indexOf (tecla) == -1 && !teclaEspecial){
        alert ("ingresa solo letas minúscilas sin tildes");
        return false;
    }
}

function botonEncriptar() {
    var textoIngresado = encriptar(mensajeIngresado.value);
    mensajeEncriptado.value = textoIngresado;
    mensajeIngresado.value = "";
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

function copiarTexto(){
    mensajeEncriptado.select();
    mensajeEncriptado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensajeEncriptado.value);
}

function botonDesencriptar() {
    var desencritado = desencriptar(mensajeIngresado.value);
    mensajeEncriptado.value = desencritado;
    mensajeIngresado.value = "";
}

function desencriptar(textoEncriptado){
    let codigoEncritacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for(i=0; i < codigoEncritacion.length; i++){
        if (textoEncriptado.includes(codigoEncritacion[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(codigoEncritacion[i][1], codigoEncritacion[i][0])
        }
    }
    return textoEncriptado;
}

