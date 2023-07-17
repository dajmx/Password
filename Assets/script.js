// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  passwordText.classList.replace("password","password-large");
 console.log( passwordText.classList);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
 
    var length = parseInt(prompt("Ingrese la longitud deseada, maximo 8 caracteres"));
    if (length > 8) {
      length = 8;
    }
    var incluirMayusculas = confirm("¿Desea incluir letras mayúsculas?");
    var incluirMinusculas = confirm("¿Desea incluir letras minúsculas?");
    var incluirEspeciales = confirm("¿Desea incluir letras especiales?");

    var caracteres = "";
    var password = "";
  
    if (incluirMayusculas) {
      caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (incluirMinusculas) {
      caracteres += "abcdefghijklmnopqrstuvwxyz";
    }
    if (incluirEspeciales) {
      caracteres =caracteres + "!\"#$%&'()*+-/:;<=>?@[\\]^_`{|}~";
    }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * caracteres.length);
    password = password+caracteres.charAt(randomIndex);
    }
    return password;
}