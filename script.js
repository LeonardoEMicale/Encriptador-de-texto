//declaracion de variables
const textinput = document.getElementById("textinput");
const textoutput = document.getElementById("textoutput");
const encryptbutton = document.getElementById("encryptbutton");
const copytextbutton = document.getElementById("copytext");
const decryptbutton = document.getElementById("decryptbutton");

//evento para encriptar el texto recibido por el usuario en el textinput
encryptbutton.addEventListener("click", encryptText);

function encryptText() {
  const receivedText = textinput.value;
  let encryptedText = "";

  // Expresión regular para validar que solo hay letras minúsculas
  const regex = /^[a-z]+$/;

  if (!regex.test(receivedText)) {
    alert("Ingrese solo letras minúsculas sin caracteres especiales ni acentos.");
    return;
  }

  for (let i = 0; i < receivedText.length; i++) {
    const currentChar = receivedText[i];
    let encryptedChar = currentChar;

    // Aplicar reglas de encriptación
    switch (currentChar) {
      case "e":
        encryptedChar = "enter";
        break;
      case "i":
        encryptedChar = "imes";
        break;
      case "a":
        encryptedChar = "ai";
        break;
      case "o":
        encryptedChar = "ober";
        break;
      case "u":
        encryptedChar = "ufat";
        break;
      default:
        // Mantener el carácter original si no se encuentra en las reglas de encriptación
        break;
    }

    encryptedText += encryptedChar;
  }

  textoutput.value = encryptedText;
  textinput.value = "";
}

//evento para desencriptar el texto recibido por el usuario en el textinput
decryptbutton.addEventListener("click", decryptText);

function decryptText() {
  const receivedText = textinput.value;
  const decryptedText = receivedText.replace(/enter/gi, "e")
                                   .replace(/imes/gi, "i")
                                   .replace(/ai/gi, "a")
                                   .replace(/ober/gi, "o")
                                   .replace(/ufat/gi, "u");
  
  textoutput.value = decryptedText;
  textinput.value = "";
}

//evento para copiar el texto encriptado al portapapeles
copytextbutton.addEventListener("click", tocopytext);

function tocopytext() {
  const copiedtext = textoutput.value;
  navigator.clipboard.writeText(copiedtext);
}