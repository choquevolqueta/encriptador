
function encriptar() {
    //al usar esta funcion la variable texto encriptado
        let inputText = document.getElementById('texto-a-encriptar').value;
        let encryptedText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        document.getElementById('texto-encriptado').value = encryptedText
}
function desencriptar() {
    //al usar esta funcion la variable se desencripta
    let inputText = document.getElementById('texto-a-encriptar').value;
    let desencryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('texto-encriptado').value = desencryptedText
}

function copiar() {
    //para copiar
    let outputText = document.getElementById('texto-encriptado').value;
    navigator.clipboard.writeText(outputText);
}
