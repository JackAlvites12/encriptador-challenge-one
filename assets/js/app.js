const textArea = document.querySelector('.text-container__ta');

// Botones 
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar'); 
const btnCopiar = document.querySelector('.btn-copiar'); 

// Mensajes
const mensajeError = document.querySelector('.mensaje-error'); 
const mensajeEncriptado_p = document.querySelector('.mensaje-encriptado__p'); 
const mensajeEncriptado_ct = document.querySelector('.mensaje-encriptado'); 


textArea.focus()

btnEncriptar.addEventListener('click', () => {

    if(textArea.value.length === 0){
        mensajeError.classList.add('show');

        mensajeEncriptado_ct.classList.remove('show');


    }else{

        mensajeError.classList.remove('show')
        mensajeEncriptado_ct.classList.add('show');

        encriptar( textArea.value )

    }


})

btnDesencriptar.addEventListener('click', () => {

    if(textArea.value.length === 0){
        mensajeError.classList.add('show');
        mensajeEncriptado_ct.classList.remove('show');

    }else{

        mensajeError.classList.remove('show')
        mensajeEncriptado_ct.classList.add('show');

        desencriptar( textArea.value )

    }


})

btnCopiar.addEventListener('click', ()=>{
    

    navigator.clipboard.writeText(mensajeEncriptado_p.textContent);

})

function validarInput( textarea ) {
    // Obtener el valor actual del textarea
    const valor = textarea.value;

    // Reemplazar caracteres con acentos por caracteres sin acentos
    let valorSinAcentos = valor.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Convertir a minúsculas
    valorSinAcentos = valorSinAcentos.toLowerCase();

    // Eliminar números y caracteres especiales
    valorSinAcentos = valorSinAcentos.replace(/[^a-z\s]/g, '');
    
    // Establecer el valor modificado en el textarea
    textarea.value = valorSinAcentos;
}


function encriptar( texto ){

    let textoEncriptado = '';

    for (const letra of texto) {

        if(letra === 'e'){
            textoEncriptado += 'enter'
        } 

        else if(letra === 'i'){
            textoEncriptado += 'imes'
        }

        else if(letra === 'a'){
            textoEncriptado += 'ai'
        }

        else if(letra === 'o'){
            textoEncriptado += 'ober'
        }

        else if(letra === 'u'){
            textoEncriptado += 'ufat'
        }
        
        else{
            textoEncriptado += letra
        }
    }

    mensajeEncriptado_p.innerText = textoEncriptado



}

function desencriptar(textoEncriptado) {

    let textoDesencriptado = '';

    for (let i = 0; i < textoEncriptado.length; i++) {

        // Comprobar palabra clave "enter" empieza por el indice i
        if (textoEncriptado.startsWith('enter', i)) {
            textoDesencriptado += 'e';
            i += 4;
        }

        // Comprobar palabra clave "imes"
        else if (textoEncriptado.startsWith('imes', i)) {
            textoDesencriptado += 'i';
            i += 3;
        }

        // Comprobar palabra clave "ai"
        else if (textoEncriptado.startsWith('ai', i)) {
            textoDesencriptado += 'a';
            i += 1;
        }

        // Comprobar palabra clave "ober"
        else if (textoEncriptado.startsWith('ober', i)) {
            textoDesencriptado += 'o';
            i += 3;
        }

        // Comprobar palabra clave "ufat"
        else if (textoEncriptado.startsWith('ufat', i)) {
            textoDesencriptado += 'u';
            i += 3;
        }

        // Si no se encuentra ninguna palabra clave, añadir la letra original
        else {
            textoDesencriptado += textoEncriptado[i];
        }
    }

    mensajeEncriptado_p.innerText = textoDesencriptado;
}


/**
document.addEventListener("DOMContentLoaded", function() {
    var scrollBtn = document.getElementById("scrollBtn");
    var textArea = document.querySelector('.text-container__ta');
    var btnEncriptar = document.querySelector('.btn-encriptar');
    var btnDesencriptar = document.querySelector('.btn-desencriptar');
    var mensajeEncriptadoCt = document.querySelector('.mensaje-encriptado');

    btnEncriptar.addEventListener('click', function() {
        // Realizar la encriptación
        encriptar(textArea.value);
        // Mostrar el contenido encriptado
        mensajeEncriptadoCt.style.display = "block";
        // Mostrar el botón después de un breve retraso para permitir que se renderice el contenido
        setTimeout(showScrollButton, 100);
    });

    btnDesencriptar.addEventListener('click', function() {
        // Realizar la desencriptación
        desencriptar(textArea.value);
        // Mostrar el contenido desencriptado
        mensajeEncriptadoCt.style.display = "block";
        // Mostrar el botón después de un breve retraso para permitir que se renderice el contenido
        setTimeout(showScrollButton, 100);
    });

    function showScrollButton() {
        if (mensajeEncriptadoCt.scrollHeight > window.innerHeight) {
            // Si hay más contenido por debajo, muestra el botón
            scrollBtn.style.display = "block";
        } else {
            // Si no, oculta el botón
            scrollBtn.style.display = "none";
        }
    }

    scrollBtn.onclick = function() {
        // Desplázate hacia abajo
        window.scrollBy({
            top: mensajeEncriptadoCt.scrollHeight,
            behavior: 'smooth'
        });
    };
}); */

