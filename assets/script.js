// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#password")
var number = "0123456789".split("");
var letter = "abcdefghijklmnopqrstuvwxyz".split("");
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var special = "!@#$%^&*()?><".split("");
var passwordText = document.querySelector("#password");



// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordCharacters = "";
  var userInput = confirm("Please choose password criteria.")  
  if(userInput === false) {    
    var alertMessage = alert("Please confirm!")
    alertMessage;
    userInput;
  }
  var passwordLength = prompt("Please choose how many charcters in your password (must be between 8-128 characters)")
  var passwordLength = window.parseFloat(passwordLength); 
  if(passwordLength < 8) {
    alert("Password must have at least 8 characters!")
  }
  if(passwordLength > 128) {
    alert("Password must be 128 or less characters!")
  }
  if(passwordLength == "") {
    alert("Please enter a number!")
  }

  var passwordSpecial = confirm("Would you like to include special characters?")
  
  if(passwordSpecial) {
    passwordCharacters += passwordSpecial;
  }

  var passwordCaps = confirm("Would you like to include captial letters?")

  if (passwordCaps) {
    passwordCharacters += passwordCaps;
  }

  var passwordLower = confirm("Would you like to include lowercase letters?")

  if (passwordLower) {
    passwordCharacters += passwordLower;    
  }

  var passwordNum = confirm("Would you like to include numbers?")

  if (passwordNum) {
    passwordCharacters += passwordNum;
  }
  
  for (var i = 0; i < passwordLength; i++) {
    password = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
  }
 

  generatePassword.addEventListener("click", writePassword);
   //create a generatePassword function
  passwordText.value = password;
}

function generatePassword() {
  var password = writePassword();
  var textArea = document.getElementById("password")
  textArea.value = password;
} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
