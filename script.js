function encrypt() {
    var inputText = document.getElementById('inputText').value;
    var encryptedText = btoa(inputText);
    document.getElementById('outputText').innerText = "Texto Encriptado: " + encryptedText;
}

function decrypt() {
    var inputText = document.getElementById('inputText').value;
    try {
        var decryptedText = atob(inputText);
        document.getElementById('outputText').innerText = "Texto Desencriptado: " + decryptedText;
    } catch (error) {
        document.getElementById('outputText').innerText = "Error al desencriptar el texto.";
    }
}

function copyToClipboard() {
    var outputText = document.getElementById('outputText').innerText;
    var encryptedText = outputText.split(": ")[1].trim();

    var textArea = document.createElement("textarea");
    textArea.value = encryptedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Crear y mostrar el mensaje discreto
    var messageBox = document.createElement("div");
    messageBox.innerText = "Texto encriptado copiado al portapapeles";
    messageBox.className = "messageBox";
    document.body.appendChild(messageBox);

    // Añadir la clase para mostrar el mensaje
    messageBox.classList.add("show");

    // Ocultar el mensaje después de 2 segundos
    setTimeout(function() {
        // Quitar la clase para ocultar el mensaje
        messageBox.classList.remove("show");
        // Eliminar el elemento del DOM después de la transición
        setTimeout(function() {
            document.body.removeChild(messageBox);
        }, 500);
    }, 2000);
}


