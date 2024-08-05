// Auto-expande el textarea
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('texto-a-encriptar');
    textarea.addEventListener('input', autoExpand);
    textarea.addEventListener('input', verificarContenido); // Añadir verificación de contenido

    function autoExpand(event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    }

    verificarContenido(); // Llamar a la verificación de contenido al cargar la página
});

function verificarContenido() {
    const textarea = document.getElementById('texto-a-encriptar');
    const botonEncriptar = document.getElementById('encriptar');
    const botonDesencriptar = document.getElementById('desencriptar');
    const regex = /^[a-z\s]+$/; // Solo letras minúsculas y espacios
    const input = textarea.value;

    // Habilitar o deshabilitar botones según el contenido
    const isValid = regex.test(input);
    botonEncriptar.disabled = !isValid;
    botonDesencriptar.disabled = !isValid;
}

function encriptar() {
    if (document.getElementById('encriptar').disabled) return;

    // Obtiene el texto de entrada
    let inputText = document.getElementById('texto-a-encriptar').value;

    // Encripta el texto
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Asigna el texto encriptado al textarea
    document.getElementById('texto-encriptado').value = encryptedText;
    activar();
    reencuadrar(document.getElementById('texto-encriptado'));
}

function desencriptar() {
    if (document.getElementById('desencriptar').disabled) return;

    let inputText = document.getElementById('texto-a-encriptar').value;
    let desencryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('texto-encriptado').value = desencryptedText;

    activar();
    reencuadrar(document.getElementById('texto-encriptado'));
}

function activar() {
    document.getElementById("container-vacio").style.display = "none";
    document.getElementById("container-lleno").style.display = "block";
}

function reencuadrar(textarea) {
    textarea.style.height = "auto"; // Restablece la altura a 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta la altura al scrollHeight
}

function copiar() {
    let outputText = document.getElementById('texto-encriptado').value;
    navigator.clipboard.writeText(outputText);
}
