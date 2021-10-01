
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberChars = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = [ "_","#","+","=","(","^","&","%","-","*","$",")","@",];
var passwordChars = [];
var password = [];


  var numCharacter = Number(prompt ("Password Length: Between 8 and 128 Characters")); // asks user in a prompt window in browser to pick a value between 8 and 128

  if (numCharacter >= 8 && numCharacter <= 128) { //sets the criteria for the alert
    console.log(numCharacter)
  }
  
  else {
    alert("Invalid Entry. Please enter a password between 8 and 128 characters") // displays an alert if user does not meet requirements for the password. If input is less than 8 or more than 128 they are asked to resubmit. 
    return "";
  }
  
  var characters = confirm ("Special Characters?"); // asks user to define what characters they want in password in confirmation boxes in browser.
  var lowercase = confirm ("Lowercase Letters?");
  var number = confirm ("Numbers?");
  var uppercase = confirm ("Uppercase Letters?");

if (number){
  passwordChars = passwordChars.concat(numberChars); // links the Arrays together so more than one character can be used in the password.
}

if (uppercase){
  passwordChars = passwordChars.concat(uppercaseChars);
}

if (lowercase){
  passwordChars = passwordChars.concat(lowercaseChars);
}

if (characters){
  passwordChars = passwordChars.concat(specialChars);
}

if (
  !lowercase && !uppercase && !number && !characters
) {
  return alert("Invalid Entry. No characters selected") //another alert which is enabled when user doesn't input any characters or numbers.
  
}

console.log(passwordChars)


for (var i = 0; i < numCharacter; i++) {    // takes characters from the concatenated Arrays and loops them to provide a randomized password.
  password.push (passwordChars[Math.floor(Math.random() * passwordChars.length)]); 
  }

  return password.join("") ;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword); //allows user to click on the button that prompts the password generator
