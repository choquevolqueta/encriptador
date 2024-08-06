document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('texto-a-encriptar');
    textarea.addEventListener('input', autoExpand);

    function autoExpand(event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    }
});


function encriptar() {
    
    
    const inputText = document.getElementById('texto-a-encriptar').value;
    const regex = /^[a-z\s]+$/;
    const ISValid= regex.test(inputText);

    if (ISValid ==false) {
        alert("solo minusculas porfavor")
    } else {
    
    // Encripta el texto
        let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    // Asigna el texto encriptado al textarea
        document.getElementById('texto-encriptado').value = encryptedText;
        function activar() {
        document.getElementById("container-vacio").style.display = "none";
        document.getElementById("container-lleno").style.display = "block";
    
        }

            activar()
    // Llama a reencuadrar pasando el textarea encriptado
        reencuadrar(document.getElementById('texto-encriptado'));
    }
}

// Función reencuadrar
function reencuadrar(textarea) {
    textarea.style.height = "auto"; // Restablece la altura a 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta la altura al scrollHeight
}
function desencriptar() {
    const inputText = document.getElementById('texto-a-encriptar').value;
    const regex = /^[a-z\s]+$/;
    const ISValid= regex.test(inputText);

    if (ISValid ==false) {
        alert("solo minusculas porfavor")
         } else {
            let desencryptedText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        document.getElementById('texto-encriptado').value = desencryptedText

    
        function activar() {
            document.getElementById("container-vacio").style.display = "none";
            document.getElementById("container-lleno").style.display = "block";
        }

            activar()
        reencuadrar(document.getElementById('texto-encriptado'));
         }
}
    



function copiar() {
    //para copiar
    let outputText = document.getElementById('texto-encriptado').value;
    navigator.clipboard.writeText(outputText);
}
